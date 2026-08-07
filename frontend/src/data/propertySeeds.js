import apartment1 from "../assets/images/properties/apartment1.jpg";
import apartment2 from "../assets/images/properties/apartment2.jpg";
import apartment3 from "../assets/images/properties/apartment3.jpg";
import apartment4 from "../assets/images/properties/apartment4.jpg";
import apartment5 from "../assets/images/properties/apartment5.jpg";
import apartment6 from "../assets/images/properties/apartment6.jpg";

import villa1 from "../assets/images/properties/villa1.jpg";
import villa2 from "../assets/images/properties/villa2.jpg";

import commercial1 from "../assets/images/properties/commercial1.jpg";
import commercial2 from "../assets/images/properties/commercial2.jpg";
import commercial3 from "../assets/images/properties/commercial3.jpg";

import plot1 from "../assets/images/properties/plot1.jpg";
import plot2 from "../assets/images/properties/plot2.jpg";

import pg1 from "../assets/images/properties/pg1.jpg";
import pg2 from "../assets/images/properties/pg2.jpg";

export const propertySeeds = [
  {
    type: "Apartment",
    title: "Luxury Apartment",
    minArea: 900,
    maxArea: 2200,
    bedrooms: [1, 2, 3, 4],
    bathrooms: [1, 2, 3],
    furnishing: ["Unfurnished", "Semi Furnished", "Fully Furnished"],
    images: [apartment1, apartment2, apartment3, apartment4, apartment5, apartment6],
  },
  {
    type: "Villa",
    title: "Luxury Villa",
    minArea: 2200,
    maxArea: 5200,
    bedrooms: [3, 4, 5],
    bathrooms: [3, 4, 5],
    furnishing: ["Semi Furnished", "Fully Furnished"],
    images: [villa1, villa2],
  },
  {
    type: "Commercial",
    title: "Commercial Office",
    minArea: 1000,
    maxArea: 5000,
    bedrooms: [1, 2, 3],
    bathrooms: [1, 2, 3],
    furnishing: ["Unfurnished", "Semi Furnished", "Fully Furnished"],
    images: [commercial1, commercial2, commercial3],
  },
  {
    type: "Plot",
    title: "Residential Plot",
    minArea: 1000,
    maxArea: 5000,
    bedrooms: [1, 2, 3],
    bathrooms: [1, 2, 3],
    furnishing: ["Unfurnished", "Semi Furnished", "Fully Furnished"],
    images: [plot1, plot2],
  },
  {
    type: "PG",
    title: "Premium PG",
    minArea: 1000,
    maxArea: 5000,
    bedrooms: [1, 2, 3],
    bathrooms: [1, 2, 3],
    furnishing: ["Unfurnished", "Semi Furnished", "Fully Furnished"],
    images: [pg1, pg2],
  },
];
