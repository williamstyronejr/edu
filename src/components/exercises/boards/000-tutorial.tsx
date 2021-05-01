import * as React from 'react';
import Game from '../../shared/Game';
import Platform from '../../shared/Platform';
import CodeTool from '../../shared/CodeTool';

const Tutorial = (props: Object) => {
  return (
    <>
      <Game>
        <Platform color="blue" sizeX={1} sizeY={0.3} sizeZ={1} />
      </Game>
      {/* <CodeTool /> */}
    </>
  );
};

export default Tutorial;
