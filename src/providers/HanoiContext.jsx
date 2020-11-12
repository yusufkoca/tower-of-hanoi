import React from "react";
import pickAColor from "../utils/pickAColor";

const HanoiContext = React.createContext();
HanoiContext.displayName = "HanoiContext";

function init(initialSize) {
  const disks = [];
  for (let i = 1; i <= initialSize; i++) {
    disks.push({ id: i, size: initialSize - i, color: pickAColor() });
  }
  return {
    step: 0,
    size: initialSize,
    src: disks,
    aux: [],
    dest: [],
  };
}

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "MOVE_DISK":
      const { diskId, from, to } = payload;
      const newState = { ...state };
      const diskIndex = state[from].findIndex((disk) => disk.id === diskId);
      newState[to].unshift(state[from][diskIndex]);
      newState[from].splice(diskIndex, 1);
      newState.step++;
      return newState;
    case "RESET":
      return init(action.payload.initialSize);
    default:
      return state;
  }
};

const HanoiProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, 3, init);

  const moveDisk = (payload) => {
    dispatch({ type: "MOVE_DISK", payload });
  };

  const checkGameOverStatus = () => {
    return state.dest.length === state.size;
  };

  const restartGame = (newGameSize = 3) => {
    dispatch({ type: "RESET", payload: { initialSize: newGameSize } });
  };

  return (
    <HanoiContext.Provider
      value={{ state, moveDisk, checkGameOverStatus, restartGame }}
    >
      {children}
    </HanoiContext.Provider>
  );
};

const useHanoi = () => {
  const context = React.useContext(HanoiContext);
  if (context === undefined) {
    throw new Error("useHanoi must be used within a HanoiProvider");
  }

  return context;
};
export { HanoiProvider, HanoiContext, useHanoi };
