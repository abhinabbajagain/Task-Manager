import type { Task } from "@/types/tasks";
import React from "react";
import TaskItems from "./TaskItems";

interface Props {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TaskList({ tasks, onToggle, onDelete }: Props) {
  return (
    <div>
      {tasks.map((t) => (
        <TaskItems
          onToggle={onToggle}
          onDelete={onDelete}
          id={t.id}
          completed={t.complete}
          title={t.title}
        />
      ))}
    </div>
  );
}

export default TaskList;
