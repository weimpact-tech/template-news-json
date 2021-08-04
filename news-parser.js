import fs from "fs";

import { htmlPrevia } from "./modules/previa.mjs";
import { htmlBeginBody } from "./modules/beginBody.mjs";
import { htmlArtigoDestaque } from "./modules/artigoDestaque.mjs";

var htmlHeader = fs.readFileSync("./modules/first_part.html", "utf8");
var htmlContent = htmlHeader + htmlBeginBody + htmlPrevia + htmlArtigoDestaque;

fs.writeFile("./news-parsed.html", htmlContent, (error) => {
  if (error) throw error;
  console.log("Saved!");
});
