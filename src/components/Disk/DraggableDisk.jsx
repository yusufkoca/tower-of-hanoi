import { useDrag } from "react-dnd";
import Disk from "./Disk";
import { useHanoi } from "../../providers/HanoiContext";

const DraggableDisk = (props) => {
  const { moveDisk } = useHanoi();
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: "disk",
      diskId: props.diskId,
      rod: props.rod,
      size: props.size,
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        moveDisk({
          diskId: item.diskId,
          from: item.rod,
          to: dropResult.name,
        });
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;
  return <Disk ref={drag} style={{ opacity }} {...props}></Disk>;
};

export default DraggableDisk;
