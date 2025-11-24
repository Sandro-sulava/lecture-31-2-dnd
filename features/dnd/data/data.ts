import { ColumnType, Task } from "../types";

export const COLUMNS: ColumnType[] = [
  { id: "TODO", title: "ToDo" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];

export const INITIAL_TASKS: Task[] = [
  {
    id: "1",
    title: "Research Project",
    description: "Gather requirements and create initial documentation",
    status: "TODO",
  },
  {
    id: "2",
    title: "Design System",
    description: "Create component library and design tokens",
    status: "TODO",
  },
  {
    id: "3",
    title: "API Integration",
    description: "Implement REST API endpoints",
    status: "IN_PROGRESS",
  },
  {
    id: "4",
    title: "Testing",
    description: "Write unit tests for core functionality",
    status: "DONE",
  },
  {
    id: "5",
    title: "Testing4",
    description: "Write unit tests for core functionalit4y",
    status: "IN_PROGRESS",
  },
  {
    id: "6",
    title: "Testing4",
    description: "Write unit tests for core functionalit4y",
    status: "DONE",
  },
];
