import os from "os";
import fs from "fs";
var obj = JSON.parse(fs.readFileSync("conteudo.json", "utf8"));

export var htmlSaveTheDate =
  "<!-- BEGIN #SAVETHEDATE // -->" +
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
  obj.saveTheDate.tituloSecao +
  os.EOL +
  "<p" +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 16px; text-align: left; margin-top: 25px;">' +
  os.EOL +
  "</p>" +
  os.EOL +
  "</h3>" +
  os.EOL +
  '<h3 id="h3Roxo"' +
  os.EOL +
  "style=\"display: block; font-style: normal; letter-spacing: normal; margin-top: 20px; margin-right: 0; margin-bottom: 10px; margin-left: 0; text-align: center; font-size: 21px; line-height: 31px; font-family: 'Poppins', sans-serif; font-weight: 700; margin: 20px 0px 0px; color: #212121;\">" +
  os.EOL +
  '<p id="pSemiBold"' +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 18px; line-height: 28px; font-weight: 600; text-align: center;">' +
  os.EOL +
  obj.saveTheDate.titulo +
  os.EOL +
  "</p>" +
  os.EOL +
  "</h3>" +
  os.EOL +
  "<p" +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 16px; text-align: left;">' +
  os.EOL +
  obj.saveTheDate.texto +
  os.EOL +
  "</p>" +
  os.EOL +
  '<a href="' +
  obj.saveTheDate.linkBotao +
  '"' +
  os.EOL +
  'target="_blank"' +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">' +
  os.EOL +
  '<button id="botaoVerde"' +
  os.EOL +
  "style=\"border: none; margin: 20px; font-weight: 700; font-family: 'Open Sans', sans-serif; font-size: 15px; height: 25px; color: #ffffff; background-color: #098692;\">" +
  os.EOL +
  obj.saveTheDate.botao +
  os.EOL +
  "</button>" +
  os.EOL +
  "</a>" +
  os.EOL +
  "</td>" +
  os.EOL +
  "</tr>" +
  os.EOL +
  "</table>" +
  os.EOL +
  "<!-- END #SAVETHEDATE // -->" +
  " " +
  os.EOL +
  " " +
  os.EOL +
  " " +
  os.EOL;
