"use client";

import { useState } from "react";
import { COLUMNS, INITIAL_TASKS } from "../data/data";
import { Task } from "../types";
import Column from "./Column";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

const DndPage = () => {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;
    //      4
    const taskId = active.id as string;
    //     "TODO",
    //     "IN_PROGRESS"
    //     "DONE"
    const newStatus = over.id as Task["status"];

    setTasks(() =>
      tasks.map((eachElement) =>
        eachElement.id === taskId
          ? {
              ...eachElement,
              status: newStatus,
            }
          : eachElement
      )
    );
  }

  return (
    <div className="p-4">
      <div className="flex gap-8">
        <DndContext onDragEnd={handleDragEnd}>
          {COLUMNS.map((column) => (
            <Column
              key={column.id}
              column={column}
              tasks={tasks.filter((task) => task.status === column.id)}
            />
          ))}
        </DndContext>
      </div>
    </div>
  );
};

export default DndPage;
