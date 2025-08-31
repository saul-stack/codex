const getLastElement = (array) => {
  if (!Array.isArray(array)) return null;
  return array[array.length - 1];
};
