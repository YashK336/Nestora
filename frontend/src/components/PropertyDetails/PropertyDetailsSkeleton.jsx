import Skeleton from "react-loading-skeleton";

const PropertyDetailsSkeleton = () => {
  return (
    <main className="bg-gray-50 pb-10 pt-24 sm:pb-16 sm:pt-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* Gallery */}
        <div className="overflow-hidden rounded-3xl">
          <Skeleton
            height={480}
            borderRadius={24}
          />
        </div>

        {/* Main Content */}
        <div className="mt-6 grid grid-cols-12 gap-6 lg:gap-8">

          {/* LEFT */}
          <div className="col-span-12 space-y-6 lg:col-span-8 lg:space-y-8">

            {/* Overview */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <Skeleton width="75%" height={34} />

              <div className="mt-4">
                <Skeleton width="45%" height={20} />
              </div>

              <div className="mt-6 flex gap-3">
                <Skeleton
                  width={100}
                  height={32}
                  borderRadius={20}
                />

                <Skeleton
                  width={130}
                  height={32}
                  borderRadius={20}
                />
              </div>
            </div>

            {/* Quick Info */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <Skeleton width={160} height={28} />

              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[1, 2, 3, 4].map((item) => (
                  <Skeleton
                    key={item}
                    height={90}
                    borderRadius={16}
                  />
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <Skeleton width={150} height={28} />

              <div className="mt-5">
                <Skeleton count={4} height={16} />
              </div>
            </div>

            {/* Amenities */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <Skeleton width={140} height={28} />

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Skeleton
                    key={item}
                    height={52}
                    borderRadius={14}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <aside className="col-span-12 lg:col-span-4">
            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <Skeleton width="60%" height={38} />

              <div className="mt-3">
                <Skeleton width="40%" height={18} />
              </div>

              <div className="mt-7 space-y-4">
                <Skeleton
                  height={56}
                  borderRadius={12}
                />

                <Skeleton
                  height={56}
                  borderRadius={12}
                />

                <Skeleton
                  height={56}
                  borderRadius={12}
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default PropertyDetailsSkeleton;