import os from "os";
import fs from "fs";
var obj = JSON.parse(fs.readFileSync("conteudo.json", "utf8"));

var textoArray = obj.elasImpactam.texto;
var textoFinal = "";

for (var i = 0; i < textoArray.length; i++) {
  textoFinal += "<p";
  textoFinal += os.EOL;
  textoFinal +=
    'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 16px; text-align: justify;">';
  textoFinal += os.EOL;
  textoFinal += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
  textoFinal += textoArray[i];
  textoFinal += "<br>";
  textoFinal += os.EOL;
  textoFinal += "</p>";
}

export var htmlElasImpactam =
  "<!-- BEGIN #ELASIMPACTAM // -->" +
  os.EOL +
  '<table border="0" cellpadding="0" cellspacing="0" width="100%"' +
  os.EOL +
  'id="templateFundoBranco"' +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; width: 100%; border-collapse: collapse;">' +
  os.EOL +
  "<tr>" +
  os.EOL +
  '<td valign="top" class="bodyContent" mc:edit="body_content"' +
  os.EOL +
  "style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #212121; font-family: 'Open Sans', sans-serif; font-size: 18px; line-height: 150%; padding-top: 15px; padding-right: 20px; padding-bottom: 15px; padding-left: 20px; text-align: center;\"" +
  os.EOL +
  'align="center">' +
  os.EOL +
  '<h3 id="h3Roxo"' +
  os.EOL +
  "style=\"display: block; font-style: normal; letter-spacing: normal; margin-top: 20px; margin-right: 0; margin-bottom: 10px; margin-left: 0; text-align: center; font-size: 21px; line-height: 31px; font-family: 'Poppins', sans-serif; font-weight: 700; margin: 20px 0px 0px; color: #212121;\">" +
  os.EOL +
  obj.elasImpactam.tituloSecao +
  os.EOL +
  "<p" +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 16px; text-align: justify; margin-top: 25px;">' +
  os.EOL +
  "</p>" +
  os.EOL +
  "</h3>" +
  os.EOL +
  '<img src="' +
  obj.elasImpactam.img +
  '"' +
  'alt="' +
  obj.elasImpactam.alt +
  '"' +
  os.EOL +
  'style="-ms-interpolation-mode: bicubic; border: 0; line-height: 100%; outline: none; text-decoration: none; width: 100%; display: inline; height: auto; max-width: 252px;">' +
  os.EOL +
  textoFinal +
  os.EOL +
  "<ul>" +
  os.EOL +
  "<li" +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">' +
  os.EOL +
  "<p" +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 16px; text-align: justify;">' +
  os.EOL +
  obj.elasImpactam.textoLista +
  os.EOL +
  "</p>" +
  os.EOL +
  "</li>" +
  os.EOL +
  "<li" +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">' +
  os.EOL +
  "<p" +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 16px; text-align: justify;">' +
  os.EOL +
  obj.elasImpactam.textoLista +
  os.EOL +
  "</p>" +
  os.EOL +
  "</li>" +
  os.EOL +
  "<li" +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">' +
  os.EOL +
  "<p" +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 16px; text-align: justify;">' +
  os.EOL +
  obj.elasImpactam.textoLista +
  os.EOL +
  "</p>" +
  os.EOL +
  "</li>" +
  os.EOL +
  "<li" +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">' +
  os.EOL +
  "<p" +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 16px; text-align: justify;">' +
  os.EOL +
  obj.elasImpactam.textoLista +
  os.EOL +
  "</p>" +
  os.EOL +
  "</li>" +
  os.EOL +
  "</ul>" +
  os.EOL +
  "</td>" +
  os.EOL +
  "</tr>" +
  os.EOL +
  "</table>" +
  os.EOL +
  "<!-- END #ELASIMPACTAM // -->" +
  " " +
  os.EOL +
  " " +
  os.EOL +
  " " +
  os.EOL;
