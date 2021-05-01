import * as React from 'react';
import Game from '../../shared/Game';
import CodeTool from '../../shared/CodeTool';
import Bot from '../../shared/Bot';
import { useGame } from '../../shared/gameReducer';

const Example = (props: Object) => {
  const state = useGame();

  return (
    <>
      <Game>
        {/* Put game objects here to create a board */}

        {/* Bot for player to send commands to */}
        <Bot defaultPosition={{ x: 0, y: 0 }} />
      </Game>

      <CodeTool
        supportedLanguages={['javascript']}
        numberOfFunctions={1}
        blockTypes={[{ name: 'left', amount: 1 }]}
      />
    </>
  );
};

export default Example;
