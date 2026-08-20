const ConfirmModal = ({
    isOpen,
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm,
    onCancel,
    loading = false,
    danger = false,
  }) => {
    if (!isOpen) return null;
  
    return (
      <div
        className="
          fixed inset-0 z-[100]
          flex items-center justify-center
          bg-black/50
          px-4
          backdrop-blur-sm
        "
      >
        <div
          className="
            w-full max-w-md
            rounded-2xl
            bg-white
            p-6
            shadow-2xl
  
            dark:bg-slate-900
          "
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
  
          <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-slate-400">
            {message}
          </p>
  
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onCancel}
              disabled={loading}
              className="
                rounded-xl
                border border-gray-200
                px-4 py-2.5
                text-sm font-medium
                text-gray-700
                transition
                hover:bg-gray-100
                disabled:opacity-50
  
                dark:border-slate-700
                dark:text-slate-200
                dark:hover:bg-slate-800
              "
            >
              {cancelText}
            </button>
  
            <button
              type="button"
              onClick={onConfirm}
              disabled={loading}
              className={`
                rounded-xl
                px-4 py-2.5
                text-sm font-semibold
                text-white
                transition
                disabled:opacity-50
  
                ${
                  danger
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }
              `}
            >
              {loading
                ? "Please wait..."
                : confirmText}
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ConfirmModal;
  