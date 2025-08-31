const getPreviousElement = (element, array, wrap) => {
  const i = array.findIndex((x) => x === element);
  const length = array.length;
  if (i === -1) return null;

  const nextElement = wrap
    ? array[i - 1] || array[array.length - 1]
    : array[i - 1] || null;

  return nextElement;
};

export default getPreviousElement;
