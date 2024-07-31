import { useRef, useEffect } from 'react';
import p5 from 'p5';

const ColorCombo = ({colors}) => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let myColors = colors;
      let randCol;

      p.setup = () => {
        p.createCanvas(400, 400);
        p.background('#ff9157');
      };

      p.draw = () => {
        randCol = p.random(myColors.length);
        randCol = p.floor(randCol);
        p.fill(myColors[randCol]);
        p.noStroke();
        p.rectMode(p.LEFT);
        p.rect((p.width / 2) - 10, p.random(p.height), 20, 20);
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default ColorCombo;