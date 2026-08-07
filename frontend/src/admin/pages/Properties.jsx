import { useEffect, useState } from "react";
import { getProperties } from "../../services/propertyService";
import { deleteProperty } from "../../services/propertyService";
import { useNavigate } from "react-router-dom";
import PropertyToolbar from "../components/PropertyToolbar";
import PropertyTable from "../components/PropertyTable";
import DeleteModal from "../components/DeleteModal";
import Pagination from "../components/Pagination";
import PropertyDrawer from "../components/propertyDrawer/PropertyDrawer";
import PropertyRowSkeleton from "../components/skeletons/PropertyRowSkeleton";
const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [featured, setFeatured] = useState("");
  const [sort, setSort] = useState("-createdAt");
  const [pagination, setPagination] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProperties = async () => {
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
    
        setProperties(data.properties);
        setPagination(data.pagination);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, [page, search, city, type, featured, sort]);
  const handleDelete = (property) => {
    setSelectedProperty(property);
    setShowDeleteModal(true);
  };
  
  const confirmDelete = async () => {
    try {
      await deleteProperty(selectedProperty._id);
  
      setProperties((prev) =>
        prev.filter((p) => p._id !== selectedProperty._id)
      );
  
      setShowDeleteModal(false);
      setSelectedProperty(null);
    } catch (error) {
      console.error(error);
    }
  };
  const handleView = (property) => {
    setSelectedProperty(property);
    setShowDrawer(true);
  };
  if (loading) return <PropertyRowSkeleton />;
  return (
    <div>
      <div className="mb-8 flex flex-col justify-between gap-6 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white lg:flex-row lg:items-center">
        <div>
          <h1 className="text-4xl font-bold">
            Property Management
          </h1>
          <p className="mt-2 text-blue-100">
            Search, edit and organize your property listings.
          </p>
        </div>
      </div>
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
        onAdd={() => navigate("/admin/properties/new")}
      />
      <PropertyTable
        properties={properties}
        onView={handleView}
        onEdit={(property) =>
          navigate(`/admin/properties/${property._id}/edit`)
        }
        onDelete={handleDelete}
      />
      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={setPage}
      />
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
      <PropertyDrawer
        open={showDrawer}
        property={selectedProperty}
        onClose={() => setShowDrawer(false)}
        onEdit={(property) =>
          navigate(`/admin/properties/${property._id}/edit`)
        }
      />
    </div>
  );
};

export default Properties;