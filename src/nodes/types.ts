import type { Node, BuiltInNode } from '@xyflow/react';

export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;
export type P5Node = Node<{ label: string }, 'p5node'>;
export type FungiCrawlerNode = Node<{ label: string }, 'fungi-crawler'>;

export type AppNode = BuiltInNode | PositionLoggerNode | P5Node | FungiCrawlerNode;
