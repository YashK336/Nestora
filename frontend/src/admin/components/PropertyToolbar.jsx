import Button from "../../components/ui/Button";

const PropertyToolbar = ({
  search,
  setSearch,
  city,
  setCity,
  type,
  setType,
  featured,
  setFeatured,
  sort,
  setSort,
  onAdd,
}) => {
  return (
    <div className="mb-6 rounded-2xl border bg-white p-5 shadow-sm">
      <div className="grid gap-4 lg:grid-cols-6">
        <input
          type="text"
          placeholder="Search properties..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={featured}
          onChange={(e) => setFeatured(e.target.value)}
          className="rounded-xl border px-4 py-3"
        >
          <option value="">Featured?</option>
          <option value="true">Featured</option>
          <option value="false">Not Featured</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-xl border px-4 py-3"
        >
          <option value="-createdAt">Newest</option>
          <option value="createdAt">Oldest</option>
          <option value="price">Price ↑</option>
          <option value="-price">Price ↓</option>
        </select>

        <Button variant="primary" onClick={onAdd}>
          + Add Property
        </Button>
      </div>
    </div>
  );
};

export default PropertyToolbar;