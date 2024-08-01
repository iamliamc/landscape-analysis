import type { NodeTypes } from '@xyflow/react';
import cutFruitsImage from '../assets/images/cut_fruits.png';
import bottleGif from '../assets/images/bottle.gif';
import catBubbleImage from '../assets/images/cat_bubble.png';
import fieldCirclesImage from '../assets/images/field_circles.png';
import sinkDishesImage from '../assets/images/sink_dishes.png';
import sprayShapedTextImage from '../assets/images/spray_shaped_text.png';
import electricalRootsImage from '../assets/images/electrical_roots.png';
import grassFlowImage from '../assets/images/grass_flow.png';
import halfSunflowerImage from '../assets/images/half_sunflower.png';
import seaFingerPrintImage from '../assets/images/sea_fingerprint.png';
import stonesAreLikeSmallWorldsImage from '../assets/images/stones_are_like_small_worlds.png';
import waterFlowImage from '../assets/images/water_flow.png';
import wavesGiftImage from '../assets/images/waves.gif';
import dandelionGif from '../assets/images/dandelion.gif';
import { PositionLoggerNode } from './PositionLoggerNode';
import { ColorSelectorNode } from './ColorSelectorNode';
import FungiCrawlerNode from '../components/FungiCrawlerNode';
import ImageNode from './ImageNode';
import P5Node from './P5Node';
import TextNode from './TextNode';

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
    position: { x: 750, y: 600 },
    data: { label: 'P5' },
  },
  {
    id: 'f',
    type: 'fungi-crawler',
    position: { x: -450, y: 350 },
    data: { label: 'Fungi' },
  }, 
  {
    id: 'image1',
    type: 'image-node',
    position: { x: 1450, y: 300 },
    data: { 
      imageSrc: cutFruitsImage,
      isPublic: true,
      alt: 'Example Image'
    },
  },
  {
    id: 'image2',
    type: 'image-node',
    position: { x: 750, y: 300 },
    data: { 
      imageSrc: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/09/radiant1.jpg',
      alt: 'External Image'
    },
  },
  {
    id: 'image3',
    type: 'image-node',
    position: { x: 430, y: 540 },
    data: { 
      imageSrc: bottleGif,
      isPublic: true,
      alt: 'Example Image'
    },
  },
  {
    id: 'image4',
    type: 'image-node',
    position: { x: 530, y: 850 },
    data: { 
      imageSrc: catBubbleImage,
      isPublic: true,
      alt: 'Example Image'
    },  
  },
  {
    id: 'image5',
    type: 'image-node',
    position: { x: 1075, y: 875 },
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
    id: 'text-1',
    type: 'text-node',
    position: { x: 0, y: 375 },
    data: { 
      header: 'Connecting Disparate Domains of Climate Data', 
      body: ' The various disciplines within climate science interact in complex ways that are not yet accurately modeled or integrated into decision-making processes. For instance, irrigation patterns have far-reaching impacts on energy transition strategies, yet these connections are frequently overlooked in isolated analyses. By breaking down barriers between specialties and fostering interdisciplinary collaboration, researchers can develop more comprehensive models that capture the intricate interplay of climate systems. This holistic approach is crucial for informing policy decisions, as it provides a more accurate representation of climate dynamics and their cascading effects across different sectors. Ultimately, bridging these data domains could lead to more effective climate change mitigation and adaptation strategies, enabling us to address environmental challenges with greater precision and foresight.',
      color: '#e3f2fd' // Light blue color
    }
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
  },
  {
    id: 'image8',
    type: 'image-node',
    position: { x: -225, y: -1355 },
    data: { 
      imageSrc: electricalRootsImage,
      isPublic: true,
      alt: 'Example Image'
    },
  },
  {
    id: 'image9',
    type: 'image-node',
    position: { x: -400, y: -1200 },
    data: { 
      imageSrc: wavesGiftImage,
      isPublic: true,
      alt: 'Example Image'
    },
  },
  {
    id: 'image10',
    type: 'image-node',
    position: { x: -1465, y: -1400 },
    data: { 
      imageSrc: halfSunflowerImage,
      isPublic: true,
      alt: 'Example Image'
    },
  },
  {
    id: 'image11',
    type: 'image-node',
    position: { x: -1300, y: -1185 },
    data: { 
      imageSrc: stonesAreLikeSmallWorldsImage,
      isPublic: true,
      alt: 'Example Image'
    },
  },
  {
    id: 'image12',
    type: 'image-node',
    position: { x: -1175, y: -1300 },
    data: { 
      imageSrc: seaFingerPrintImage,
      isPublic: true,
      alt: 'Example Image'
    },
  },
  {
    id: 'text-2',
    type: 'text-node',
    position: { x: -890, y: -1350 },
    data: { 
      header: 'What are we doing here? We have enough data.', 
      body: 'As we seek to collectively flourish while navigating towards lower net energy and material consumption, pivotal questions arise. How do we collectively define "a good life," and how can we ensure its universal provision? What activities provide real human well-being with little consumption, or better yet, while regenerating ecosystems? Addressing these questions demands new levels of imaginative civic engagement, ambitious public vision, and compelling communally oriented initiatives... not necessarily more advanced climate models',
      color: '#EB88AC' // Light pink
    }
  },
  {
    id: 'text-3',
    type: 'text-node',
    position: { x: 2200, y: 1400 },
    data: { 
      header: 'Limitations are the are the key to freedom and creativity', 
      body: 'As we undertake the necessary systemic transitions across major socio-economic categories: food, land and ocean use; infrastructure and the built environment; along with energy and extractives (WEF, 2020), we must be careful to reject the idea that we can simply techno-modernize our way out of this predicament. "Large rapid absolute reductions of resource use and GHG emissions cannot be achieved through observed decoupling rates, hence decoupling needs to be complemented by sufficiency-oriented strategies and strict enforcement of absolute reduction targets" (Haberl et al., 2020). Detractors of this position often equate achieving the necessary planetary equilibrium with a diminished standard of living. Contrary to this belief is the fact that "the drastic increases in societies energy use seen in recent decades have, beyond a certain point, had no benefit for the well-being of their populations" (Millward-Hopkins et. al, 2020). In the face of an aggressive status quo, we must demonstrate the models that better deliver lasting human well-being while supporting a rich natural world. To do so requires restoring function to our overly entrenched political system (Starr, 2019), and reigniting our capacity to imagine afresh the constitutive elements of our economy: work, property, and money (Parrique, 2019).',
      color: '#A9D6BF', // Light green
      maxWidth: 750
    }
  },
  {
    id: 'image13',
    type: 'image-node',
    position: { x: 1800, y: 1475 },
    data: { 
      imageSrc: dandelionGif,
      isPublic: true,
      alt: 'Example Image'
    },
  },

];

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  'p5node': P5Node,
  'color-selector': ColorSelectorNode,
  'fungi-crawler': FungiCrawlerNode,
  'image-node': ImageNode,
  'text-node': TextNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
