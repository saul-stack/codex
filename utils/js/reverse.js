const reverse = (input) => {
  if (input == null) return null;
  if (
    !Array.isArray(input) &&
    typeof input !== "string" &&
    typeof input !== "number"
  ) {
    return null;
  }
  let array = input;
  if (!Array.isArray(input)) {
    array = Array.from(isNaN(input) ? input : input.toString());
  }

  const length = array.length;
  const reverseArray = array.map((_, index) => array[length - (index + 1)]);

  if (Array.isArray(input)) return reverseArray;

  const output = reverseArray.join("");
  if (typeof input === "string") return output;
  if (!isNaN(input)) return Number(output);
};

export default reverse;
