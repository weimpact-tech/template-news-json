import os from "os";
import fs from "fs";
var obj = JSON.parse(fs.readFileSync("conteudo.json", "utf8"));

var textoArray = obj.dicaDaCEO.texto;
var textoFinal = "";

for (var i = 0; i < textoArray.length; i++) {
  textoFinal += '<p id="pBranco"';
  textoFinal += os.EOL;
  textoFinal +=
    "style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; text-align: left; padding-left: 20px; padding-right: 20px; font-size: 16px; font-family: 'Open Sans', sans-serif; margin: 25px 0px 20px; color: white;\">";
  textoFinal += os.EOL;
  textoFinal += textoArray[i];
  textoFinal += "<br>";
  textoFinal += os.EOL;
  textoFinal += "</p>";
}

export var htmlDicadaCEO =
  "<!-- BEGIN #DICADACEO // -->" +
  os.EOL +
  '<table border="0" cellpadding="0" cellspacing="0" width="100%"' +
  os.EOL +
  'id="templateFundoRoxo"' +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center; background-color: #48139a; display: inline-block; width: 100%;"' +
  os.EOL +
  'align="center" bgcolor="#48139a">' +
  os.EOL +
  "<tr>" +
  os.EOL +
  '<td valign="top" class="bodyContent" mc:edit="body_content"' +
  os.EOL +
  "style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #212121; font-family: 'Open Sans', sans-serif; font-size: 18px; line-height: 150%; padding-top: 15px; padding-right: 20px; padding-bottom: 15px; padding-left: 20px; text-align: center;\"" +
  os.EOL +
  'align="center">' +
  os.EOL +
  '<h3 id="h3Branco"' +
  os.EOL +
  "style=\"display: block; font-style: normal; letter-spacing: normal; margin-top: 20px; margin-right: 0; margin-bottom: 10px; margin-left: 0; text-align: center; font-size: 21px; line-height: 31px; font-family: 'Poppins', sans-serif; font-weight: 700; margin: 20px 0px 0px; color: white;\">" +
  os.EOL +
  obj.dicaDaCEO.tituloSecao +
  os.EOL +
  "<p" +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 16px; text-align: left; margin-top: 25px;">' +
  os.EOL +
  "</p>" +
  os.EOL +
  "</h3>" +
  os.EOL +
  '<img src="' +
  obj.dicaDaCEO.img +
  '"' +
  os.EOL +
  'style="-ms-interpolation-mode: bicubic; border: 0; line-height: 100%; outline: none; text-decoration: none; width: 100%; display: inline; height: auto; max-width: 190px;"' +
  os.EOL +
  'alt="' +
  obj.dicaDaCEO.alt +
  '">' +
  os.EOL +
  textoFinal +
  os.EOL +
  '<p id="pBranco" align="center"' +
  os.EOL +
  "style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; text-align: left; padding-left: 20px; padding-right: 20px; font-size: 16px; font-family: 'Open Sans', sans-serif; margin: 25px 0px 20px; color: white;\">" +
  os.EOL +
  "<i>" +
  os.EOL +
  '- <a href="' +
  obj.dicaDaCEO.linkedinAutora +
  '"' +
  os.EOL +
  'target="_blank"' +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color: #04ebfb;">' +
  obj.dicaDaCEO.nomeAutora +
  "</a>, " +
  obj.dicaDaCEO.descricaoAutora +
  os.EOL +
  "</i>" +
  os.EOL +
  "</p>" +
  os.EOL +
  "</td>" +
  os.EOL +
  "</tr>" +
  os.EOL +
  "</table>" +
  os.EOL +
  "<!-- END #DICADACEO // -->" +
  " " +
  os.EOL +
  " " +
  os.EOL +
  " " +
  os.EOL;
