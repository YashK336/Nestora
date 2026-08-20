import Property from "../models/Property.js";
import createNotification from "../utils/createNotification.js";

export const getProperties = async (req, res) => {
  try {
    const {
      city,
      type,
      minPrice,
      maxPrice,
      bedrooms,
      featured,
      search,
      page = 1,
      limit = 12,
      sort = "newest",
      furnishing,
      condition,
    } = req.query;

    const query = {};

    if (city) query.city = city;

    if (type) query.type = type;

    if (bedrooms) query.bedrooms = Number(bedrooms);

    if (furnishing) query.furnishing = furnishing;

    if (condition) query.condition = condition;

    if (featured === "true") query.featured = true;

    if (minPrice || maxPrice) {
      query.price = {};

      if (minPrice) query.price.$gte = Number(minPrice);

      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { city: { $regex: search, $options: "i" } },
        { locality: { $regex: search, $options: "i" } },
        { builder: { $regex: search, $options: "i" } },
      ];
    }

    let sortOption = {};

    switch (sort) {
      case "price":
        sortOption.price = 1;
        break;
    
      case "-price":
        sortOption.price = -1;
        break;
    
      case "createdAt":
        sortOption.createdAt = 1;
        break;
    
      case "-createdAt":
      default:
        sortOption.createdAt = -1;
    }
    const pageNumber = Math.max(Number(page) || 1, 1);

    const limitNumber = Math.min(
      Math.max(Number(limit) || 12, 1),
      50
    );

    const skip = (pageNumber - 1) * limitNumber;
    const totalProperties = await Property.countDocuments(query);

    const properties = await Property.find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(limitNumber);

      res.json({
        properties,
      
        pagination: {
          currentPage: pageNumber,
          totalPages: Math.ceil(
            totalProperties / limitNumber
          ),
          totalProperties,
          limit: limitNumber,
          hasNextPage:
            pageNumber <
            Math.ceil(totalProperties / limitNumber),
          hasPrevPage: pageNumber > 1,
        },
      });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET /api/properties/:id
export const getProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.status(200).json(property);
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    console.error("Get property error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// POST /api/properties
export const createProperty = async (req, res) => {
  try {
    const property = await Property.create(req.body);

    await createNotification({
      recipient: req.user._id,
      type: "property",
      title: "New property added",
      message: `"${property.title}" was added successfully.`,
    });

    res.status(201).json(property);
  } catch (error) {
    console.error(
      "Create property error:",
      error
    );

    res.status(400).json({
      message: error.message,
    });
  }
};

// PUT /api/properties/:id
export const updateProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    await createNotification({
      recipient: req.user._id,
      type: "property",
      title: "Property updated",
      message: `"${property.title}" was updated successfully.`,
    });

    res.status(200).json(property);
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    console.error(
      "Update property error:",
      error
    );

    res.status(500).json({
      message: "Server error",
    });
  }
};

// DELETE /api/properties/:id
export const deleteProperty = async (req, res) => {
    try {
      const property = await Property.findById(
        req.params.id
      );
      
      if (!property) {
        return res.status(404).json({
          message: "Property not found",
        });
      }
      
      await Property.findByIdAndDelete(
        req.params.id
      );
      
      await createNotification({
        recipient: req.user._id,
        type: "property",
        title: "Property deleted",
        message: `"${property.title}" was deleted.`,
      });
  
      res.status(200).json({
        message: "Property deleted successfully",
      });
    } catch (error) {
      if (error.name === "CastError") {
        return res.status(404).json({
          message: "Property not found",
        });
      }
    
      console.error("Delete property error:", error);
    
      res.status(500).json({
        message: "Server error",
      });
    }
  };
