import { BaseModal } from "@/components/ui/BaseModal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { addTask } from "@/api/tasks_api";

export function NewTaskModal({ onTaskAdded }: { onTaskAdded: () => void }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (close: () => void) => {
    if (!title.trim()) return;
    await addTask(title);
    setTitle("");
    onTaskAdded(); // refetch tasks
    close(); // ✅ close modal after save
  };

  return (
    <BaseModal
      trigger={
        <Button variant="default" size="icon">
          <Plus />
        </Button>
      }
      title="Add New Task"
      description="Enter a title for your task."
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
