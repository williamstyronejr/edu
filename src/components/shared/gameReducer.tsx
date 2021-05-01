import * as React from 'react';

const initState = {};

const actionTypes = {};

const gameReducer = (state: {}, action: { type: String; payload: any }) => {
  switch (action.type) {
    case '':
      return {
        ...state,
      };

    default:
      throw new Error('Unsupport ');
  }
};

const useGame = () => {
  const [state, dispatch] = React.useReducer(gameReducer, initState);

  return { state };
};

export { useGame, gameReducer };
