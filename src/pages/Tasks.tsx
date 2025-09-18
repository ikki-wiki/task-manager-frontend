import { useEffect, useState } from "react";
import { type Task, fetchTasks } from "@/api/tasks_api";
import { NewTaskModal } from "@/components/tasks/NewTaskModal.tsx";
import { EditTaskModal } from "@/components/tasks/EditTaskModal.tsx";
import { DeleteTaskModal } from "@/components/tasks/DeleteTaskModal.tsx";

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>

      <div className="mb-4">
        <NewTaskModal onTaskAdded={loadTasks} />
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task._id} className="flex justify-between items-center border rounded p-2">
            <span className={task.completed ? "line-through text-gray-500" : ""}>
              {task.title}
            </span>
            <div className="flex gap-2">
              <EditTaskModal task={task} onTaskUpdated={loadTasks} />
              <DeleteTaskModal taskId={task._id} onTaskDeleted={loadTasks} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
