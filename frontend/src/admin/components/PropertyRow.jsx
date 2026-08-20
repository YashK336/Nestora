import {
  Pencil,
  Trash2,
  Eye,
  MapPin,
} from "lucide-react";

const PropertyRow = ({
  property,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <tr
      className="
        border-b
        border-gray-200
        transition
        hover:bg-slate-50

        dark:border-slate-700
        dark:hover:bg-slate-800
      "
    >
      {/* Image */}
      <td className="px-4 py-4">
        <img
          src={
            property.images?.[0] ||
            "https://placehold.co/80x80?text=No+Image"
          }
          alt={property.title}
          className="h-16 w-16 rounded-xl object-cover shadow"
        />
      </td>

      {/* Title */}
      <td className="px-4 py-4">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {property.title}
        </h3>

        <p className="mt-1 flex items-center gap-1 text-sm text-gray-500 dark:text-slate-400">
          <MapPin size={14} />
          {property.city}
        </p>
      </td>

      {/* Price */}
      <td className="px-4 py-4 font-semibold text-blue-600 dark:text-blue-400">
        ₹{Number(property.price).toLocaleString("en-IN")}
      </td>

      {/* Status */}
      <td className="px-4 py-4">
        {property.featured ? (
          <span
            className="
              rounded-full
              bg-green-100
              px-3
              py-1
              text-xs
              font-medium
              text-green-700

              dark:bg-green-900/40
              dark:text-green-400
            "
          >
            ⭐ Featured
          </span>
        ) : (
          <span
            className="
              rounded-full
              bg-gray-100
              px-3
              py-1
              text-xs
              font-medium
              text-gray-600

              dark:bg-slate-700
              dark:text-slate-300
            "
          >
            Normal
          </span>
        )}
      </td>

      {/* Actions */}
      <td className="px-4 py-4">
        <div className="flex gap-2">
          {/* View */}
          <button
            type="button"
            onClick={() => onView?.(property)}
            title="View Property"
            aria-label="View Property"
            className="
              rounded-lg
              bg-blue-100
              p-2
              text-blue-600
              transition
              hover:bg-blue-200

              dark:bg-blue-900/40
              dark:text-blue-400
              dark:hover:bg-blue-900/60
            "
          >
            <Eye size={18} />
          </button>

          {/* Edit */}
          <button
            type="button"
            onClick={() => onEdit?.(property)}
            title="Edit Property"
            aria-label="Edit Property"
            className="
              rounded-lg
              bg-amber-100
              p-2
              text-amber-600
              transition
              hover:bg-amber-200

              dark:bg-amber-900/40
              dark:text-amber-400
              dark:hover:bg-amber-900/60
            "
          >
            <Pencil size={18} />
          </button>

          {/* Delete */}
          <button
            type="button"
            onClick={() => onDelete?.(property)}
            title="Delete Property"
            aria-label="Delete Property"
            className="
              rounded-lg
              bg-red-100
              p-2
              text-red-600
              transition
              hover:bg-red-200

              dark:bg-red-900/40
              dark:text-red-400
              dark:hover:bg-red-900/60
            "
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default PropertyRow;