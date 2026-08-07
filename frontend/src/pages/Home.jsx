import {Navbar} from "../components/Navbar";
import Hero from "../components/Hero";
import SearchPanel from "../components/SearchPanel";
import ExploreCategories from "../components/ExploreCategories";
import ServiceSlider from "../components/ServiceSlider";
import {useRef} from "react";
import useStickyNavbar from "../hooks/useStickyNavbar";
const Home = () => {
    const SearchPanelRef = useRef(null);
    const isSticky = useStickyNavbar(SearchPanelRef, 20);
    return (
        <>
            <Navbar mode="home" isSticky={isSticky}/>
            <Hero />
            <SearchPanel ref={SearchPanelRef} isSticky={isSticky} />
            <ServiceSlider />
            <ExploreCategories />
        </>
    );
};

export default Home;