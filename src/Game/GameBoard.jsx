import styled from "styled-components";
import Modal from "react-modal";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Disk from "../components/Disk";
import Rod from "../components/Rod";
import { useHanoi } from "../providers/HanoiContext";
import GameResult from "./GameResult";

const Board = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const GameBoard = () => {
  const { state: hanoiState, checkGameOverStatus } = useHanoi();
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
        <Rod name="src">
          {hanoiState.src.map((item) => (
            <Disk
              diskId={item.id}
              color={item.color}
              size={item.size}
              key={item.id}
              rod={"src"}
            ></Disk>
          ))}
        </Rod>
        <Rod name="aux">
          {hanoiState.aux.map((item) => (
            <Disk
              diskId={item.id}
              color={item.color}
              size={item.size}
              key={item.id}
              rod={"aux"}
            ></Disk>
          ))}
        </Rod>
        <Rod name="dest">
          {hanoiState.dest.map((item) => (
            <Disk
              diskId={item.id}
              color={item.color}
              size={item.size}
              key={item.id}
              rod={"dest"}
            ></Disk>
          ))}
        </Rod>
      </Board>
    </DndProvider>
  );
};

export default GameBoard;
