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

rl.question(`\n${moduleName} function\n--------\nInput: `, (input) => {
  try {
    const result = moduleFunction(input);
    result != undefined
      ? console.log(`Output: ${result}`)
      : console.log("No value returned");
  } catch (err) {
    console.error("Error running function:", err.message);
  }
  console.log("--------");
  rl.close();
});
