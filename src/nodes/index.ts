import type { NodeTypes } from '@xyflow/react';

import { PositionLoggerNode } from './PositionLoggerNode';
import { ColorSelectorNode } from './ColorSelectorNode';
import FungiCrawlerNode from '../components/FungiCrawlerNode';
import P5Node from './P5Node';
import { AppNode } from './types';

const initBgColor = '#1A192B';


export const initialNodes: AppNode[] = [
  { id: 'a', type: 'input', position: { x: 0, y: 0 }, data: { label: 'wire' } },
  {
    id: 'b',
    type: 'position-logger',
    position: { x: -100, y: 100 },
    data: { label: 'drag me!' },
  },
  { id: 'c', position: { x: 100, y: 100 }, data: { label: 'your ideas' } },
  {
    id: 'd',
    type: 'output',
    position: { x: 0, y: 200 },
    data: { label: 'with React Flow' },
  },
  {
    id: 'e',
    type: 'p5node',
    position: { x: 300, y: 400 },
    data: { label: 'P5' },
  },
  {
    id: 'f',
    type: 'fungi-crawler',
    position: { x: -500, y: 225 },
    data: { label: 'Fungi' },
  }
];

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  'p5node': P5Node,
  'color-selector': ColorSelectorNode,
  'fungi-crawler': FungiCrawlerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
