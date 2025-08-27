const printString = (string) => {
  console.log(string);
};

printString.cliConfig = {
  inputs: [{ name: "your string", type: "string" }],
};

export default printString;
