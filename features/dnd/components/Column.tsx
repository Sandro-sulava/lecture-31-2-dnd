import { useDroppable } from "@dnd-kit/core";
import { ColumnProps } from "../types";
import TaskCard from "./TaskCard";
import { useForm } from "react-hook-form";
import { TaskForm, taskSchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const Column = ({ column, tasks, onCreateTask }: ColumnProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });

  const [showForm, setShowForm] = useState(false);

  const style = {
    opacity: isOver ? 1 : 0.5,
    backgroundColor: isOver ? "#FF0000" : "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskForm>({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data: TaskForm) => {
    onCreateTask({ ...data, status: column.id });
    reset();
    setShowForm(false);
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
