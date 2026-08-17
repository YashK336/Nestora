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
  font-semibold transition-all duration-300
text-blue-600
hover:bg-blue-600
hover:text-white
dark:border-blue-500
dark:text-blue-400
dark:hover:bg-blue-600
dark:hover:text-white">
  <FaPhoneAlt />

  Contact Builder
</button>
<button
  onClick={handleViewDetails}
  className="group flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white 
  transition-all duration-300 hover:bg-black dark:bg-slate-600 dark:hover:bg-slate-700">

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