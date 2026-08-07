import Button from "../../components/ui/Button";

const DeleteModal = ({
  open,
  title = "Delete Item",
  message = "Are you sure?",
  onClose,
  onConfirm,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">

        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            🗑️
          </div>

          <div>
            <h2 className="text-xl font-bold">
              {title}
            </h2>

            <p className="text-gray-500">
              {message}
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <Button
            variant="secondary"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={onConfirm}
          >
            Delete
          </Button>
        </div>

      </div>
    </div>
  );
};

export default DeleteModal;