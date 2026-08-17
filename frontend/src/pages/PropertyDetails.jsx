import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar/Navbar";
import ImageGallery from "../components/PropertyDetails/ImageGallery";
import PropertyOverview from "../components/PropertyDetails/PropertyOverview";
import QuickInfo from "../components/PropertyDetails/QuickInfo";
import Description from "../components/PropertyDetails/Description";
import Amenities from "../components/PropertyDetails/Amenities";
import PropertyDetailsSkeleton from "../components/PropertyDetails/PropertyDetailsSkeleton";
import { getProperty } from "../services/propertyService";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const data = await getProperty(id);
        setProperty(data);
      } catch (error) {
        console.error(error);
        setProperty(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar mode="search" isSticky={true} />
        <PropertyDetailsSkeleton />
      </>
    );
  }

  if (!property) {
    return (
      <>
        <Navbar mode="search" isSticky={true} />
        <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 pt-24 flex
  min-h-screen
  items-center
  justify-center
  bg-slate-50
  px-6
  pt-20
  transition-colors
  duration-300
  dark:bg-slate-950
dark:bg-slate-950">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Property not found
          </h1>
          <p className="mt-2 text-slate-500">
            This listing may have been removed or the link is invalid.
          </p>
          <Link
            to="/properties"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            <ArrowLeft size={18} />
            Back to listings
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar mode="search" isSticky={true} />

      <main className="min-h-screen bg-slate-50 pb-10 pt-24 transition-colors duration-300 dark:bg-slate-950 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <ImageGallery property={property} />

          <div className="mt-6 grid grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-12 space-y-6 lg:col-span-8 lg:space-y-8">
              <PropertyOverview property={property} />
              <QuickInfo property={property} />
              <Description property={property} />
              <Amenities property={property} />
            </div>

            <aside className="col-span-12 mt-2 lg:col-span-4 lg:mt-0">
  <div
    className="
      overflow-hidden
      rounded-3xl
      border
      border-slate-200
      bg-white
      shadow-lg
      transition-colors
      duration-300
      dark:border-slate-700
      dark:bg-slate-900
      lg:sticky
      lg:top-28
    "
  >
    {/* Header */}
    <div className="border-b border-slate-200 p-5 dark:border-slate-700 sm:p-6">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
        Property Price
      </p>

      <h2 className="mt-1 text-3xl font-bold text-blue-700 dark:text-blue-400">
        ₹{Number(property.price || 0).toLocaleString("en-IN")}
      </h2>

      {property.area && (
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          ₹
          {Math.round(
            Number(property.price || 0) / Number(property.area)
          ).toLocaleString("en-IN")}{" "}
          / sq.ft
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="
          rounded-full
          bg-blue-100
          px-3
          py-1
          text-xs
          font-semibold
          text-blue-700
          dark:bg-blue-500/15
          dark:text-blue-400
        ">
          {property.condition}
        </span>

        {property.furnishing && (
          <span className="
            rounded-full
            bg-slate-100
            px-3
            py-1
            text-xs
            font-semibold
            text-slate-600
            dark:bg-slate-800
            dark:text-slate-300
          ">
            {property.furnishing}
          </span>
        )}
      </div>
    </div>

    {/* Actions */}
    <div className="p-5 sm:p-6">
      <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
        Interested in this property?
      </p>

      <button
        type="button"
        className="
          w-full
          rounded-xl
          bg-blue-600
          py-3.5
          font-semibold
          text-white
          shadow-sm
          transition-all
          duration-200
          hover:bg-blue-700
          hover:shadow-md
          active:scale-[0.98]
        "
      >
        Contact Builder
      </button>

      <button
        type="button"
        className="
          mt-3
          w-full
          rounded-xl
          border
          border-blue-600
          py-3.5
          font-semibold
          text-blue-600
          transition-all
          duration-200
          hover:bg-blue-50
          active:scale-[0.98]
          dark:border-blue-500
          dark:text-blue-400
          dark:hover:bg-blue-500/10
        "
      >
        Get Phone Number
      </button>

      <button
        type="button"
        className="
          mt-3
          w-full
          rounded-xl
          border
          border-slate-200
          py-3.5
          font-semibold
          text-slate-700
          transition-all
          duration-200
          hover:bg-slate-100
          active:scale-[0.98]
          dark:border-slate-700
          dark:text-slate-200
          dark:hover:bg-slate-800
        "
      >
        Schedule Visit
      </button>

      {/* Trust message */}
      <div className="
        mt-5
        rounded-2xl
        bg-slate-50
        p-4
        dark:bg-slate-800
      ">
        <p className="text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
          Your enquiry will be shared with the property representative.
        </p>
      </div>
    </div>
  </div>
</aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default PropertyDetails;
