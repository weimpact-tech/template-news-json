import os from "os";
import fs from "fs";
var obj = JSON.parse(fs.readFileSync("conteudo.json", "utf8"));

export var htmlFooter =
  "</td>" +
  os.EOL +
  "</tr>" +
  os.EOL +
  "<tr>" +
  os.EOL +
  '<td align=" center" valign="top"' +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">' +
  os.EOL +
  "<!-- BEGIN FOOTER // -->" +
  os.EOL +
  '<table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateFooterRoxo"' +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center; background-color: #48139a; width: 100%; border-collapse: collapse;"' +
  os.EOL +
  'align="center" bgcolor="#48139a">' +
  os.EOL +
  "<tr>" +
  os.EOL +
  "<td" +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">' +
  os.EOL +
  "</td>" +
  os.EOL +
  '<td id="templateFooterRoxo"' +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center; background-color: #48139a; width: 100%;"' +
  os.EOL +
  'width="100%" align="center" bgcolor="#48139a">' +
  os.EOL +
  '<p id="pBrancoFooter"' +
  os.EOL +
  "style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 16px; font-family: 'Open Sans', sans-serif; color: white; font-style: italic; text-align: center;\">" +
  os.EOL +
  obj.footer.chamada +
  os.EOL +
  "</p>" +
  os.EOL +
  '<a href="' +
  obj.footer.linkBotao +
  '"' +
  os.EOL +
  'target="_blank"' +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">' +
  os.EOL +
  '<button id="botaoBranco" "="" style=" border: none; margin-bottom: 20px;' +
  os.EOL +
  "font-weight: 700; font-family: 'Open Sans' , sans-serif; font-size:" +
  os.EOL +
  '15px; height: 25px; color: #212121; background-color: #ffffff;">' +
  os.EOL +
  "<i><strong>" +
  obj.footer.botao +
  "</strong></i>" +
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
  '<table border=" 0" cellpadding="0" cellspacing="0" width="100%" id="templateFooter"' +
  os.EOL +
  'style="border-top: 1px solid #FFFFFF; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #F4F4F4;"' +
  os.EOL +
  'bgcolor="#F4F4F4">' +
  os.EOL +
  "<tr>" +
  os.EOL +
  '<td align="center"' +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">' +
  os.EOL +
  '<p id="pCinzaFooter"' +
  os.EOL +
  "style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 15px; font-family: 'Open Sans', sans-serif; color: #212121; text-align: center;\">" +
  os.EOL +
  "Siga nossas redes sociais</p>" +
  os.EOL +
  '<a href="' +
  obj.footer.linkLinkedin +
  '"' +
  os.EOL +
  'target="_blank"' +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">' +
  os.EOL +
  '<img src="' +
  obj.footer.imgLinkedin +
  '"' +
  os.EOL +
  'style="-ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; max-width: 25px; max-height: 25px;"' +
  os.EOL +
  'alt="' +
  obj.footer.altLinkedin +
  '"></a>' +
  os.EOL +
  '<a href="' +
  obj.footer.linkInstagram +
  '" target="_blank"' +
  os.EOL +
  'style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">' +
  os.EOL +
  '<img src="' +
  obj.footer.imgInstagram +
  '"' +
  os.EOL +
  'style="-ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; max-width: 25px; max-height: 25px;"' +
  os.EOL +
  'alt="' +
  obj.footer.altInstagram +
  '"></a>' +
  os.EOL +
  "</td>" +
  os.EOL +
  "</tr>" +
  os.EOL +
  "</table>" +
  os.EOL +
  "<!-- // END FOOTER -->" +
  os.EOL +
  os.EOL +
  os.EOL +
  "</td>" +
  os.EOL +
  "</tr>" +
  os.EOL +
  "</table>" +
  os.EOL +
  "<!-- // END TEMPLATE -->" +
  os.EOL +
  os.EOL +
  os.EOL +
  "</td>" +
  os.EOL +
  "</tr>" +
  os.EOL +
  "</table>" +
  os.EOL +
  "</center>" +
  os.EOL +
  "</body>" +
  os.EOL +
  "</html>" +
  " " +
  os.EOL +
  " " +
  os.EOL +
  " " +
  os.EOL;
