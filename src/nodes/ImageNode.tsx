import { memo } from 'react';
import { Handle, Position, NodeProps, Node } from '@xyflow/react';

interface ImageNodeProps {
  imageSrc: string;
  isPublic?: boolean;
  alt?: string;
}


const ImageNode = ({ data }: React.FC<NodeProps<ImageNodeProps>>) => {
  const { imageSrc, isPublic = false, alt = 'Node Image' } = data;

  return (
    <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: '5px', padding: '10px' }}>
      <Handle type="target" position={Position.Top} />
      <img 
        src={imageSrc} 
        alt={alt} 
        style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain' }} 
      />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default memo(ImageNode);