const BOARD_SIZE = 4;

const initialState = {
  tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null],
  isGameComplete: false,
  elapsedTime: 0,
  isGameInProgress: false,
  timeLimit: 0,
  gameStartTime: Date.now(),
};

const shuffleTiles = (tiles) => {
  const shuffledTiles = [...tiles];
  for (let i = shuffledTiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledTiles[i], shuffledTiles[j]] = [shuffledTiles[j], shuffledTiles[i]];
  }

  return shuffledTiles;
};

const moveTile = (tiles, tileId) => {
  const updatedTiles = [...tiles];
  const tileIndex = updatedTiles.indexOf(tileId);
  const emptyTileIndex = updatedTiles.indexOf(null);

  const tileRow = Math.floor(tileIndex / BOARD_SIZE);
  const tileColumn = tileIndex % BOARD_SIZE;
  const emptyTileRow = Math.floor(emptyTileIndex / BOARD_SIZE);
  const emptyTileColumn = emptyTileIndex % BOARD_SIZE;

  const isMovable =
    (Math.abs(tileRow - emptyTileRow) === 1 &&
      tileColumn === emptyTileColumn) ||
    (Math.abs(tileColumn - emptyTileColumn) === 1 && tileRow === emptyTileRow);

  if (isMovable) {
    updatedTiles[tileIndex] = null;
    updatedTiles[emptyTileIndex] = tileId;
  }

  return updatedTiles;
};

const checkGameCompletion = (tiles) => {
  return (
    tiles.slice(0, -1).every((tile, index) => tile === index + 1) &&
    tiles[tiles.length - 1] === null
  );
};

export const gameReducer = (state = initialState, action) => {
  let isGameComplete;

  switch (action.type) {
    case "SHUFFLE_TILES":
      const shuffledTiles = shuffleTiles(initialState.tiles);
      return {
        ...state,
        tiles: shuffledTiles,
        isGameComplete: false,
        elapsedTime: 0,
      };
    case "MOVE_TILE":
      const updatedTiles = moveTile(state.tiles, action.payload);
      isGameComplete = checkGameCompletion(updatedTiles);
      return {
        ...state,
        tiles: updatedTiles,
        isGameComplete,
      };

    case "COMPLETE_GAME":
      return {
        ...state,
        isGameComplete: checkGameCompletion(state.tiles),
        elapsedTime: action.payload,
        isGameInProgress: false,
      };

      case 'START_GAME':
        console.log('Гра розпочата');
        return {
          ...state,
          isGameInProgress: true,
          timeLimit: action.payload,
          gameStartTime: Date.now(),
        };
      
      case 'STOP_GAME':
        if (state.isGameInProgress) {
          const elapsedTime = Math.floor((Date.now() - state.gameStartTime) / 1000);
          console.log('Гра зупинена');
          console.log('Пройдений час:', elapsedTime);
          const isGameComplete = checkGameCompletion(state.tiles);
          console.log('Гра завершена:', isGameComplete);
          return {
            ...state,
            isGameComplete,
            elapsedTime,
            isGameInProgress: false,
          };
        }
        return state;

    default:
      return state;
  }
};
