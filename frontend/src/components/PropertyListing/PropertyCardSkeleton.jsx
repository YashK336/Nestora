import Skeleton from "react-loading-skeleton";

const PropertyCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Image */}
      <Skeleton height={288} borderRadius={0} />

      <div className="p-6">
        {/* Rating */}
        <div className="mb-4 flex justify-between">
          <Skeleton width={70} height={24} />
          <Skeleton width={80} height={24} />
        </div>

        {/* Title */}
        <Skeleton width="85%" height={28} />

        {/* Builder */}
        <div className="mt-4">
          <Skeleton width="55%" height={18} />
        </div>

        {/* Location */}
        <div className="mt-3">
          <Skeleton width="70%" height={18} />
        </div>

        {/* Status */}
        <div className="mt-5">
          <Skeleton width={120} height={32} borderRadius={20} />
        </div>

        <div className="my-6 border-t border-slate-100" />

        {/* Features */}
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((item) => (
            <Skeleton
              key={item}
              height={58}
              borderRadius={16}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <Skeleton
            containerClassName="flex-1"
            height={48}
            borderRadius={12}
          />

          <Skeleton
            width={135}
            height={48}
            borderRadius={12}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyCardSkeleton;