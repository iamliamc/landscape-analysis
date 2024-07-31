import { useRef, useEffect } from 'react';
import p5 from 'p5';
import { Handle, Position } from '@xyflow/react';

const FungiCrawlerNode = ({ data }) => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let grid;
      let columns;
      let rows;
      let size = 4;
      let dirs = ['N', 'E', 'S', 'W'];
      let fungi = { x: 2, y: -3, d: 'N'};
      let myColors = ["#4f5bdb", "#66cdaa", "#00a4b2", '#ff9157'];

      p.setup = () => {
        p.createCanvas(400, 400);
        columns = p.width / size;
        rows = p.height / size;
        grid = createGrid();
        p.frameRate(600);
        
        for (let i = 0; i < columns; i++) {
          for (let j = 0; j < rows; j++) {
            grid[i][j] = 1;
          }
        }
      };

      p.draw = () => {
        for (let i = 0; i < 1; i++) {
          let currentSquare = grid[fungi.x][fungi.y];
          
          let newDirection;
          if (currentSquare == 0) {
            grid[fungi.x][fungi.y] = 1;
            let x = fungi.x * size;
            let y = fungi.y * size;
            p.fill('white');
            p.stroke(0, 0, 0);
            p.rect(x, y, 12, size);
            let direction = fungi.d;
            let newDirectionIndex = mod(dirs.findIndex(e => e == direction) + 1, 4);
            newDirection = dirs[newDirectionIndex];
          } else {
            grid[fungi.x][fungi.y] = 0;
            let x = fungi.x * size;
            let y = fungi.y * size;
            p.fill(255, 255, 255);
            p.stroke(255, 255, 255);
            p.rect(x, y, size, 12);
            let direction = fungi.d;
            let newDirectionIndex = mod(dirs.findIndex(e => e == direction) - 1, 4);
            newDirection = dirs[newDirectionIndex];
          }

          if (newDirection == 'N') {
            fungi.y = mod(fungi.y - 1, rows);
          } else if (newDirection == 'E') {
            fungi.x = mod(fungi.x + 8 * p.random(-1, 1), columns);
          } else if (newDirection == 'W'){
            fungi.x = mod(fungi.x - 1 * 1.8, columns);
          } else {
            fungi.y = mod(fungi.y + 10 * p.random(0, 1), rows);
          } 
          fungi.d = newDirection;
          
          let x = fungi.x * size;
          let y = fungi.y * size;
          
          let randCol = p.floor(p.random(myColors.length));
          p.fill(myColors[randCol]);
          p.stroke(255, 255, 255);
          p.rect(x, y, 12, 10);
        }
      };

      function mod(n, m) {
        var remain = n % m;
        return Math.floor(remain >= 0 ? remain : remain + m);
      }

      function createGrid() {
        let arr = new Array(columns);
        for (let i = 0; i < arr.length; i++) {
          arr[i] = new Array(rows);
        }
        return arr;
      }
    };

    const p5Instance = new p5(sketch, sketchRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return (
    <div className="react-flow__node-default" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Handle type="target" position={Position.Top} id="fungi-crawler-target" />
      <div ref={sketchRef}></div>
      <Handle type="source" position={Position.Bottom} id="fungi-crawler-source" />
    </div>
  );
};

export default FungiCrawlerNode;