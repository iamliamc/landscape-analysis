import { useCallback, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Footer from './components/Footer'

import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  type OnConnect,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { initialNodes, nodeTypes } from './nodes';
import { initialEdges, edgeTypes } from './edges';
import OpeningDialogue from './components/OpeningDialogue';

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  const [isDialogueClosed, setIsDialogueClosed] = useState(false);

  // Create a light theme for the main application
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  }); 

  // Create a dark theme for the toolbar
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const proOptions = { hideAttribution: true };

  const addRandomNode = useCallback(() => {
    if (nodes.length >= 300) {
      console.log("Maximum number of nodes reached");
      return;
    }

    const newNode: Node = {
      id: `random-${Math.floor(Math.random() * 10000)}`,
      data: { label: `Random Node ${nodes.length + 1}` },
      position: { x: Math.random() * 3000 - 1500, y: Math.random() * 3000 - 1500 },
    };

    const targetNode = nodes[Math.floor(Math.random() * nodes.length)];
    const newEdge: Edge = {
      id: `e${newNode.id}-${targetNode.id}`,
      source: newNode.id,
      target: targetNode.id,
    };

    setNodes((nds) => nds.concat(newNode));
    setEdges((eds) => eds.concat(newEdge));
  }, [nodes, setNodes, setEdges]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isDialogueClosed) {
      interval = setInterval(() => {
        addRandomNode();
      }, 10);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isDialogueClosed, addRandomNode]);



  return (
    <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <OpeningDialogue onDialogueClosed={setIsDialogueClosed} />
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Syntropic Futures Climate Data & AI
            </Typography>
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
        >
          <Background />
          <MiniMap />
          <Controls />
        </ReactFlow>
        )}
      </Box>
      <Footer />
    </Box>

  </ThemeProvider>

  );
}
