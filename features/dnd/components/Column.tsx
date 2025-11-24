import { useDroppable } from "@dnd-kit/core";
import { ColumnProps } from "../types";
import TaskCard from "./TaskCard";

const Column = ({ column, tasks }: ColumnProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });

  const style = {
    opacity: isOver ? 1 : 0.5,
    backgroundColor: isOver ? "#FF0000" : "",
  };

  return (
    <div className="flex w-80 flex-col rounded-lg bg-neutral-800 p-4">
      <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
      <div
        ref={setNodeRef}
        className="flex flex-1 flex-col gap-4"
        style={style}
      >
        {tasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
};

export default Column;
