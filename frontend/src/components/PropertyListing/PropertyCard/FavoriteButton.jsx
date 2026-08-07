import { FaHeart } from "react-icons/fa";

const FavoriteButton = () => {
    return (

<button

className="
flex

h-11
w-11

items-center
justify-center

rounded-full

bg-white/90

text-gray-600

backdrop-blur

transition-all
duration-300

hover:scale-110
hover:bg-red-500
hover:text-white
"

>

<FaHeart/>

</button>

    );
};

export default FavoriteButton;