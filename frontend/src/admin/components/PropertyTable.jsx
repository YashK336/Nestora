import PropertyTableRow from "./PropertyTableRow";
import PropertyRowSkeleton from "./skeletons/PropertyRowSkeleton";

const PropertyTable = ({
  properties = [],
  loading = false,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div
      className="
        overflow-x-auto
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm

        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <table className="min-w-full">
        {/* ================================
            TABLE HEADER
        ================================= */}

        <thead className="bg-gray-100 dark:bg-slate-800">
          <tr>
            <th
              className="
                px-6
                py-4
                text-left
                text-gray-700
                dark:text-slate-200
              "
            >
              Image
            </th>

            <th
              className="
                px-6
                py-4
                text-left
                text-gray-700
                dark:text-slate-200
              "
            >
              Property
            </th>

            <th
              className="
                px-6
                py-4
                text-left
                text-gray-700
                dark:text-slate-200
              "
            >
              Price
            </th>

            <th
              className="
                px-6
                py-4
                text-left
                text-gray-700
                dark:text-slate-200
              "
            >
              Status
            </th>

            <th
              className="
                px-6
                py-4
                text-center
                text-gray-700
                dark:text-slate-200
              "
            >
              Actions
            </th>
          </tr>
        </thead>

        {/* ================================
            TABLE BODY
        ================================= */}

        <tbody>
          {/* LOADING */}
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <PropertyRowSkeleton key={index} />
            ))
          ) : properties.length === 0 ? (
            /* EMPTY STATE */
            <tr>
              <td
                colSpan={5}
                className="
                  py-12
                  text-center
                  text-gray-500
                  dark:text-slate-400
                "
              >
                No properties found.
              </td>
            </tr>
          ) : (
            /* PROPERTY ROWS */
            properties.map((property) => (
              <PropertyTableRow
                key={property._id}
                property={property}
                onView={onView}
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