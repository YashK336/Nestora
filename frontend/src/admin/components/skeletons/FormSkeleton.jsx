import Skeleton from "react-loading-skeleton";

const FormSkeleton = () => {
  return (
    <div className="space-y-8">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i}>
          <Skeleton width={120} />
          <Skeleton height={45} className="mt-2" />
        </div>
      ))}

      <Skeleton height={220} />
    </div>
  );
};

export default FormSkeleton;