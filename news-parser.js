import fs from "fs";

import { htmlPrevia } from "./modules/previa.mjs";
import { htmlBeginBody } from "./modules/beginBody.mjs";
import { htmlArtigoDestaque } from "./modules/artigoDestaque.mjs";
import { htmlCompartilhe } from "./modules/compartilhe.mjs";
import { htmlWeImpactNetwork } from "./modules/weImpactNetwork.mjs";
import { htmlDiversidadeNaPratica } from "./modules/diversidadeNaPratica.mjs";

var htmlHeader = fs.readFileSync("./modules/first_part.html", "utf8");
var htmlContent =
  htmlHeader +
  htmlBeginBody +
  htmlPrevia +
  htmlArtigoDestaque +
  htmlCompartilhe +
  htmlWeImpactNetwork +
  htmlDiversidadeNaPratica;

fs.writeFile("./news-parsed.html", htmlContent, (error) => {
  if (error) throw error;
  console.log("Saved!");
});
