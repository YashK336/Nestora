import Property from "../models/Property.js";

export const getDashboardStats = async (req, res) => {
  try {
    const [
      totalProperties,
      featuredProperties,
      cities,
      averagePriceResult,
      recentProperties,
      propertyTypes,
      highestProperty,
      lowestProperty,
      portfolioValueResult,
    ] = await Promise.all([
      Property.countDocuments(),
      Property.countDocuments({ featured: true }),
      Property.distinct("city"),
      Property.aggregate([
        {
          $group: {
            _id: null,
            averagePrice: { $avg: "$price" },
          },
        },
      ]),
      Property.find().sort({ createdAt: -1 }).limit(5),
      Property.aggregate([
        {
          $group: {
            _id: "$type",
            count: { $sum: 1 },
          },
        },
      ]),
      Property.findOne().sort({ price: -1 }),
      Property.findOne().sort({ price: 1 }),
      Property.aggregate([
        {
          $group: {
            _id: null,
            totalValue: { $sum: "$price" },
          },
        },
      ]),
    ]);

    res.json({
      totalProperties,
      featuredProperties,
      totalCities: cities.length,
      averagePrice: averagePriceResult[0]?.averagePrice || 0,
      recentProperties,
      propertyTypes,
      highestProperty,
      lowestProperty,
      portfolioValue: portfolioValueResult[0]?.totalValue || 0,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
};
