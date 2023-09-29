import * as qrcode from "qrcode-terminal";
import * as whatsapp from 'whatsapp-web.js';
import { Client } from 'whatsapp-web.js';

export var obj = {};

obj.whats = () => {
const client = new Client({authStrategy:  new whatsapp.default.LocalAuth()});
//console.log(whatsapp);
client.on('qr', qr => {
   qrcode.default.generate(qr, {small: true})
});

client.on('ready', () => {
    console.log('Client is ready!');

   const number1 = "+971521809001";
   const number2= "+971554656178";

   const text = "Hey john";
   
   const chatId1 = number1.substring(1) + "@c.us";
   const chatId2 = number2.substring(1) + "@c.us";
   client.sendMessage(chatId1, text);
   client.sendMessage(chatId2, text);
});

client.on('message', message => {
    //console.log(message.body);
    
    if(message.body === 'hi') {
      message.reply('Hello!');
    }
});

client.initialize();
};