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
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
        p-4
        backdrop-blur-sm
        dark:bg-black/60
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-gray-200
          bg-white
          p-6
          shadow-2xl
          transition-colors
          duration-300

          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        <div className="mb-5 flex items-center gap-3">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-red-100
              dark:bg-red-900/40
            "
          >
            🗑️
          </div>

          <div className="min-w-0">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h2>

            <p className="text-gray-500 dark:text-slate-400">
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