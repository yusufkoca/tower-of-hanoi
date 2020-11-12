import styled from "styled-components";
import Modal from "react-modal";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Disk from "../components/Disk";
import Rod from "../components/Rod";
import Ground from "../components/Ground";
import Button from "../components/Button";
import { useHanoi } from "../providers/HanoiContext";
import GameResult from "./GameResult";

const Board = styled.div`
  height: 95%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const GameBoard = () => {
  const { state: hanoiState, checkGameOverStatus, restartGame } = useHanoi();
  return (
    <DndProvider backend={HTML5Backend}>
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
          <Rod name={rod}>
            <h3 style={{ flexGrow: 1 }}>{rod}</h3>
            {hanoiState[rod].map((item) => (
              <Disk
                diskId={item.id}
                color={item.color}
                size={item.size}
                key={item.id}
                rod={rod}
              ></Disk>
            ))}
          </Rod>
        ))}
      </Board>
      <Ground>
        <span style={{ margin: "1em" }}>Tower of Hanoi</span>
        <span>Step: {hanoiState.step}</span>
        <Button onClick={() => restartGame()}>Restart</Button>
      </Ground>
    </DndProvider>
  );
};

export default GameBoard;
