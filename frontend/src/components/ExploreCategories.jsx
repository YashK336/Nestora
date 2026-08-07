import { categories } from "../data/categories";
import { useNavigate } from "react-router-dom";
import Container from "./Common/Container";
const ExploreCategories = () => {
    const navigate = useNavigate();
    return (
        <Container className="py-12 sm:py-16 lg:py-20">
            {/* Heading */}
            <div className="mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[4px] sm:tracking-[6px] text-blue-600">
                    Explore
                </p>
                <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">  
                    Browse by Property Type
                </h2>
                <p className="mt-4 max-w-xl lg:max-w-2xl text-base lg:text-lg text-gray-500">
                    Discover apartments, villas, commercial spaces,
                    plots and more across India's most popular cities.
                </p>
            </div>
            {/* Cards */}
            <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
                {categories.map((category) => (
                <div
                key={category.id}
                onClick={() =>
                    navigate(
                        `/properties?type=${encodeURIComponent(category.type)}`
                    )
                }
                className=" group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition-all 
                duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    {/* Image */}
                    <div className="overflow-hidden">
                        <img
                            src={category.image}
                            alt={category.title}
                            className="h-52 sm:h-56 lg:h-60 w-full object-cover transition duration-700 group-hover:scale-110"/>
                    </div>
                    {/* Content */}
                    <div className="p-5 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 transition duration-300 group-hover:text-blue-600">
                            {category.title}
                        </h3>
                        <p className="mt-2 text-sm sm:text-base text-gray-500">
                            {category.properties}
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </Container>
    );
};

export default ExploreCategories;