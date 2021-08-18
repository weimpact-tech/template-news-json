import os from "os";
import fs from "fs";
var obj = JSON.parse(fs.readFileSync("conteudo.json", "utf8"));

export var htmlDiversidadeNaPratica =
  "<!-- BEGIN #DIVERSIDADENAPRÁTICA // -->" +
  os.EOL +
  '<table border="0" cellpadding="0" cellspacing="0" width="100%"' +
  os.EOL +
  'id="templateFundoVerde"' +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #52919e;"' +
  os.EOL +
  'bgcolor="#52919e">' +
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
  obj.diversidadeNaPratica.tituloSecao +
  os.EOL +
  "</h3>" +
  os.EOL +
  '<p id="pBrancoSemiBold"' +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 18px; line-height: 28px; font-weight: 600; text-align: center; color: #ffffff;">' +
  os.EOL +
  obj.diversidadeNaPratica.titulo +
  os.EOL +
  "</p>" +
  os.EOL +
  "<p" +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 16px; text-align: justify; margin-top: 25px;">' +
  os.EOL +
  "</p>" +
  os.EOL +
  '<img src="' +
  obj.diversidadeNaPratica.img +
  '"' +
  os.EOL +
  'style="-ms-interpolation-mode: bicubic; border: 0; line-height: 100%; outline: none; text-decoration: none; width: 100%; display: inline; height: auto; max-width: 230px;"' +
  os.EOL +
  'alt="!!!imagem com elementos gráficos e a frase save the date">' +
  os.EOL +
  '<p id="pBranco"' +
  os.EOL +
  "style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; text-align: justify; padding-left: 20px; padding-right: 20px; font-size: 16px; font-family: 'Open Sans', sans-serif; margin: 25px 0px 20px; color: white;\">" +
  os.EOL +
  obj.diversidadeNaPratica.texto +
  os.EOL +
  "</p>" +
  os.EOL +
  '<p id="pBranco"' +
  os.EOL +
  "style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; text-align: justify; padding-left: 20px; padding-right: 20px; font-size: 16px; font-family: 'Open Sans', sans-serif; margin: 25px 0px 20px; color: white;\">" +
  os.EOL +
  obj.diversidadeNaPratica.texto +
  os.EOL +
  "</p>" +
  os.EOL +
  '<p id="pBranco"' +
  os.EOL +
  "style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; text-align: justify; padding-left: 20px; padding-right: 20px; font-size: 16px; font-family: 'Open Sans', sans-serif; margin: 25px 0px 20px; color: white;\">" +
  os.EOL +
  obj.diversidadeNaPratica.texto +
  os.EOL +
  "</p>" +
  os.EOL +
  '<p id="pBranco"' +
  os.EOL +
  "style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; text-align: justify; padding-left: 20px; padding-right: 20px; font-size: 16px; font-family: 'Open Sans', sans-serif; margin: 25px 0px 20px; color: white;\">" +
  os.EOL +
  obj.diversidadeNaPratica.tituloLista +
  os.EOL +
  "</p>" +
  os.EOL +
  '<ul style="color: white;">' +
  os.EOL +
  "<li" +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0px 50px;">' +
  os.EOL +
  '<p id="pBranco"' +
  os.EOL +
  "style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; text-align: justify; padding-left: 20px; padding-right: 20px; font-size: 16px; font-family: 'Open Sans', sans-serif; margin: 25px 0px 20px; color: white;\">" +
  os.EOL +
  obj.diversidadeNaPratica.textoLista +
  os.EOL +
  "</p>" +
  os.EOL +
  "</li>" +
  os.EOL +
  "<li" +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0px 50px;">' +
  os.EOL +
  '<p id="pBranco"' +
  os.EOL +
  "style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; text-align: justify; padding-left: 20px; padding-right: 20px; font-size: 16px; font-family: 'Open Sans', sans-serif; margin: 25px 0px 20px; color: white;\">" +
  os.EOL +
  obj.diversidadeNaPratica.textoLista +
  os.EOL +
  "</p>" +
  os.EOL +
  "</li>" +
  os.EOL +
  "<li" +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0px 50px;">' +
  os.EOL +
  '<p id="pBranco"' +
  os.EOL +
  "style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; text-align: justify; padding-left: 20px; padding-right: 20px; font-size: 16px; font-family: 'Open Sans', sans-serif; margin: 25px 0px 20px; color: white;\">" +
  os.EOL +
  obj.diversidadeNaPratica.textoLista +
  os.EOL +
  "</p>" +
  os.EOL +
  "</li>" +
  os.EOL +
  "</ul>" +
  os.EOL +
  "<!--" +
  os.EOL +
  '<a href="' +
  obj.diversidadeNaPratica.linkBotao +
  '"' +
  os.EOL +
  'target="_blank"' +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">' +
  os.EOL +
  '<button id="botaoLaranja"' +
  os.EOL +
  "style=\"border: none; margin: 20px; font-weight: 700; font-family: 'Open Sans', sans-serif; font-size: 15px; height: 25px; color: #ffffff; background-color: #bb3d22;\">" +
  os.EOL +
  obj.diversidadeNaPratica.botao +
  os.EOL +
  "</button>" +
  os.EOL +
  "</a>" +
  os.EOL +
  "-->" +
  os.EOL +
  "</td>" +
  os.EOL +
  "</tr>" +
  os.EOL +
  "</table>" +
  os.EOL +
  "<!-- END #DIVERSIDADENAPRÁTICA // -->" +
  " " +
  os.EOL +
  " " +
  os.EOL;
