const printString = (string) => {
  console.log(string);
};

printString.cliConfig = {
  inputs: [{ name: "your string", type: "string" }],
  description: "Prints a string to the console.",
};

export default printString;
