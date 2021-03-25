import * as React from 'react';
import { Canvas } from 'react-three-fiber';

const Game = (props: any) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {props.children}
    </Canvas>
  );
};

export default Game;
