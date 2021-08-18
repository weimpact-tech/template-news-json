import os from "os";
import fs from "fs";
var obj = JSON.parse(fs.readFileSync("conteudo.json", "utf8"));

export var htmlCompartilhe =
  "<!-- BEGIN BLOCO COMPARTILHE // -->" +
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
  "style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #212121; font-family: 'Open Sans', sans-serif; font-size: 18px; line-height: 150%; padding-top: 15px; padding-right: 20px; padding-bottom: 15px; padding-left: 20px; text-align: center; \"" +
  os.EOL +
  'align="center">' +
  os.EOL +
  '<p id="pListaBlocoCompartilhe"' +
  os.EOL +
  "style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; text-align: justify; margin: 0px 50px; font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 16px; color: #ffffff; margin-top: 50px;\">" +
  os.EOL +
  obj.compartilhe.texto +
  os.EOL +
  "</p>" +
  os.EOL +
  '<p id="pListaBlocoCompartilhe"' +
  os.EOL +
  "style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; text-align: justify; margin: 0px 50px; font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 16px; color: #ffffff; margin-top: 50px; margin-bottom: 50px;\">" +
  os.EOL +
  obj.compartilhe.texto +
  " 😉 " +
  os.EOL +
  "</p>" +
  os.EOL +
  "</td>" +
  os.EOL +
  "</tr>" +
  os.EOL +
  "</table>" +
  os.EOL +
  "<!-- END BLOCO COMPARTILHE // -->" +
  " " +
  os.EOL +
  " " +
  os.EOL +
  " " +
  os.EOL;
