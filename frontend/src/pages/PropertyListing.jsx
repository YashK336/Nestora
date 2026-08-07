import {  useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import PropertyGrid from "../components/PropertyListing/PropertyGrid";
import Toolbar from "../components/PropertyListing/Toolbar";
import Filters from "../components/PropertyListing/Filters";
import { Navbar } from "../components/Navbar";
import ActiveFilters from "../components/PropertyListing/ActiveFilters";
import { getProperties } from "../services/propertyService";
import Pagination from "../components/PropertyListing/Pagination";
import PropertyGridSkeleton from "../components/PropertyListing/PropertyGridSkeleton";
import PropertyEmptyState from "../components/PropertyListing/PropertyEmptyState";
const PropertyListing = () => {
    const { state } = useLocation();
    const [view, setView] = useState("grid");
    const [searchParams] = useSearchParams();
    const selectedType = searchParams.get("type");
    const selectedCity = searchParams.get("city");
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState("-createdAt");
    const [properties, setProperties] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pagination, setPagination] = useState({
      currentPage: 1,
      totalPages: 1,
      totalProperties: 0,
    });
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
      propertyTypes: [],
      bedrooms: [],
      amenities: [],
      minPrice: 0,
      city: "",
      maxPrice: 60000000,
      furnishing: "",
      condition: "",
    });
    
    useEffect(() => {
      setFilters((prev) => ({
        ...prev,
        propertyTypes: selectedType ? [selectedType] : [],
        city: selectedCity || "",
      }));
    }, [selectedType, selectedCity]);
    useEffect(() => {
      document.body.style.overflow = showFilters ? "hidden" : "auto";
    
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [showFilters]);
    useEffect(() => {
      const fetchProperties = async () => {
        try {
          setLoading(true);
      
          const data = await getProperties({
            city: filters.city,
            type: filters.propertyTypes[0] || "",
            bedrooms: filters.bedrooms[0] || "",
            minPrice: filters.minPrice,
            maxPrice: filters.maxPrice,
            furnishing: filters.furnishing,
            condition: filters.condition,
            sort: sortBy,
            page: currentPage,
            limit: 12,
          });
          
          setProperties(data.properties);
          setPagination(data.pagination);
          setCurrentPage(data.pagination.currentPage);
          setTotalPages(data.pagination.totalPages);
        } catch (error) {
          console.error(error);
          setProperties([]);
        } finally {
          setLoading(false);
        }
      };
    
      fetchProperties();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    }, [filters,
      sortBy,
      currentPage]);
      const propertyTypes = [
        {
          name: "Apartment",
          count: null,
        },
        {
          name: "Villa",
          count: null,
        },
        {
          name: "Plot",
          count: null,
        },
        {
          name: "Commercial",
          count: null,
        },
      ];

    return (
        <>
        <Navbar
    mode="search"
    isSticky={true}
    />
    <main className="min-h-screen bg-gray-100">
        <AnimatePresence>
  {showFilters && (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => setShowFilters(false)}
        className="fixed inset-0 z-40 bg-black/40 lg:hidden"
      />

      {/* Drawer */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 30,
        }}
        className="
          fixed
          left-0
          top-0
          z-50
          h-screen
          w-[340px]
          max-w-[90vw]
          overflow-y-auto
          bg-white
          shadow-2xl
          lg:hidden
        "
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-5">
          <h2 className="text-xl font-bold">
            Filters
          </h2>

          <button
            onClick={() => setShowFilters(false)}
            className="
              rounded-lg
              p-2
              text-2xl
              transition
              hover:bg-gray-100
            "
          >
            ✕
          </button>
        </div>

        {/* Filters */}
        <div className="p-4">
          <Filters
            filters={filters}
            setFilters={setFilters}
            propertyTypes={propertyTypes}
            onApply={() => setShowFilters(false)}
          />
        </div>
      </motion.aside>
    </>
  )}
</AnimatePresence>
            {/* Hero */}
            <section className="mt-20 border-b bg-white">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                    {selectedType || state?.property || "Properties"} in{" "}
                    {selectedCity || state?.location || "Delhi"}
                  </h1>
                    <p className="mt-2 text-sm sm:text-base text-gray-500">
                        {pagination.totalProperties} {selectedType ? `${selectedType} properties` : "properties"} found
                    </p>
                </div>
            </section>
            {/* Content */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                <div className="grid grid-cols-12 gap-6 lg:gap-8">
                    {/* Filters */}
                    <aside className="hidden lg:block lg:col-span-3">
                  <Filters
                      filters={filters}
                      setFilters={setFilters}
                      propertyTypes={propertyTypes}
                  />
              </aside>
                    {/* Results */}
                    <section className="col-span-12 lg:col-span-9">
                    <div className="mb-4 flex items-center justify-between lg:hidden">
                      <button
                        onClick={() => setShowFilters(true)}
                        className="
                          rounded-xl
                          border
                          border-gray-300
                          bg-white
                          px-4
                          py-2
                          text-sm
                          font-medium
                          shadow-sm
                        "
                      >
                        Filters
                      </button>

                      <span className="text-sm text-gray-500">
                        {pagination.totalProperties} Results
                      </span>
                    </div>
                      <Toolbar
                        totalProperties={pagination.totalProperties}
                        view={view}
                        setView={setView}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                      />
                      <ActiveFilters
                        filters={filters}
                        setFilters={setFilters}
                      />
                      {loading ? (
                        <PropertyGridSkeleton count={6} />
                      ) : properties.length === 0 ? (
                        <PropertyEmptyState />
                      ) : (
                        <PropertyGrid
                          properties={properties}
                          view={view}
                        />
                      )}
                      {!loading && properties.length > 0 && (
                        <Pagination
                          currentPage={currentPage}
                          totalPages={totalPages}
                          onPageChange={setCurrentPage}
                        />
                      )}
                    </section>
                </div>
            </section>
            
        </main>
    </>
    );
};
export default PropertyListing;