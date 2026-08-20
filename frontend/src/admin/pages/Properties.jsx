import { useEffect, useState } from "react";
import { getProperties, deleteProperty } from "../../services/propertyService";
import { useNavigate } from "react-router-dom";
import PropertyToolbar from "../components/PropertyToolbar";
import PropertyTable from "../components/PropertyTable";
import DeleteModal from "../components/DeleteModal";
import Pagination from "../components/Pagination";
import PropertyDrawer from "../components/propertyDrawer/PropertyDrawer";
import toast from "react-hot-toast";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [featured, setFeatured] = useState("");
  const [sort, setSort] = useState("-createdAt");

  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);

  const navigate = useNavigate();

  /*
   * ==========================================
   * RESET PAGE WHEN FILTERS CHANGE
   * ==========================================
   */

  useEffect(() => {
    setPage(1);
  }, [city, type, featured, sort]);

  /*
   * ==========================================
   * FETCH PROPERTIES
   * ==========================================
   */

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        setLoading(true);

        const data = await getProperties({
          page,
          search,
          city,
          type,
          featured,
          sort,
        });

        setProperties(data.properties || []);

        setPagination(
          data.pagination || {
            currentPage: page,
            totalPages: 1,
          }
        );
      } catch (error) {
        console.error("Fetch properties error:", error);

        toast.error("Failed to load properties.");

        setProperties([]);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [page, search, city, type, featured, sort]);

  /*
   * ==========================================
   * DELETE
   * ==========================================
   */

  const handleDelete = (property) => {
    setSelectedProperty(property);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!selectedProperty) return;

    try {
      setLoading(true);

      await deleteProperty(selectedProperty._id);

      setProperties((prev) =>
        prev.filter(
          (property) =>
            property._id !== selectedProperty._id
        )
      );

      toast.success("Property deleted successfully.");

      setShowDeleteModal(false);
      setSelectedProperty(null);
    } catch (error) {
      console.error("Delete property error:", error);

      toast.error("Failed to delete property.");
    } finally {
      setLoading(false);
    }
  };

  /*
   * ==========================================
   * VIEW
   * ==========================================
   */

  const handleView = (property) => {
    setSelectedProperty(property);
    setShowDrawer(true);
  };

  /*
   * ==========================================
   * EDIT
   * ==========================================
   */

  const handleEdit = (property) => {
    navigate(
      `/admin/properties/${property._id}/edit`
    );
  };

  /*
   * ==========================================
   * CLEAR FILTERS
   * ==========================================
   */

  const hasFilters =
    search ||
    city ||
    type ||
    featured ||
    sort !== "-createdAt";

  const clearFilters = () => {
    setSearch("");
    setCity("");
    setType("");
    setFeatured("");
    setSort("-createdAt");
    setPage(1);
  };

  return (
    <div>
      {/* ========================================
          TOOLBAR
      ======================================== */}

      <PropertyToolbar
        search={search}
        setSearch={setSearch}
        city={city}
        setCity={setCity}
        type={type}
        setType={setType}
        featured={featured}
        setFeatured={setFeatured}
        sort={sort}
        setSort={setSort}
        onAdd={() =>
          navigate("/admin/properties/new")
        }
      />

      {/* ========================================
          CLEAR FILTERS
      ======================================== */}

      {hasFilters && (
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={clearFilters}
            className="
              rounded-xl
              border
              border-gray-200
              bg-white
              px-4
              py-2
              text-sm
              font-medium
              text-gray-600
              transition
              hover:border-red-200
              hover:bg-red-50
              hover:text-red-600

              dark:border-slate-700
              dark:bg-slate-900
              dark:text-slate-300
              dark:hover:bg-red-900/20
              dark:hover:text-red-400
            "
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* ========================================
          TABLE
      ======================================== */}

      <PropertyTable
        properties={properties}
        loading={loading}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* ========================================
          PAGINATION
      ======================================== */}

      {!loading && (
        <Pagination
          currentPage={pagination.currentPage || page}
          totalPages={pagination.totalPages || 1}
          onPageChange={setPage}
        />
      )}

      {/* ========================================
          DELETE MODAL
      ======================================== */}

      <DeleteModal
        open={showDeleteModal}
        title="Delete Property"
        message={`Are you sure you want to delete "${selectedProperty?.title}"? This action cannot be undone.`}
        onClose={() => {
          setShowDeleteModal(false);
          setSelectedProperty(null);
        }}
        onConfirm={confirmDelete}
      />

      {/* ========================================
          PROPERTY DRAWER
      ======================================== */}

      <PropertyDrawer
        open={showDrawer}
        property={selectedProperty}
        onClose={() => {
          setShowDrawer(false);
          setSelectedProperty(null);
        }}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>
  );
};

export default Properties;