import type { NodeTypes } from '@xyflow/react';
import cutFruitsImage from '../assets/images/cut_fruits.png';
import bottleGif from '../assets/images/bottle.gif';
import catBubbleImage from '../assets/images/cat_bubble.png';
import fieldCirclesImage from '../assets/images/field_circles.png';
import sinkDishesImage from '../assets/images/sink_dishes.png';
import sprayShapedTextImage from '../assets/images/spray_shaped_text.png';

import { PositionLoggerNode } from './PositionLoggerNode';
import { ColorSelectorNode } from './ColorSelectorNode';
import FungiCrawlerNode from '../components/FungiCrawlerNode';
import ImageNode from './ImageNode';
import P5Node from './P5Node';
import { AppNode } from './types';

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
  }, 
  {
    id: 'image1',
    type: 'image-node',
    position: { x: 300, y: 200 },
    data: { 
      imageSrc: cutFruitsImage,
      isPublic: true,
      alt: 'Example Image'
    },
  },
  {
    id: 'image2',
    type: 'image-node',
    position: { x: 600, y: 200 },
    data: { 
      imageSrc: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/09/radiant1.jpg',
      alt: 'External Image'
    },
  },
  {
    id: 'image3',
    type: 'image-node',
    position: { x: 300, y: 600 },
    data: { 
      imageSrc: bottleGif,
      isPublic: true,
      alt: 'Example Image'
    },
  },
  {
    id: 'image4',
    type: 'image-node',
    position: { x: 600, y: 600 },
    data: { 
      imageSrc: catBubbleImage,
      isPublic: true,
      alt: 'Example Image'
    },  
  },
  {
    id: 'image5',
    type: 'image-node',
    position: { x: 900, y: 600 },
    data: { 
      imageSrc: fieldCirclesImage,
      isPublic: true,
      alt: 'Example Image'
    },
  },
  {
    id: 'image6',
    type: 'image-node',
    position: { x: 1200, y: 600 },
    data: { 
      imageSrc: sinkDishesImage,
      isPublic: true,
      alt: 'Example Image'
    },
  },
  {
    id: 'image7',
    type: 'image-node',
    position: { x: 1500, y: 600 },
    data: { 
      imageSrc: sprayShapedTextImage,
      isPublic: true,
      alt: 'Example Image'
    },
  }
];

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  'p5node': P5Node,
  'color-selector': ColorSelectorNode,
  'fungi-crawler': FungiCrawlerNode,
  'image-node': ImageNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
