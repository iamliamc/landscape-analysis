import type { Edge, EdgeTypes } from '@xyflow/react';

export const initialEdges: Edge[] = [
  { id: 'a->c', source: 'a', target: 'c', animated: true },
  { id: 'b->d', source: 'b', target: 'd' },
  { id: 'c->d', source: 'c', target: 'd', animated: true },
  { id: 'c->e', source: 'c', target: 'e', targetHandle: 'p5-target' },
  { id: 'e->d', source: 'e', sourceHandle: 'p5-source', target: 'd' },
  { id: 'f->e', source: 'f', target: 'e', targetHandle: 'p5-target' },
  // { id: 'e->f', source: 'e', sourceHandle: 'fungi-crawler-source', target: 'd' },
];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
