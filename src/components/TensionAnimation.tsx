import React, { useCallback, useEffect, useState, useRef } from 'react';
import {
    ReactFlow,
    ReactFlowProvider,
    Background,
    Controls,
    MiniMap,
    useNodesState,
    useEdgesState,
    addEdge,
    Handle,
    Position,
    Node,
    Edge,
    useReactFlow,
    useViewport,
    type OnConnect,
  } from '@xyflow/react';
  import Animation from '@mui/icons-material/Animation';
    import Api from '@mui/icons-material/Api';
  import '@xyflow/react/dist/style.css';
  import { Box, keyframes } from '@mui/material';

  const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const CircleNode = ({ data }) => (
  <div
    style={{
      background: data.color,
      width: 80,
      height: 80,
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    }}
  >
        <Handle type="source" position={Position.Bottom} style={{ bottom: 0 }} />
        <Handle type="target" position={Position.Top} style={{ top: 0 }} />
    <Box
      sx={{
        animation: `${pulse} 2s infinite ease-in-out`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {data.icon}
    </Box>
  </div>
);
  
  const nodeTypes = {
    circle: CircleNode,
  };


  const TensionAnimation = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([
        { 
          id: '1', 
          type: 'circle', 
          position: { x: 0, y: 0 }, 
          data: { 
            color: '#ff0072', 
            icon: <Animation sx={{ fontSize: 40 }} /> 
          } 
        },
        { 
          id: '2', 
          type: 'circle', 
          position: { x: 0, y: 100 }, 
          data: { 
            color: '#0041d0', 
            icon: <Api sx={{ fontSize: 40 }} /> 
          } 
        },
      ]);
      const [edges, setEdges, onEdgesChange] = useEdgesState([
        { id: 'e1-2', source: '1', target: '2', animated: true },
      ]);

    
      const [animationProgress, setAnimationProgress] = useState(0);
    
      useEffect(() => {
        const animationInterval = setInterval(() => {
          setAnimationProgress((prev) => (prev + 0.001) % 1);
        }, 16);
    
        return () => clearInterval(animationInterval);
      }, []);
    
      useEffect(() => {
        setNodes((nds) =>
          nds.map((node) => {
            if (node.id === '1') {
              // Move left node to the left
              return { ...node, position: { x: 150 - animationProgress * 100, y: 100 } };
            }
            if (node.id === '2') {
              // Move right node to the right
              return { ...node, position: { x: 150 + animationProgress * 100, y: 200 } };
            }
            return node;
          })
        );
      }, [animationProgress, setNodes]);
    
      const onInit = useCallback((reactFlowInstance) => {
        console.log('flow loaded:', reactFlowInstance);
      }, []);
  
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onInit={onInit}
          proOptions={{ hideAttribution: true }}
          nodeTypes={nodeTypes}
          fitView
        >
          {/* <Background color="#aaa" gap={16} /> */}
        </ReactFlow>
      </div>
    );
  };
  
  export default TensionAnimation;