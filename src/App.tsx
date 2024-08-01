import { useCallback, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Footer from './components/Footer'

import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  useReactFlow,
  type OnConnect,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { initialNodes, nodeTypes } from './nodes';
import { initialEdges, edgeTypes } from './edges';
import OpeningDialogue from './components/OpeningDialogue';
import { keyframes } from '@emotion/react';
import { Button, Container } from '@mui/material';


function Flow({isDialogueClosed, triggerViewportMove, resetTrigger}) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );


  const proOptions = { hideAttribution: true };

  enum NodeAdditionMode {
    OnlyPredefined,
    OnlyRandom,
    Mixed
  }

  const [nodeIndex, setNodeIndex] = useState(0);
  const [addedNodeIds, setAddedNodeIds] = useState(new Set());
  const [nodeAdditionMode, setNodeAdditionMode] = useState<NodeAdditionMode>(NodeAdditionMode.Mixed);
  const [isViewportLocked, setIsViewportLocked] = useState(true);
  const [viewportMoveCount, setViewportMoveCount] = useState(0);
  const { setViewport, getViewport } = useReactFlow();

  const handleMoveViewport = () => {
    setViewportMoveCount((prev) => prev + 1);
    if (viewportMoveCount === 0) {
      setViewport({ x: 1500, y: 1500, zoom: 1.5 }, { duration: 3000 });
    } else if (viewportMoveCount === 1) {
      setViewport({ x: -500, y: -500, zoom: 2 }, { duration: 2500 });
    } else {
      setIsViewportLocked(false)
    }
  };

  useEffect(() => {
    if (triggerViewportMove) {
      handleMoveViewport();
      resetTrigger();
    }
  }, [triggerViewportMove, resetTrigger]);

  const addNextNode = useCallback(() => {
    if (nodes.length >= 100) {
      console.log("Maximum number of nodes reached");
      return;
    }
  
    let newNode: Node | null = null;
    let newEdges: Edge[] = [];
  
    const addPredefinedNode = () => {
      if (nodeIndex < initialNodes.length) {
        newNode = { ...initialNodes[nodeIndex], id: `initial-${nodeIndex}` };
        
        initialEdges.forEach(edge => {
          if (edge.source === newNode!.id && addedNodeIds.has(edge.target)) {
            newEdges.push({ ...edge, id: `e${edge.source}-${edge.target}` });
          } else if (edge.target === newNode!.id && addedNodeIds.has(edge.source)) {
            newEdges.push({ ...edge, id: `e${edge.source}-${edge.target}` });
          }
        });
      } else {
        // If we've used all predefined nodes, add a random one instead
        if (nodeAdditionMode === NodeAdditionMode.OnlyPredefined) {
        } else {
          addRandomNode();
        }
      }
    };
  
    const addRandomNode = () => {
      newNode = {
        id: `random-${Math.floor(Math.random() * 10000)}`,
        data: { label: `Random Node ${nodes.length + 1}` },
        position: { x: Math.random() * 3000 - 1500, y: Math.random() * 3000 - 1500 },
      };
    };
  
    switch (nodeAdditionMode) {
      case NodeAdditionMode.OnlyPredefined:
        addPredefinedNode();
        break;
      case NodeAdditionMode.OnlyRandom:
        addRandomNode();
        break;
      case NodeAdditionMode.Mixed:
        if (nodeIndex % 2 === 0) {
          addPredefinedNode();
        } else {
          addRandomNode();
        }
        break;
    }
  
    if (newNode) {
      if (newEdges.length === 0 && nodes.length > 0) {
        const targetNode = nodes[Math.floor(Math.random() * nodes.length)];
        newEdges.push({
          id: `e${newNode.id}-${targetNode.id}`,
          source: newNode.id,
          target: targetNode.id,
        });
      }
  
      setNodes((nds) => nds.concat(newNode!));
      setEdges((eds) => eds.concat(newEdges));
      setNodeIndex((prevIndex) => prevIndex + 1);
      setAddedNodeIds((prevIds) => new Set(prevIds).add(newNode!.id));
    }
  }, [nodes, setNodes, setEdges, nodeIndex, addedNodeIds, nodeAdditionMode]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isDialogueClosed) {
      interval = setInterval(() => {
        addNextNode();
      }, 10);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isDialogueClosed, addNextNode]);

  return (
        <>
          <ReactFlow
              nodes={nodes}
              nodeTypes={nodeTypes}
              onNodesChange={onNodesChange}
              edges={edges}
              edgeTypes={edgeTypes}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              proOptions={proOptions}
              defaultViewport={{x: 800, y: 100, zoom: 0.75 }}
              fitView={false}
              panOnDrag={!isViewportLocked}
              zoomOnScroll={!isViewportLocked}
          >
            <Background />
            <MiniMap />
            <Controls />
          </ReactFlow>
          </>
  );
}

export default function App() {
  const [isDialogueClosed, setIsDialogueClosed] = useState(false);

  // Create a light theme for the main application
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  }); 

  const hueRotate = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(270deg);
  }
`;

  // Create a custom theme
  const appBarTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: 'linear-gradient(45deg, #FF1493, #00BFFF)',
            animation: `${hueRotate} 15s linear infinite`,
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
          },
        },
      },
    },
  });

  // Create a dark theme for the toolbar
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const [triggerViewportMove, setTriggerViewportMove] = useState(false);

  const handleMoveViewport = () => {
    setTriggerViewportMove(true);
  };

  return (
    <ThemeProvider theme={lightTheme}>
    <CssBaseline />

    <OpeningDialogue onDialogueClosed={setIsDialogueClosed} />
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <ThemeProvider theme={appBarTheme}>
        <AppBar position="static">
          <Toolbar>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Box sx={{ 
        flexGrow: 1, 
        m: 2, 
        border: '1px solid #ddd', 
        borderRadius: 1,
        overflow: 'hidden'
      }}>
        {isDialogueClosed && (
        <ReactFlowProvider>
          <Flow 
            isDialogueClosed={isDialogueClosed} 
            triggerViewportMove={triggerViewportMove}
            resetTrigger={() => setTriggerViewportMove(false)}
          />
        </ReactFlowProvider>
               )}
       </Box>
       <Container maxWidth="sm" sx={{ my: 2, textAlign: 'center' }}>
        {isDialogueClosed && (
          <Button variant="contained" color="primary" onClick={handleMoveViewport}>
            Explore Provocations
          </Button>
        )}
      </Container>
       <Footer />
     </Box>
 
   </ThemeProvider>
  )
}
