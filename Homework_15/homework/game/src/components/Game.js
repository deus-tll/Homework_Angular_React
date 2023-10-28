import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  shuffleTiles,
  moveTile,
  completeGame,
  startGame,
  stopGame,
} from "../redux/gameActions";

import "./Game.css";
import { solveGame } from "../functions/gameSolver";

export const Game = () => {
  const dispatch = useDispatch();
  const tiles = useSelector((state) => state.tiles);
  const isGameComplete = useSelector((state) => state.isGameComplete);
  const isGameInProgress = useSelector((state) => state.isGameInProgress);

  const [isSolving, setIsSolving] = useState(false);
  const [timeLimit, setTimeLimit] = useState(0);
  const [gameStartTime, setGameStartTime] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    dispatch(shuffleTiles());
  }, [dispatch]);

  useEffect(() => {
    if (!isGameComplete) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isGameComplete]);

  useEffect(() => {
    if (isGameInProgress) {
      const intervalId = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - gameStartTime) / 1000);
        setElapsedTime(elapsedTime);
        
        if (elapsedTime >= timeLimit) {
          setShowResults(true);
          setIsSolving(false);
          dispatch(stopGame());
          dispatch(completeGame(timeLimit - elapsedTime));
        }
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isGameInProgress, timeLimit, gameStartTime, dispatch]);

  const handleTileClick = (tileId) => {
    if (!isGameComplete) {
      dispatch(moveTile(tileId));
    }
  };

  //я за допомогою інету зробив алгоритм, але він все одно занадто довго збирає. плюс прикол в том,
  //що він спочатку шукає вирішення всієї доски з плитками, а потім одразу переставить так як треба
  // const handleSolvePuzzle = async () => {
  //   if(!isGameComplete) {
  //     const solution = await solveGame(tiles);

  //     if(solution) {
  //       for(let i = 0; i < solution.length - 1; i++) {
  //         const currentTile = solution[i];
  //         const nextTile = solution[i + 1];
  //         const tileId = nextTile.indexOf(null);
  //         const tileToMove = currentTile[tileId];
  //         dispatch(moveTile(tileToMove));
  //       }
  //     }
  //   }
  // };

  function generateRandomMove(tiles) {
    const movableTiles = [];
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i] !== null) {
        movableTiles.push(i);
      }
    }
    const randomTileIndex = Math.floor(Math.random() * movableTiles.length);
    const selectedTileIndex = movableTiles[randomTileIndex];

    return {
      tileId: tiles[selectedTileIndex],
    };
  }

  useEffect(() => {
    if (isSolving) {
      const intervalId = setInterval(() => {
        const randomMove = generateRandomMove(tiles);
        dispatch(moveTile(randomMove.tileId));
      }, 10);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isSolving, tiles, dispatch]);

  const handleStartSolving = () => {
    setIsSolving(true);
  };

  const handleStopSolving = () => {
    setIsSolving(false);
  };

  const handleStartGame = () => {
    setGameStartTime(Date.now());
    dispatch(startGame(timeLimit));
    setShowResults(false);
  };

  const handleStopGame = () => {
    if (isGameInProgress) {
      dispatch(stopGame());
      setIsSolving(false); 
      dispatch(completeGame(timer));
      setShowResults(true);
    }
  };

  return (
    <div className="game-container">
      <div className="board">
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`tile ${tile === null ? "empty" : ""}`}
            onClick={() => handleTileClick(tile)}
          >
            {tile}
          </div>
        ))}
      </div>
      <div className="game-info">
        <div className="timer">Потік Часу: {timer} сек.</div>

        {(isGameComplete && isGameInProgress) || showResults ? (
          <div>
            <div className="message">Пройдений час {elapsedTime} секунд!</div>
            <div className="message">
              Результат {!isGameComplete ? "Ви програли" : "Ви виграли"}
            </div>
          </div>
        ) : null}

        {isSolving ? (
          <button className="btn btn-danger mt-5" onClick={handleStopSolving}>
            Зупинити
          </button>
        ) : (
          <button className="btn btn-dark mt-5" onClick={handleStartSolving}>
            Автоматично зібрати фішки
          </button>
        )}

        {isGameInProgress ? (
          <button className="btn btn-danger mt-5" onClick={handleStopGame}>
            Зупинити
          </button>
        ) : (
          <div>
            <input
              type="number"
              placeholder="Обмеження часу (секунди)"
              value={timeLimit}
              onChange={(e) => setTimeLimit(parseInt(e.target.value))}
            />
            <button className="btn btn-primary mt-2" onClick={handleStartGame}>
              Почати гру з обмеженням часу
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
