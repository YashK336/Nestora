import { useNavigate } from "react-router-dom";
const Logo = ({sticky=false}) => {
    const navigate = useNavigate();
    return (
      <div className="cursor-pointer select-none" onClick={() => navigate("/")}>
        <h1 className={`text-3xl font-extrabold tracking-tight ${sticky ? "text-gray-900" : "text-white"}`}>
          Nestora
        </h1>
  
        <p className="text-[10px] uppercase tracking-[5px] text-blue-500">
          Real Estate
        </p>
      </div>
    );
  };
  
  export default Logo;