import os from "os";
import fs from "fs";
var obj = JSON.parse(fs.readFileSync("conteudo.json", "utf8"));

export var htmlPrevia =
  " " +
  os.EOL +
  "<!-- BEGIN PRÉVIA-->" +
  os.EOL +
  "<div" +
  os.EOL +
  'style="display:none; font-size:1px; color:#333333; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden;">' +
  os.EOL +
  obj.previa +
  os.EOL +
  "</div>" +
  os.EOL +
  "<!-- END PRÉVIA-->" +
  " " +
  os.EOL +
  " " +
  os.EOL +
  " " +
  os.EOL;
