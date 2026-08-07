import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const PropertyActions = ({ property }) => {

    const navigate = useNavigate();
  
    const handleViewDetails = () => {
      navigate(`/property/${property._id}`);
    };
  
    return (
        <div className="mt-6 flex items-center gap-4">
            <button
  className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-blue-600 px-5 py-3 
  font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white">
  <FaPhoneAlt />

  Contact Builder
</button>
<button
  onClick={handleViewDetails}
  className="group flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-black">

  View Details

  <FaArrowRight
    className="
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  />

</button>
</div>
);
};

export default PropertyActions;