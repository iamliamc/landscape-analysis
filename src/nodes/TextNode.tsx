import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface TextNodeData {
  header: string;
  body: string;
  color?: string;
}

interface TextNodeProps {
  data: TextNodeData;
}

const TextNode: React.FC<TextNodeProps> = ({ positionAbsoluteX, positionAbsoluteY, data }) => {
  const { header, body, color = '#ffffff', maxWidth = 350 } = data;
  const x = `${Math.round(positionAbsoluteX)}px`;
  const y = `${Math.round(positionAbsoluteY)}px`;

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Card 
        sx={{ 
          minWidth: 200, 
          maxWidth: maxWidth,
          backgroundColor: color,
          boxShadow: 3,
        }}
      >
        <CardContent>
            <div>
                {x} {y}
            </div>
          <Typography variant="h6" component="div" gutterBottom>
            {header}
          </Typography>
          <Box sx={{ height: 2, backgroundColor: 'rgba(0,0,0,0.1)', mb: 1 }} />
          <Typography variant="body1">
            {body}
          </Typography>
        </CardContent>
      </Card>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export default TextNode;