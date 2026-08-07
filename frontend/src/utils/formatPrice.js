export const formatPrice = (price) => {
  const value = Number(price) || 0;

  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(2)} Cr`;
  }

  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(0)} L`;
  }

  return `₹${value.toLocaleString("en-IN")}`;
};
