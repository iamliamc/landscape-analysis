import { Handle, Position, type NodeProps } from '@xyflow/react';
import ColorCombo from '../components/ColorCombo';
import { type P5Node } from './types';

const P5Node = ({data}: NodeProps<P5Node>) => {
  return (
    <div className="react-flow__node-default" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Handle type="source" position={Position.Top} id="p5-source"/>
      <ColorCombo colors={ ["#4f5bdb", "#66cdaa", "#00a4b2"] } />
      <Handle type="target" position={Position.Bottom} id="p5-target"/>
    </div>
  );
};

export default P5Node;