import Skeleton from "react-loading-skeleton";

const PropertyRowSkeleton = () => {
  return (
    <tr>
      <td className="px-4 py-4">
        <Skeleton width={90} height={70} />
      </td>

      <td className="px-4 py-4">
        <Skeleton width={180} />
        <Skeleton width={120} />
      </td>

      <td className="px-4 py-4">
        <Skeleton width={90} />
      </td>

      <td className="px-4 py-4">
        <Skeleton width={70} />
      </td>

      <td className="px-4 py-4">
        <Skeleton width={90} />
      </td>
    </tr>
  );
};

export default PropertyRowSkeleton;