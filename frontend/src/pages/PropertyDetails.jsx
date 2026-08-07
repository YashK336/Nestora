import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ImageGallery from "../components/PropertyDetails/ImageGallery";
import PropertyOverview from "../components/PropertyDetails/PropertyOverview";
import QuickInfo from "../components/PropertyDetails/QuickInfo";
import Description from "../components/PropertyDetails/Description";
import Amenities from "../components/PropertyDetails/Amenities";
import { useEffect, useState } from "react";
import { getProperty } from "../services/propertyService";
import { Link } from "react-router-dom";
import { Building2, ArrowLeft } from "lucide-react";
import PropertyDetailsSkeleton from "../components/PropertyDetails/PropertyDetailsSkeleton";
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
  
        <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 pt-20">
          <div className="max-w-lg text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-50 text-blue-600">
              <Building2 size={42} />
            </div>
  
            <h1 className="mt-7 text-3xl font-bold text-slate-900">
              Property not found
            </h1>
  
            <p className="mt-3 leading-7 text-slate-500">
              This property may have been removed, or the
              link you're using is no longer available.
            </p>
  
            <div className="mt-7 flex justify-center gap-3">
              <Link
                to="/properties"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                <ArrowLeft size={17} />
                Browse Properties
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      {/* Search Navbar */}
      <Navbar
        mode="search"
        isSticky={true}
      />
      {/* Page */}
      <main className="bg-gray-50 pt-24 sm:pt-28 pb-10 sm:pb-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {/* Gallery */}
          <ImageGallery property={property} />
          {/* Main Content */}
          <div
            className="mt-6 grid grid-cols-12 gap-6 lg:gap-8">
            {/* Left */}
            <div
                className="col-span-12 lg:col-span-8 space-y-6 lg:space-y-8">
              <PropertyOverview property={property} />

              {/* Upcoming Components */}

              <QuickInfo property={property} />

              <Description property={property} />

              <Amenities property={property} />

              {/* <PropertyLocation property={property} /> */}

              {/* <SimilarProperties property={property} /> */}
            </div>
            {/* Right */}
            <aside className="col-span-12 lg:col-span-4 mt-2 lg:mt-0">
              {/* Contact Card */}
              <div
                  className="rounded-3xl bg-white p-5 sm:p-6 shadow-lg lg:sticky lg:top-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">
                ₹{Number(property.price || 0).toLocaleString("en-IN")}
                </h2>
                <p className="mt-2 text-gray-500">
                  {property.condition}
                </p>
                <button
                  className="mt-6 w-full rounded-xl bg-blue-600 py-3 sm:py-4 font-semibold text-white transition hover:bg-blue-700">
                  Contact Builder
                </button>
                <button
                  className="mt-4 w-full rounded-xl border border-blue-600 py-4 font-semibold text-blue-600 transition hover:bg-blue-50">
                  Get Phone Number
                </button>
                <button
                  className="mt-4 w-full rounded-xl border py-4 font-semibold transition hover:bg-gray-100">
                  Schedule Visit
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};
export default PropertyDetails;