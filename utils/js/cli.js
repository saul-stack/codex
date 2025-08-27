import { fileURLToPath } from "url";
import path from "path";
import readline from "readline";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

const [, , moduleName] = process.argv;

if (!moduleName) {
  console.log(
    "No module name provided. Run as follows: node ./cli.js <utilityName>"
  );
  process.exit(1);
}

let module;

try {
  module = await import(`./${moduleName}.js`);
} catch (err) {
  console.error(`Module "${moduleName}" not found.`);
  process.exit(1);
}

let moduleFunction;
moduleFunction = module.default;
if (!moduleFunction) {
  console.error(`Module "${moduleName}" does not export a default function.`);
  process.exit(1);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (rl, question) => {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
};

const inputArguments = [];

const { cliConfig } = module.default;

if (!cliConfig) {
  console.error(`Module default function must have cliConfig property e.g: \n{
  inputs: [{ name: "x", type: "number" }]\n}`);

  process.exit(1);
}

const { inputs } = cliConfig;

console.log(`\n${moduleName} function\n--------\nInputs: `);

for (let input of inputs) {
  let userInput = await askQuestion(rl, `${input.name} (${input.type}): `);
  switch (input.type) {
    case "number":
      userInput = JSON.parse(userInput);
      break;
    case "boolean":
      userInput = JSON.parse(userInput.toLowerCase());
      break;
    case "array":
    case "object":
      userInput = JSON.parse(userInput);
      break;
    case "string":
    default:
  }
  inputArguments.push(userInput);
}

try {
  const result = moduleFunction(...inputArguments);
  result != undefined
    ? console.log(`Output: ${result}`)
    : console.log("No value returned");
} catch (err) {
  console.error("Error running function:", err.message);
}
console.log("--------");
rl.close();
