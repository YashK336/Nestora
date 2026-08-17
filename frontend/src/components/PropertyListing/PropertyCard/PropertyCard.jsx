import PropertyImage from "./PropertyImage";
import PropertyInfo from "./PropertyInfo";
import PropertyFeatures from "./PropertyFeatures";
import PropertyActions from "./PropertyActions";
import { useNavigate } from "react-router-dom";
const PropertyCard = ({ property, view = "grid" }) => {
  const navigate = useNavigate();
  return (
    <article
      className="
        group
  w-full
  min-w-0
  overflow-hidden
  rounded-3xl
  border
  border-gray-200
  bg-white
  shadow-sm
  transition-all
  duration-300
  hover:-translate-y-0.5
  hover:shadow-2xl

  dark:border-slate-800
  dark:bg-slate-900
  dark:shadow-black/20
  dark:hover:shadow-black/40
"
    >
      {view === "grid" ? (
        <>
          <PropertyImage property={property} onClick={() => {}}/>

          <div className="p-4 sm:p-5 lg:p-6" onClick={() => navigate(`/property/${property._id}`)}>
            <PropertyInfo property={property} onClick={() => navigate(`/property/${property._id}`)} />

            <PropertyFeatures property={property} onClick={() => navigate(`/property/${property._id}`)} />

            <PropertyActions property={property} onClick={() => navigate(`/property/${property._id}`)} />
          </div>
        </>
      ) : (
        <div className="flex flex-col lg:flex-row" onClick={() => navigate(`/property/${property._id}`)}>
          <div className="w-full lg:w-[340px] flex-shrink-0">
            <PropertyImage property={property} onClick={() => {}}/>
          </div>
          <div className="flex flex-1 flex-col justify-between p-4 sm:p-5 lg:p-6">
            <div>
              <PropertyInfo property={property} onClick={() => navigate(`/property/${property._id}`)} />
              <PropertyFeatures property={property} onClick={() => navigate(`/property/${property._id}`)} />
            </div>
            <PropertyActions property={property} onClick={() => navigate(`/property/${property._id}`)} />
          </div>
        </div>
      )}
    </article>
  );
};

export default PropertyCard;