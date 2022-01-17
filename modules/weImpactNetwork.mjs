import os from "os";
import fs from "fs";
var obj = JSON.parse(fs.readFileSync("conteudo.json", "utf8"));

var textoArray = obj.weImpactNetwork.texto;
var textoFinal = "";

for (var i = 0; i < textoArray.length; i++) {
  textoFinal += '<p';
  textoFinal += os.EOL;
  textoFinal +=
    'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 16px; text-align: left;">';
  textoFinal += os.EOL;
  textoFinal += textoArray[i];
  textoFinal += "<br>";
  textoFinal += os.EOL;
  textoFinal += "</p>";
}

export var htmlWeImpactNetwork =
  "<!-- BEGIN #WIN – WE IMPACT NETWORK // -->" +
  os.EOL +
  '<table border="0" cellpadding="0" cellspacing="0" width="100%"' +
  os.EOL +
  'id="templateFundoBranco"' +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; width: 100%;">' +
  os.EOL +
  "<tr>" +
  os.EOL +
  '<td valign="top" class="bodyContent" mc:edit="body_content"' +
  os.EOL +
  "style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #212121; font-family: 'Open Sans', sans-serif; font-size: 18px; line-height: 150%; padding-top: 15px; padding-right: 20px; padding-bottom: 15px; padding-left: 20px; text-align: center;\"" +
  os.EOL +
  'align="center">' +
  os.EOL +
  "<h3" +
  os.EOL +
  "style=\"display: block; font-family: 'Poppins', sans-serif; font-size: 21px; font-style: normal; font-weight: 700; letter-spacing: normal; margin-top: 20px; margin-right: 0; margin-bottom: 10px; margin-left: 0; text-align: center; color: #212121;\">" +
  os.EOL +
  obj.weImpactNetwork.tituloSecao +
  os.EOL +
  "</h3>" +
  os.EOL +
  "<h3" +
  os.EOL +
  "style=\"display: block; font-family: \'Poppins\', sans-serif; font-size: 21px; font-style: normal; font-weight: 700; letter-spacing: normal; margin-top: 20px; margin-right: 0; margin-bottom: 10px; margin-left: 0; text-align: center; color: #212121;\">" +
  os.EOL +
  '<p id="pSemiBold" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 18px; line-height: 28px; font-weight: 600; text-align: center;">' +
  os.EOL +
  obj.weImpactNetwork.titulo +
  os.EOL +
  "</p>" +
  os.EOL +
  "</h3>" +
  os.EOL +
  '<img src="' +
  obj.weImpactNetwork.img +
  '"' +
  os.EOL +
  'style="-ms-interpolation-mode: bicubic; border: 0; line-height: 100%; outline: none; text-decoration: none; width: 100%; display: inline; height: auto; max-width: 290px;"' +
  os.EOL +
  'alt="' +
  obj.weImpactNetwork.alt +
  '">' +
  os.EOL +
  '<p id="subTituloWin" style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; padding-left: 20px; padding-right: 20px; font-family: \'Poppins\', sans-serif; font-size: 14px; text-align: center;\">' +
os.EOL +
  'Por <a href="' +
  obj.weImpactNetwork.linkedinAutora +
  '"' +
  os.EOL +
  'target="_blank"' +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">' +
  obj.weImpactNetwork.nomeAutora +
  "</a>, " +
  obj.weImpactNetwork.descricaoAutora +
  os.EOL +
  "</p>" +
  os.EOL +
  textoFinal +
  os.EOL +
  "<p style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 16px; text-align: left;margin: 0px 50px;\" > " +
os.EOL +
  obj.weImpactNetwork.tituloLista +
  os.EOL +
  "</p>" +
  os.EOL +
  "<ul>" +
  os.EOL +
  "<li" +
  os.EOL +
  'style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0px 50px;\">' +
  os.EOL +
  "<p style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 16px; text-align: left;\">" +
  os.EOL +
  obj.weImpactNetwork.textoLista +
  os.EOL +
  "</p>" +
  os.EOL +
  "</li>" +
  os.EOL +
  "<li" +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0px 50px;">' +
  os.EOL +
  "<p style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 16px; text-align: left;\">" +
  os.EOL +
  obj.weImpactNetwork.textoLista +
  os.EOL +
  "</p>" +
  os.EOL +
  "</li>" +
  os.EOL +
  "<li" +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0px 50px;">' +
  os.EOL +
  "<p style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 16px; text-align: left;\">" +
  os.EOL +
  obj.weImpactNetwork.textoLista +
  os.EOL +
  "</p>" +
  os.EOL +
  "</li>" +
  os.EOL +
  "</ul>" +
  os.EOL +
  "<p style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 16px; text-align: left;\">" +
  os.EOL +
  obj.weImpactNetwork.textoLista +
  os.EOL +
  "</p>" +
  os.EOL +
  '<a href="' +
  obj.weImpactNetwork.linkBotao +
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
  obj.weImpactNetwork.botao +
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
  "<!-- END #WIN – WE IMPACT NETWORK // -->" +
  " " +
  os.EOL +
  " " +
  os.EOL +
  " " +
  os.EOL;
