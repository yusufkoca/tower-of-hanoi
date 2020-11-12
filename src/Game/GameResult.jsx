import React from "react";
import Button from "../components/Button";
import { useHanoi } from "../providers/HanoiContext";

const GameResult = () => {
  const { restartGame, state: hanoiState } = useHanoi();
  return (
    <>
      <h3>You Won in {hanoiState.step} steps!</h3>
      <h3>Play Again</h3>
      <Button onClick={() => restartGame(3)}>Easy (3 disks)</Button>
      <Button onClick={() => restartGame(5)}>Medium (5 disks)</Button>
      <Button onClick={() => restartGame(7)}>Hard (7 disks)</Button>
    </>
  );
};

export default GameResult;
