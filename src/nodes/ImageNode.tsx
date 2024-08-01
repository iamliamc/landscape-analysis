import { memo } from 'react';
import { Handle, Position, NodeProps, Node } from '@xyflow/react';

interface ImageNodeProps {
  positionAbsoluteX: number;
  positionAbsoluteY: number;
  imageSrc: string;
  isPublic?: boolean;
  alt?: string;
}


const ImageNode = ({positionAbsoluteX, positionAbsoluteY, data }: React.FC<NodeProps<ImageNodeProps>>) => {
  const { imageSrc, isPublic = false, alt = 'Node Image' } = data;
  const x = `${Math.round(positionAbsoluteX)}px`;
  const y = `${Math.round(positionAbsoluteY)}px`;

  return (
    <div style={{ background: 'white', border: '1px solid #ddd', borderRadius: '5px', padding: '10px' }}>
      <Handle type="target" position={Position.Top} />
      {data.label && <div>{data.label}</div>}

      <div>
        {x} {y}
      </div>
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