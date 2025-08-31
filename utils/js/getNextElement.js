const getNextElement = (element, array, wrap) => {
  const i = array.findIndex((x) => x === element);

  if (i === -1) return null;

  const nextElement = wrap ? array[i + 1] || array[0] : array[i + 1] || null;

  return nextElement;
};

export default getNextElement;
