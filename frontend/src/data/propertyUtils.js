export const randomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  
  export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  export const randomBoolean = (chance = 0.5) => {
    return Math.random() < chance;
  };