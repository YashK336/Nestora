import Button from "../../components/ui/Button";

const PropertyTableRow = ({
  property,
  onEdit,
  onDelete,
  onView,
}) => {
  return (
    <tr
      className="
        border-t
        border-gray-200
        transition
        hover:bg-gray-50

        dark:border-slate-700
        dark:hover:bg-slate-800/70
      "
    >
      {/* Image */}
      <td className="px-6 py-4">
        <img
          src={
            property.images?.[0] ||
            "https://placehold.co/120x80?text=No+Image"
          }
          alt={property.title}
          className="h-16 w-24 rounded-lg object-cover"
        />
      </td>

      {/* Property */}
      <td className="px-6 py-4">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {property.title}
        </h3>

        <p className="text-sm text-gray-500 dark:text-slate-400">
          {property.city}
        </p>
      </td>

      {/* Price */}
      <td className="px-6 py-4 font-semibold text-blue-600 dark:text-blue-400">
        ₹ {Number(property.price).toLocaleString("en-IN")}
      </td>

      {/* Status */}
      <td className="px-6 py-4">
        {property.featured ? (
          <span
            className="
              rounded-full
              bg-yellow-100
              px-3
              py-1
              text-sm
              font-medium
              text-yellow-700

              dark:bg-yellow-900/30
              dark:text-yellow-400
            "
          >
            Featured
          </span>
        ) : (
          <span
            className="
              rounded-full
              bg-gray-100
              px-3
              py-1
              text-sm
              text-gray-600

              dark:bg-slate-800
              dark:text-slate-300
            "
          >
            Normal
          </span>
        )}
      </td>

      {/* Actions */}
      <td className="px-6 py-4">
        <div className="flex justify-center gap-3">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => onView?.(property)}
          >
            View
          </Button>

          <Button
            size="sm"
            variant="primary"
            onClick={() => onEdit?.(property)}
          >
            Edit
          </Button>

          <Button
            size="sm"
            variant="danger"
            onClick={() => onDelete?.(property)}
          >
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default PropertyTableRow;