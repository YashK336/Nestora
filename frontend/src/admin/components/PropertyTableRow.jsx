import Button from "../../components/ui/Button";


const PropertyTableRow = ({
  property,
  onEdit,
  onDelete,
  onView,
}) => {
  return (
    <tr className="border-t transition hover:bg-gray-50">
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

      <td className="px-6 py-4">
        <h3 className="font-semibold">
          {property.title}
        </h3>

        <p className="text-sm text-gray-500">
          {property.city}
        </p>
      </td>

      <td className="px-6 py-4 font-semibold text-blue-600">
        ₹ {Number(property.price).toLocaleString("en-IN")}
      </td>

      <td className="px-6 py-4">
        {property.featured ? (
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
            Featured
          </span>
        ) : (
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
            Normal
          </span>
        )}
      </td>

      <td className="px-6 py-4">
        <div className="flex justify-center gap-3">
        <Button
            size="sm"
            variant="secondary"
            onClick={() => onView(property)}
          >
            View
          </Button>
          <Button
            size="sm"
            variant="primary"
            onClick={() => onEdit(property)}
          >
            Edit
          </Button>

          <Button
            size="sm"
            variant="danger"
            onClick={() => onDelete(property)}
          >
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default PropertyTableRow;