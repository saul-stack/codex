import { handleError } from "./index.js";

const getSmallest = (numbers) => {
  if (!Array.isArray(numbers)) {
    handleError("Input must be an array");
  }

  if (numbers.length < 1) {
    handleError("Input array must have length > 0");
  }

  let currentSmallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].isNaN) {
      handleError("Input array must contain only numbers");
    }
    currentSmallest > numbers[i + 1]
      ? (currentSmallest = numbers[i + 1])
      : null;
  }
  return currentSmallest;
};

getSmallest.cliConfig = {
  inputs: [{ name: "numbers", type: "array" }],
};

export default getSmallest;
