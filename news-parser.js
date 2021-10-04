import fs from "fs";

import { htmlPrevia } from "./modules/previa.mjs";
import { htmlBeginBody } from "./modules/beginBody.mjs";
import { htmlArtigoDestaque } from "./modules/artigoDestaque.mjs";
import { htmlCompartilhe } from "./modules/compartilhe.mjs";
import { htmlWeImpactNetwork } from "./modules/weImpactNetwork.mjs";
import { htmlDiversidadeNaPratica } from "./modules/diversidadeNaPratica.mjs";
import { htmlDicadaCEO } from "./modules/dicadaCEO.mjs";
import { htmlElasImpactam } from "./modules/elasImpactam.mjs";
import { htmlDivisor } from "./modules/divisor.mjs";
import { htmlNaMidia } from "./modules/naMidia.mjs";
import { htmlNasRedes } from "./modules/nasRedes.mjs";
import { htmlSaveTheDate } from "./modules/saveTheDate.mjs";
import { htmlEndBody } from "./modules/endBody.mjs";
import { htmlFooter } from "./modules/footer.mjs";

var htmlHeader = fs.readFileSync("./modules/first_part.html", "utf8");
var htmlContent =
  htmlHeader +
  htmlBeginBody +
  htmlPrevia +
  htmlArtigoDestaque +
  htmlCompartilhe +
  htmlWeImpactNetwork +
  htmlDiversidadeNaPratica +
  htmlDicadaCEO +
  htmlElasImpactam +
  htmlDivisor +
  htmlNaMidia +
  htmlNasRedes +
  htmlDivisor +
  htmlSaveTheDate +
  htmlEndBody +
  htmlFooter;

fs.writeFile("./index.html", htmlContent, (error) => {
  if (error) throw error;
  console.log("Saved!");
});
