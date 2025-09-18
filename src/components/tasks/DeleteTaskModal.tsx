import { BaseModal } from "@/components/ui/BaseModal";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { deleteTask } from "@/api/tasks_api";

export function DeleteTaskModal({
  taskId,
  onTaskDeleted,
}: {
  taskId: string;
  onTaskDeleted: () => void;
}) {
  const handleDelete = async (close: () => void) => {
    await deleteTask(taskId);
    onTaskDeleted(); // refetch tasks
    close(); // ✅ close modal after confirm
  };

  return (
    <BaseModal
      trigger={
        <Button size="icon" variant="destructive">
          <Trash2 />
        </Button>
      }
      title="Delete Task"
      description="Are you sure you want to delete this task? This action cannot be undone."
    >
      {(close) => (
        <div className="flex gap-2 mt-4">
          <Button variant="secondary" className="flex-1" onClick={close}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            className="flex-1"
            onClick={() => handleDelete(close)}
          >
            Delete
          </Button>
        </div>
      )}
    </BaseModal>
  );
}
