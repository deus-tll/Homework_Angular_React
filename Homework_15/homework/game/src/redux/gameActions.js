export const shuffleTiles = () => {
  return {
    type: 'SHUFFLE_TILES',
  };
};

export const moveTile = (tileId) => {
  return {
    type: 'MOVE_TILE',
    payload: tileId,
  };
};

export const completeGame = (time) => {
  return {
    type: 'COMPLETE_GAME',
    payload: time,
  };
};

export const startGame = (timeLimit) => {
  return {
    type: 'START_GAME',
    payload: timeLimit,
  };
};

export const stopGame = () => {
  return {
    type: 'STOP_GAME',
  };
};