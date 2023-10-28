import FastPriorityQueue from "fastpriorityqueue";

const BOARD_SIZE = 4;

export const solveGame = async (initialState) => {
  const openSet = new FastPriorityQueue((a, b) => a.f - b.f);
  const cameFrom = new Map();
  const gScore = new Map();
  const fScore = new Map();
  const goalState = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null];

  const startNode = {
    state: initialState,
    g: 0,
    h: heuristic(initialState, goalState),
    f: heuristic(initialState, goalState)
  };

  openSet.add(startNode);
  gScore.set(startNode.state, 0);

  while (!openSet.isEmpty()) {
    const current = openSet.poll();


    if (isGoalState(current.state, goalState)) {
      return reconstructPath(cameFrom, current.state);
    }

    for (const neighborState of getNeighborStates(current.state, BOARD_SIZE)) {
      const tentativeGScore = gScore.get(current.state) + 1;

      if (!gScore.has(neighborState) || tentativeGScore < gScore.get(neighborState)) {
        cameFrom.set(neighborState, current.state);
        gScore.set(neighborState, tentativeGScore);
        const hValue = heuristic(neighborState, goalState);
        fScore.set(neighborState, tentativeGScore + hValue);

        openSet.add({
          state: neighborState,
          g: tentativeGScore,
          h: hValue,
          f: tentativeGScore + hValue
        });
      }
      
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }

  return null;
}

function heuristic(state, goalState) {
  let distance = 0;

  for (let i = 0; i < state.length; i++) {
    if (state[i] !== null) {
      const targetIndex = goalState.indexOf(state[i]);
      const currentIndex = i;
      const targetRow = Math.floor(targetIndex / BOARD_SIZE);
      const currentRow = Math.floor(currentIndex / BOARD_SIZE);
      const targetColumn = targetIndex % BOARD_SIZE;
      const currentColumn = currentIndex % BOARD_SIZE;

      distance += Math.abs(targetRow - currentRow) + Math.abs(targetColumn - currentColumn);
    }
  }

  return distance;
}

function isGoalState(state, goalState) {
  for (let i = 0; i < state.length; i++) {
    if (state[i] !== goalState[i]) {
      return false;
    }
  }

  return true;
}

function getNeighborStates(state, boardSize) {
  const neighborStates = [];
  const emptyTileIndex = state.indexOf(null);

  const possibleIndices = [emptyTileIndex - 1, emptyTileIndex + 1, emptyTileIndex - boardSize, emptyTileIndex + boardSize];

  for (const index of possibleIndices) {
    if (isTileValid(index, state, boardSize)) {
      const neighborState = [...state];
      neighborState[emptyTileIndex] = state[index];
      neighborState[index] = null;
      neighborStates.push(neighborState);
    }
  }

  return neighborStates;
}

function isTileValid(index, state, boardSize) {
  if (index < 0 || index >= state.length) {
    return false;
  }

  const emptyTileIndex = state.indexOf(null);
  return (
    Math.abs(emptyTileIndex % boardSize - index % boardSize) +
      Math.abs(Math.floor(emptyTileIndex / boardSize) - Math.floor(index / boardSize)) ===
    1
  );
}

function reconstructPath(cameFrom, current) {
  const path = [current];
  while (cameFrom.has(current)) {
    current = cameFrom.get(current);
    path.unshift(current);
  }
  return path;
}