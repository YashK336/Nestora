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
      cityDistribution,
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
      Property.aggregate([
        {
          $group: {
            _id: "$city",
            count: { $sum: 1 },
          },
        },
        {
          $sort: {
            count: -1,
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
      cityDistribution,
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
export const getAnalytics = async (req, res) => {
  try {
    const [
      propertiesByType,
      propertiesByCity,
      priceDistribution,
      monthlyProperties,
      featuredStats,
    ] = await Promise.all([
      // Properties by type
      Property.aggregate([
        {
          $group: {
            _id: "$type",
            count: { $sum: 1 },
          },
        },
        {
          $sort: {
            count: -1,
          },
        },
      ]),

      // Top cities by number of properties
      Property.aggregate([
        {
          $group: {
            _id: "$city",
            count: { $sum: 1 },
            averagePrice: {
              $avg: "$price",
            },
          },
        },
        {
          $sort: {
            count: -1,
          },
        },
        {
          $limit: 10,
        },
      ]),

      // Price ranges
      Property.aggregate([
        {
          $bucket: {
            groupBy: "$price",
            boundaries: [
              0,
              2500000,
              5000000,
              10000000,
              25000000,
              Infinity,
            ],
            default: "Other",
            output: {
              count: {
                $sum: 1,
              },
            },
          },
        },
      ]),

      // Properties added per month
      Property.aggregate([
        {
          $group: {
            _id: {
              year: {
                $year: "$createdAt",
              },
              month: {
                $month: "$createdAt",
              },
            },
            count: {
              $sum: 1,
            },
          },
        },
        {
          $sort: {
            "_id.year": 1,
            "_id.month": 1,
          },
        },
      ]),

      // Featured vs regular properties
      Property.aggregate([
        {
          $group: {
            _id: "$featured",
            count: {
              $sum: 1,
            },
          },
        },
      ]),
    ]);

    res.status(200).json({
      propertiesByType,
      propertiesByCity,
      priceDistribution,
      monthlyProperties,
      featuredStats,
    });
  } catch (error) {
    console.error("Analytics error:", error);

    res.status(500).json({
      message: "Failed to fetch analytics data.",
    });
  }
};

export const getPublicStats = async (req, res) => {
  try {
    const [totalProperties, cities, featuredProperties] =
      await Promise.all([
        Property.countDocuments(),
        Property.distinct("city"),
        Property.countDocuments({ featured: true }),
      ]);

    res.json({
      totalProperties,
      totalCities: cities.length,
      featuredProperties,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};