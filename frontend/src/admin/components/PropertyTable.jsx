import PropertyTableRow from "./PropertyTableRow";

const PropertyTable = ({
  properties,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-x-auto rounded-2xl border bg-white shadow-sm">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left">
              Image
            </th>

            <th className="px-6 py-4 text-left">
              Property
            </th>

            <th className="px-6 py-4 text-left">
              Price
            </th>

            <th className="px-6 py-4 text-left">
              Status
            </th>

            <th className="px-6 py-4 text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {properties.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="py-12 text-center text-gray-500"
              >
                No properties found.
              </td>
            </tr>
          ) : (
            properties.map((property) => (
              <PropertyTableRow
                key={property._id}
                onView={onView}
                property={property}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
export default PropertyTable;