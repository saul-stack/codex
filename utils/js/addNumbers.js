const addNumbers = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error("Input is not an array");
  }

  if (numbers.length < 1) {
    throw new Error("Input array must have length > 0");
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].isNaN) {
      throw new Error("Input array must contain only numbers");
    }
    sum = sum + numbers[i];
  }
  return sum;
};

addNumbers.cliConfig = {
  inputs: [{ name: "numbers", type: "array" }],
};

export default addNumbers;
