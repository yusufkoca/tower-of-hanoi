const solveHanoi = (size, from, to, via, moves = [], moveDiskCallback) => {
  if (size === 0) return;

  solveHanoi(size - 1, from, via, to, moves, moveDiskCallback);

  moveDiskCallback && moveDiskCallback({ diskId: size, from: from, to: to });
  moves.push({ diskId: size, from: from, to: to });

  solveHanoi(size - 1, via, to, from, moves, moveDiskCallback);
};

export default solveHanoi;
