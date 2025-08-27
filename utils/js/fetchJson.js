import fs from "fs/promises";
import { handleError } from "./index.js";

const fetchJson = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    error instanceof SyntaxError ? (error.code = "SYNTAXERROR") : null;

    switch (error.code) {
      case "ENOENT":
        error.message = "Json data not found";
        break;
      case "SYNTAXERROR":
        error.message = `Invalid JSON in ${filePath}`;
        break;

      default:
        error.message = "Error fetching JSON data";
    }
    handleError(error.message);
  }
};

fetchJson.cliConfig = {
  inputs: [{ name: "filePath", type: "string" }],
};

export default fetchJson;
