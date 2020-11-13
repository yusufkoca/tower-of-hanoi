import styled from "styled-components";
import Modal from "react-modal";
import { TouchBackend } from "react-dnd-touch-backend";
import { DndProvider } from "react-dnd";
import DraggableDisk from "../components/Disk/DraggableDisk";
import Disk from "../components/Disk/Disk";
import Rod from "../components/Rod";
import Ground from "../components/Ground";
import Button from "../components/Button";
import { useHanoi } from "../providers/HanoiContext";
import GameResult from "./GameResult";
import { usePreview } from "react-dnd-preview";
import solveHanoi from "../utils/solveHanoi";

const Board = styled.div`
  height: 95%;
  width: 100%;
  display: flex;
  align-items: center;
`;
const DiskPreview = () => {
  // It is needed since touch support disables auto preview
  const { display, itemType, item, style } = usePreview();
  if (!display) {
    return null;
  }
  return (
    <Disk
      diskId={item.diskId}
      size={item.size}
      style={{ ...style, width: "30%" }} // TODO there should be a better way to set width
      color={item.color}
    >
      {item.diskId}
    </Disk>
  );
};

const GameBoard = () => {
  const {
    state: hanoiState,
    checkGameOverStatus,
    restartGame,
    moveDisk,
  } = useHanoi();

  // can be used to perform a simulation of users own solution
  const simulateSolution = (moves) => {
    const INTERVAL = 1000; // in milliseconds
    moves.forEach((move, index) => {
      setTimeout(() => {
        moveDisk(move);
      }, INTERVAL * index);
    });
  };

  const solvePuzzle = () => {
    const simulationMoves = [];
    solveHanoi(hanoiState.size, "src", "dest", "aux", simulationMoves);
    simulateSolution(simulationMoves);
  };

  return (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          margin: "auto",
          width: "fit-content",
          top: "10%",
          display: "flex",
        }}
      >
        {hanoiState.moves.length === 0 && (
          <Button onClick={() => solvePuzzle()}>Solve Puzzle</Button>
        )}

        <Button onClick={() => restartGame()}>Restart</Button>
      </div>

      <Modal
        isOpen={checkGameOverStatus()}
        contentLabel="Game Result"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            padding: 32,
          },
        }}
      >
        <GameResult></GameResult>
      </Modal>
      <Board>
        {["src", "aux", "dest"].map((rod) => (
          <Rod name={rod} key={rod}>
            <h3 style={{ flexGrow: 1 }}>{rod}</h3>
            {hanoiState[rod].map((item) => (
              <DraggableDisk
                diskId={item.id}
                color={item.color}
                size={item.size}
                key={item.id}
                rod={rod}
              >
                {item.id}
              </DraggableDisk>
            ))}

            <DiskPreview />
          </Rod>
        ))}
      </Board>
      <Ground>
        <span style={{ margin: "2%" }}>Tower of Hanoi</span>
        <span>Step: {hanoiState.moves.length}</span>
        <span style={{ margin: "2%" }}>Timer: </span>
      </Ground>
    </DndProvider>
  );
};

export default GameBoard;
