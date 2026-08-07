import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    locality: {
      type: String,
      required: true,
    },

    builder: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
    },

    area: {
      type: Number,
      required: true,
    },

    bedrooms: Number,

    bathrooms: Number,

    furnishing: String,

    condition: String,

    description: String,

    rating: Number,

    featured: Boolean,

    images: [String],

    amenities: [String],
  },
  {
    timestamps: true,
  }
);

const Property = mongoose.model("Property", propertySchema);

export default Property;