import { cities } from "./cities";
import { builders } from "./builders";
import { propertySeeds } from "./propertySeeds";

import {
  randomItem,
  randomNumber,
  randomBoolean,
} from "./propertyUtils";

export const properties = [];

for (let id = 1; id <= 60; id++) {
  const city = randomItem(cities);
  const seed = randomItem(propertySeeds);

  const shuffledImages = [...seed.images].sort(
    () => Math.random() - 0.5
  );

  const area = randomNumber(seed.minArea, seed.maxArea);

  const price =
    Math.round(
      randomNumber(city.priceRange[0], city.priceRange[1]) / 100000
    ) * 100000;

  properties.push({
    id,
    title: seed.title,
    type: seed.type,
    city: city.city,
    locality: randomItem(city.localities),
    address: `${randomNumber(1, 200)}, ${randomItem(city.localities)}, ${city.city}`,
    builder: randomItem(builders),
    area,
    price,
    description: `This beautifully designed ${seed.title.toLowerCase()} is located in ${randomItem(city.localities)}, 
    ${city.city}. It offers spacious interiors, modern architecture, excellent ventilation, premium amenities, 
    and easy access to schools, hospitals, shopping centers, and public transport. The property is ideal for families 
    looking for a comfortable lifestyle with convenience and long-term value.`,
    propertyAge: randomItem([
      "New Launch",
      "1-3 Years",
      "3-5 Years",
      "5-10 Years",
    ]),
    ownership: randomItem(["Freehold", "Leasehold"]),
    facing: randomItem(["North", "South", "East", "West"]),
    contact: {
      name: randomItem([
        "Rahul Sharma",
        "Ankit Verma",
        "Priya Singh",
        "Neha Kapoor",
        "Vikas Mehta",
      ]),
      phone: "9876543210",
    },
    bedrooms: randomItem(seed.bedrooms),
    bathrooms: randomItem(seed.bathrooms),
    furnishing: randomItem(seed.furnishing),
    rating: Number((randomNumber(30, 49) / 10).toFixed(1)),
    featured: randomBoolean(0.35),
    verified: randomBoolean(0.8),
    parking: randomBoolean(0.9),
    gym: randomBoolean(0.75),
    pool: randomBoolean(0.45),
    clubhouse: randomBoolean(0.55),
    lift: randomBoolean(0.8),
    condition: randomItem(["Ready to Move", "Under Construction"]),
    posted: `${randomNumber(1, 30)} days ago`,
    image: shuffledImages[0],
    images: shuffledImages,
    floor: randomNumber(1, 25),
    totalFloors: randomNumber(15, 35),
  });
}
