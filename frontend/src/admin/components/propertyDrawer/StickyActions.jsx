import Button from "../../../components/ui/Button";
import {
  Pencil,
  Trash2,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

export default function StickyActions({
  onEdit,
  onDelete,
  onClose,
}) {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.35 }}
      className="sticky bottom-0 z-30 border-t border-white/40 bg-white/85 px-6 py-5 backdrop-blur-xl"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        {/* Close */}

        <Button
          variant="outline"
          onClick={onClose}
          className="h-12 rounded-2xl border-slate-300 px-6 hover:bg-slate-100"
        >
          <X className="mr-2 h-4 w-4" />
          Close
        </Button>

        {/* Delete */}

        <Button
          variant="outline"
          onClick={onDelete}
          className="h-12 rounded-2xl border-red-200 text-red-600 hover:border-red-300 hover:bg-red-50"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>

        {/* Edit */}

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={onEdit}
            className="h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-white shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-indigo-700"
          >
            <Pencil className="mr-2 h-4 w-4" />
            Edit Property
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}