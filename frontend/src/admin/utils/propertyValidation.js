export const validateProperty = (formData, imageCount = 0) => {
    const errors = {};
  
    if (!formData.title?.trim()) {
      errors.title = "Property title is required.";
    }
    if (!formData.description?.trim()) {
        errors.description = "Description is required.";
    }
    
    if (!formData.city?.trim()) {
      errors.city = "City is required.";
    }
  
    if (!formData.locality?.trim()) {
      errors.locality = "Locality is required.";
    }
  
    if (!formData.price || Number(formData.price) <= 0) {
      errors.price = "Price must be greater than 0.";
    }
  
    if (!formData.area || Number(formData.area) <= 0) {
      errors.area = "Area must be greater than 0.";
    }
  
    if (
      formData.bedrooms === "" ||
      Number(formData.bedrooms) < 0
    ) {
      errors.bedrooms = "Bedrooms cannot be negative.";
    }
  
    if (
      formData.bathrooms === "" ||
      Number(formData.bathrooms) < 0
    ) {
      errors.bathrooms = "Bathrooms cannot be negative.";
    }
  
    if (imageCount === 0) {
      errors.images = "At least one property image is required.";
    }
  
    return errors;
  };