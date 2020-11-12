import { useDrop } from "react-dnd";
import Rod from "./Rod";
import { useHanoi } from "../../providers/HanoiContext";

const DroppableRod = ({ name, children, ...props }) => {
  const { state: hanoiState } = useHanoi();
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "disk",
    canDrop: (item, monitor) => {
      if (name === item.rod) return false; // prevent dragging to same rod
      if (item.diskId !== hanoiState[item.rod][0].id) return false; // prevent dragging disks that not on top
      // prevent dragging large disk onto smaller disk
      const targetRod = hanoiState[name];
      if (targetRod.length !== 0) {
        const targetRodsTopDisk = targetRod[targetRod.length - 1];
        if (targetRodsTopDisk.size > item.size) {
          return false;
        }
      }

      return true;
    },
    drop: () => ({ name: name }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  let backgroundColor = "aliceblue";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }
  return (
    <Rod ref={drop} style={{ backgroundColor }} {...props}>
      {children}
    </Rod>
  );
};

export default DroppableRod;
