import { BaseModal } from "@/components/ui/BaseModal";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { updateTask } from "@/api/tasks_api";
import type { Task } from "@/api/tasks_api";

export function EditTaskModal({ task, onTaskUpdated }: { task: Task; onTaskUpdated: () => void }) {
  const [title, setTitle] = useState(task.title);

  const handleSubmit = async (close: () => void) => {
    if (!title.trim()) return;
    await updateTask(task._id, { title });
    onTaskUpdated(); // refetch tasks
    close(); // ✅ close modal after save
  };

  return (
    <BaseModal
      trigger={
        <Button size="icon" variant="secondary">
          <Pencil />
        </Button>
      }
      title="Edit Task"
      description="Update the title of your task."
    >
      {(close) => (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title..."
            className="w-full border rounded px-2 py-1 dark:border-gray-700 bg-transparent"
          />
          <Button className="mt-4 w-full" onClick={() => handleSubmit(close)}>
            Save
          </Button>
        </>
      )}
    </BaseModal>
  );
}
