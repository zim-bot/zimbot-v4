// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮ᴢɪᴍ ʙᴏᴛ ɪɴᴄ 2023 ®️ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮THIS SOFTWARE IS UNDER UZ COPYRIGHT
//▮
//▮REPORT ABUSE OF THIS SOFTWARE EMAIL US
//▮blessedtuna@mail.uk
//▮WHATSAPP US : +44 7441 437150
//▮YOUTUBE CHANNELL: https://youtube.com/@zim-bot
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃THIS SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃
//┃THANKS FOR CHOOSING ZIMBOT
//┃I WROTE THIS SCRIPT BY MYSELF THIS SCRIPT IS FOR EVERYONE DONT SELL IT
//┗━━━━━━━━━━━━━━━━━━━━━━━━━
//
process.on('uncaughtException', console.error)
require('./bot')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, WAZimBotIncection, MessageType, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, fetchLatestBaileysVersion } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const crypto = require('crypto')
const chalk = require('chalk')
const { exec, spawn, execSync } = require('child_process')
const axios = require('axios')
const { fetchUrl, isUrl, processTime } = require("./lib/myfunc")
const path = require('path')
const url = require('url')
const os = require('os')
const got = require('got')
const hx = require('hxz-api')
const maker = require('mumaker')
const fetch = require('node-fetch')
const yts = require('youtube-yts')
const { Readability } = require('@mozilla/readability');
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const Config = require('./drips');
const { color, bgcolor } = require("./lib/color");
const simpleGit = require('simple-git');
const git = simpleGit();
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const { getLinkPreview, getPreviewFromContent } = require("link-preview-js");
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime,  sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
/*let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction")*/
const speedofbot = require("performance-now")
const { mediafireDl } = require('./lib/mediafire.js')
const { MAX_TOKEN, OPENAI_KEY } = setting = require('./chatGPT.json');
const { lirikLagu } = require('./lib/lirik.js')
const { fromBuffer } = require('file-type')
const mel = require('kitsune-api');
let { msgFilter } = require('./Zimbot/zimbotii.js')
const { Boom } = require("@hapi/boom")
const ffmpeg = require('fluent-ffmpeg')
const { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require('./tez.js')
const { addLevelingId, addLevelingLevel ,addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require('./level')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./limit')
let settingu = JSON.parse(fs.readFileSync('./chatGPT.json'));
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
	apiKey: settingu.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);
//xp and leveling database⧈⧈⧈⧈

//message type
/* let drips = fs.readFileSync('./Zimbot/drips.jpg') 
*/

//database
const  dripsno = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/leveluser.json'))
const _petualang = JSON.parse(fs.readFileSync('./database/inventori.json'))
const balance = JSON.parse(fs.readFileSync('./database/balance.json'))
const dripsanti = JSON.parse(fs.readFileSync('./lib/rude.json'))
let bad = JSON.parse(fs.readFileSync('./lib/rude.json'))
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}

let vote = db.others.vote = []

module.exports = ZimBotInc = async (ZimBotInc, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°┊π÷┊¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°┊π÷┊¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await ZimBotInc.decodeJid(ZimBotInc.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const isPetualang = checkPetualangUser(sender)
//----GROUP METADATA----\\
const groupMetadata = m.isGroup ? await ZimBotInc.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAntinsfw = m.isGroup ?  dripsno.includes(m.chat) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const antiToxic = m.isGroup ? dripsanti.includes(from) : false
const zimbotincv3 = body.slice(0).trim().split(/ +/).shift().toLowerCase()
//-----END HERE------\\

//rest apis
global.APIs = { 
    bx: 'https://bx-hunter.herokuapp.com',
    dhnjing: 'https://dhnjing.xyz',
    hardianto: 'https://hardianto-chan.herokuapp.com',
    jonaz: 'https://jonaz-api-v2.herokuapp.com',
    neoxr: 'https://neoxr-api.herokuapp.com',
    nrtm: 'https://nurutomo.herokuapp.com',
    pencarikode: 'https://pencarikode.xyz',
    xteam: 'https://api.xteam.xyz',
    zahir: 'https://zahirr-web.herokuapp.com',
    zekais: 'http://zekais-api.herokuapp.com',
    zeks: 'https://api.zeks.xyz',
  }
  global.APIKeys = { 
    'https://bx-hunter.herokuapp.com': 'Ikyy69',
    'https://hardianto-chan.herokuapp.com': 'hardianto',
    'https://neoxr-api.herokuapp.com': 'yntkts',
    'https://pencarikode.xyz': 'pais',
    'https://api.xteam.xyz': 'apikeymu',
    'https://zahirr-web.herokuapp.com': 'zahirgans',
    'https://api.zeks.xyz': 'apivinz',
  }
  

const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}



const tempButton = async (remoteJid, text, footer, content) => {
const templateMessage = {
 viewOnceMessage: {
 message: {
templateMessage: {
hydratedTemplate: {
hydratedContentText: text,
hydratedContentFooter: footer,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
    
const reply = (teks) => {
  ZimBotInc.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: "ᴢɪᴍ ʙᴏᴛ ᴠ5",mediaType: 3, renderLargerThumbnail: false, showAdAttribution: true, detectLinks: true,body: "DRIPS OFC", thumbnail: fs.readFileSync('./drips.jpg'),sourceUrl: ("https://youtu.be/KNu-gr2h7bo")}}})
}
const replay = (teks) => {
  ZimBotInc.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: "ᴢɪᴍ ʙᴏᴛ ᴠ5",mediaType: 3, renderLargerThumbnail: false, showAdAttribution: true, body: "DRIPS OFC", thumbnail: fs.readFileSync('./drips.jpg'),sourceUrl: ("https://youtu.be/KNu-gr2h7bo")}}})
}    
 
const tempButtons = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'OWNERMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const tempButtoni = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'DATABASEMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
 hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const tempButtonie = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'PHOTOOXYMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
 message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const tempButtono = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'GROUPMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const tempButton1 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'ALL MENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const saerchmenu = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'SEARCHMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const nsfmenu1 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'nsfmenu')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};


                    
const downloadmenu1 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'DOWNLOADMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const photofiltermenu1 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'PHOTOFILTERMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const toolmenu1 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'TOOLMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const ephotomenu1 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'EPHOTOMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const convertmenu = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'CONVERTMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};                                  
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const drip =  {
  key : {
    fromMe: false,
participant : '0@s.whatsapp.net'
},
     contextInfo: {
    forwardingScore: 9999,
    isForwarded: false, 
showAdAttribution: true,
title: "ᴢɪᴍ ʙᴏᴛ ᴠ5",
body: "GIVE IT A STAR",
mediaType: "VIDEO",
mediaUrl: `https://githb.com/zim-bot/zimbot-v4`,
description: 'DRIPS OFC',
previewType: "PHOTO",
thumbnail: fs.readFileSync('./drips.jpg'),
sourceUrl: "",
detectLinks: false,
    }}



let blessedtuna = {
    key : {
        fromMe: false,
participant : '0@s.whatsapp.net'
},
  message: {
  documentMessage: {
showAdAttribution: true,
  title: "ᴢɪᴍ ʙᴏᴛ ᴠ5", 
  jpegThumbnail: fs.readFileSync('./drips.jpg')
}
}
 }

 
 let mudratunha = {
    key: { 
         fromMe: false,
         participant: `0@s.whatsapp.net`, ...(m.chat ? 
    { remoteJid: "17608914335-1625305606@g.us" } : {}) 
               },
    message: { 
       "extendedTextMessage": {
                "text":'SUB DRIPS OFC',
                "title": 'ᴢɪᴍ ʙᴏᴛ ɪɴᴄ',
                'jpegThumbnail': fs.readFileSync('./drips.jpg')
             }
           } 
          }

let picaks = [flaming,fluming,flarun,flasmurf,mehk,awog,mohai,mhehe]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
    try {
 let isNumber = x => typeof x === 'number' && !isNaN(x)
 let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
 let user = global.db.users[m.sender]
 if (typeof user !== 'object') global.db.users[m.sender] = {}
 if (user) {
   if (!isNumber(user.afkTime)) user.afkTime = -1
   if (!('afkReason' in user)) user.afkReason = ''
   if (!isNumber(user.limit)) user.limit = limitUser
 } else global.db.users[m.sender] = {
   afkTime: -1,
   afkReason: '',
   limit: limitUser,
 }
 let chats = global.db.chats[m.chat]
   if (typeof chats !== 'object') global.db.chats[m.chat] = {}
   if (chats) {
  if (!('mute' in chats)) chats.mute = false
  if (!('chatbot' in chats)) chats.chatbot = false
  if (!('antilink' in chats)) chats.antilink = true
  if (!('antilinkyt' in chats)) chats.antilinkyt = false
  if (!('autoblock' in chats)) chats.autoblock = false
  if (!('isWelcome' in chats)) chats.isWelcome = false
  if (!('localonly' in chats)) chats.localonly = true
  if (!('antilinkall' in chats)) chats.antilinkall = false
  if (!('antiytchannel' in chats)) chats.antiytchannel = false
  if (!('antitiktok' in chats)) chats.antitiktok = false
  if (!('antitelegram' in chats)) chats.antitelegram = false
  if (!('antiinstagram' in chats)) chats.antiinstagram = false
  if (!('antifb' in chats)) chats.antifb = false
  if (!('antibule' in chats)) chats.antibule = false
  if (!('antiwame' in chats)) chats.antiwame = false
  if (!('wame' in chats)) chats.wame = false
  if (!('antitwitter' in chats)) chats.antitwitter = false
  if (!('antivn' in chats)) chats.antivn = false
  if (!('antiphoto' in chats)) chats.antiphoto = false
  if (!('antisticker' in chats)) chats.antisticker = false
  if (!('antivideo' in chats)) chats.antivideo = false
 
} else global.db.chats[m.chat] = {
   mute: false,
   chatbot: false,
   wame: false,
   antilink: true,
   antilinkyt: false,
   isWelcome: false,
   antilinkall: false,
   antiytchannel: false,
   antitiktok: false,
   antitelegram: false,
   antiinstagram: false,
   antifb: false,
   antibule: false,
   antiwame: false,
   antitwitter: false,
   antisticker: false,
   antiphoto: false,
   antivn: false,
   antivideo: false,
   privatechat: true,
   localonly: true,
 }
 let setting = global.db.settings[botNumber]
 if (typeof setting !== 'object') global.db.settings[botNumber] = {}
    if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = true
if (!('templateImage' in setting)) setting.templateImage = false
if (!('templateLocation' in setting)) setting.templateLocation = false
if (!('templateGif' in setting)) setting.templateGif = false
if (!('templateMsg' in setting)) setting.templateMsg = false
if (!('templateList' in setting)) setting.templateList = false
if (!('templateDoc' in setting)) setting.templateDoc = true
if (!('chatbot' in setting)) setting.chatbot = false
if (!('templateZimbot' in setting)) setting.templateZimbot = false
if (!('grouponly' in setting)) setting.grouponly = false
if (!('autoblock' in setting)) setting.autoblock = false
if (!('privatechat' in setting)) setting.privatechat = true
if (!('chatgpt' in setting)) setting.chatgpt = false
    } else global.db.settings[botNumber] = {
status: 0,
autobio: true,
templateImage: false,
templateLocation: false,
templateGif: false,
templateMsg: false,
templateList: false,
templateDoc: true,
templateZimbot: false,
chatbot: false,
grouponly: false,
autoblock: false,
privatechat: true,
chatgpt: false,
    }
} catch (err) {
 console.error(err)
}
ZimBotInc.ws.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt (batteryLevelStr)
  battre = batterylevel
})  

ZimBotInc.ws.on('CB:action,,charger', json => {
const chargerLevelStr = json[2][0][1].value
const charging = parseInt (chargerLevelStr)
  charger = charging
})  
//public/self
if (!ZimBotInc.public) {
if (!m.key.fromMe) return
}

//push message to console && autoread

const Drips = require('drips-memes')
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
let d = new Date(new Date + 3600000)
let locale = 'id'
let time = d.toLocaleString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Africa/Harare'})
const { color } = require('./lib/color')
if (isCmd && !m.isGroup)
console.log(color('[ RECIEVED ]'), color(time, 'red'), color(`${command} [${args.length}]`), Drips.hr(), 'FROM', color(pushname))

if (isCmd && m.isGroup)
console.log(color('[ RECIEVED ]'), color(time, 'red'), color(`${command} [${args.length}]`), Drips.hr(), 'FROM', color(pushname), 'in', color(groupName))

//leveling
const levelRole = getLevelingLevel(sender, _level)
  var role = 'bronz'
  if (levelRole <= 3) {
role = 'Copper'
  } else if (levelRole <= 5) {
role = 'Iron'
  } else if (levelRole <= 7) {
role = 'Silver'
  } else if (levelRole <= 10) {
role = 'Gold'
  } else if (levelRole <= 12) {
role = 'Platinum'
  } else if (levelRole <= 15) {
role = 'Mithril'
  } else if (levelRole <= 18) {
role = 'Orichalcum'
  } else if (levelRole <= 25) {
role = 'Adamantite'
  } else if (levelRole <= 45) {
role = 'Good In Game'
  }
 

//CHATBOT
if (global.dripsreadgroup) {
if (m.isGroup) { ZimBotInc.readMessages(m.chat, m.sender, [m.key.id]) }
}
if (global.dripsreadall) { if (m.message) { ZimBotInc.readMessages(m.chat, m.sender, [m.key.id]) }
}
if (global.dripsrecord) { if (m.chat) { ZimBotInc.sendPresenceUpdate('recording', m.chat) }
}

if (global.dripstyping) { if (m.chat) { ZimBotInc.sendPresenceUpdate('composing', m.chat) }
}
if (global.available) { if (m.chat) { ZimBotInc.sendPresenceUpdate('available', m.chat) }
}
if (global.unavailable) { if (m.chat) { ZimBotInc.sendPresenceUpdate('unavailable', m.chat) }
}
//RPG FUNCTION BY DRIPS
function randomNomor(min, max = null) {
  if (max !== null) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
  return Math.floor(Math.random() * min) + 1//removing credits is not any option
  }
  }

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
  }
let beedrips = [f1,f2,f3,f4,f5,f6]
        let dripsee = pickRandom(beedrips)
/*
if (budy.includes("://chat.whatsapp.com/")) {
  console.log(
    color("[AUTO-JOIN]", "red"),
    color("YAHAHAHHAHAH", "white")
  );
  ZimBotInc.query({
    json: [
      "action",
      "invite",
      `${budy.replace("https://chat.whatsapp.com/", "")}`,
    ],
  });
}
*/
if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
  console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
  return reply('〔ʙᴇ ᴘᴀᴛɪᴇɴᴛ 𝟻 sᴇᴄᴏɴᴅs/ᴄᴏᴍᴍᴀɴᴅ〕')}

const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
  }

var elit = '*Oʀᴅɴᴀʀʏ ᴀᴅᴠᴇɴᴛᴜʀᴇ*'
if (isPremium)
{
elit = '*Aᴅᴠᴇɴᴛᴜʀᴇ ᴘʀᴏ*'
}
if (isCreator)
{
elit = '*Aᴅᴍɪɴ ɢᴀᴍᴇ*'
}
async function sendButLoc(from) {
  reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
  var button = [
{ urlButton: { displayText: `SCRIPT`, url : `${wame}` } },
{ quickReplyButton: { displayText: `INVENTORY`, id: `${prefix}inventori` } },
{ quickReplyButton: { displayText: `OWNER`, id: `${prefix}owner` } }
]
bufu = await getBuffer(picak+'RPG GAMES')
var DADYDR = `
 ┌───〔 *_◉ᴀʙᴏᴜᴛ◉_* 〕
 ┊ *Nᴀᴍᴇ:* ${pushname}
 ┊ *Rᴀɴᴋ:* ${role}
 ┊ *Sᴛᴀᴛᴜꜱ:* ${elit}
 ┊ *Mᴏɴᴇʏ:* $${(getBalance(sender, balance))}
 ┊ *Xᴘ:* ${getLevelingXp(sender)}/${reqXp}
 ┊ *Lᴇᴠᴇʟ:* ${getLevelingLevel(sender)}
 └───────────●

 ┌───〔 *_◉ɪɴꜰᴏ◉_* 〕
 ┊ *Mᴏɴᴇʏ:* $${(getBalance(sender, balance))}
 ┊ *Gᴏʟᴅ:* ${getEmas(sender)}
 ┊ *Iʀᴏɴ:* ${getBesi(sender)}
 ┊ *Fɪꜱʜ:* ${getFish(sender)}
 ┊ *Dɪᴀᴍᴏɴᴅ:* ${getDm(sender)}
 └───────────●

 ┌───〔 *_◉ᴍᴇɴᴜ ʀᴘɢ◉_* 〕
 ┊ ${prefix}joinrpg
 ┊ ${prefix}quest 
 ┊ ${prefix}mining
 ┊ ${prefix}mancing
 ┊ ${prefix}luckyday
 ┊ ${prefix}luckytime
 ┊ ${prefix}adventure
 ┊ ${prefix}inventori
 └───────────●

 ┌───〔 *_◉Fᴀʀᴍ ʀᴘɢ◉_* 〕
 ┊ ${prefix}killslime
 ┊ ${prefix}killgoblin
 ┊ ${prefix}killdevil
 ┊ ${prefix}killbehemoth
 ┊ ${prefix}killdemon
 ┊ ${prefix}killdemonking 
 └───────────●

 ┌───〔 *_◉Tʀᴀᴅᴇ ʀᴘɢ◉_* 〕
 ┊ ${prefix}sellikan
 ┊ ${prefix}sellbesi
 ┊ ${prefix}sellemas
 ┊ ${prefix}selldiamond
 └───────────●

 ┌───〔 *_ᴛʜᴀɴᴋs ᴛᴏ_* 〕
 ┊ʏᴏᴜʀ ᴄʀᴇᴅɪᴛꜱ
 └───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕
 `
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: DADYDR,
hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`,
hydratedButtons:  [{        
    "urlButton": {
      "displayText": "SUBSCRIBE",
      "url": "https://youtube.com/@zim-bot"
    }
}, {
quickReplyButton: {
    displayText: 'INVENTORY',
    id: `${prefix}inventori`
}},{
  quickReplyButton: {
      displayText: 'OWNER',
      id: `${prefix}owner`
  }
}
]
}
}
}), { userJid: m.chat })
ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
.catch ((err) => reply(err))
}
async function sendButJoin(from, query) {
reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
 _petualang.push(sender)
fs.writeFileSync('./database/inventori.json', JSON.stringify(_petualang))        
addInventori(sender)
addLevelingId(sender) 
var name = args[0]
var serialUser = createSerial(14)
reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
bufut = await getBuffer(picak+'JOIN RPG')
var button = [
{ urlButton: { displayText: `SOURCE CODE`, url : `${wame}` } },
{ quickReplyButton: { displayText: `RPG MENU`, id: `${prefix}rpgmenu` } },
{ quickReplyButton: { displayText: `OWNER`, id: `${prefix}owner` } }
 ]
var hg = ` 
 ❲ *_Sᴜᴄᴄᴇꜱꜱ Jᴏɪɴ ʀᴘɢ_* ❳
 
╏ ᴘʀᴏꜰɪʟᴇ ╏
┊ *Nᴀᴍᴇ :* ${name}
┊ *Lᴇᴠᴇʟ :* ${getLevelingLevel(sender)}
┊ *Sᴛᴀᴛᴜꜱ :* ${elit}
┊ *Xᴘ:*  ${getLevelingXp(sender)}/${reqXp}
❲ *_ʀᴘɢ ɢᴀᴍᴇ_* ❳`
  let message = await prepareWAMessageMedia({ image: bufut, jpegThumbnail:bufut }, { upload: ZimBotInc.waUploadToServer })
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
  templateMessage: {
  hydratedTemplate: {
  imageMessage: message.imageMessage,
  hydratedContentText: hg,
  hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`,
  hydratedButtons:  [{        
      "urlButton": {
        "displayText": "SUBSCRIBE",
        "url": "https://youtube.com/@zim-bot"
      }
  }, {
  quickReplyButton: {
      displayText: 'INVENTORY',
      id: `${prefix}inventori`
  }},{
    quickReplyButton: {
        displayText: 'OWNER',
        id: `${prefix}owner`
    }
  }
  ]
  }
  }
  }), { userJid: m.chat })
  ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
  .catch ((err) => reply(err))
  }
          
async function sendButslime(from) {
ez = Math.ceil(Math.random() * 400)
addLevelingXp(sender, ez)
a = randomNomor(55)
b = randomNomor(400)
c = randomNomor(80)
d = randomNomor(3)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
bufutI = await getBuffer(picak+'KILL SLIME')
var button = [
{ urlButton: { displayText: `Script`, url : `${wame}` } },
{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
]
var hg = `*Mission to kill Slime*\n\n🎁 *Reward for killing Slime*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Thank you for carrying out this mission*`
          let message = await prepareWAMessageMedia({ image: bufutI, jpegThumbnail:bufutI }, { upload: ZimBotInc.waUploadToServer })
          const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
          templateMessage: {
          hydratedTemplate: {
          imageMessage: message.imageMessage,
          hydratedContentText: hg,
          hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`,
          hydratedButtons:  [{        
              "urlButton": {
                "displayText": "SUBSCRIBE",
                "url": "https://youtube.com/@zim-bot"
              }
          }, {
          quickReplyButton: {
              displayText: 'INVENTORY',
              id: `${prefix}inventori`
          }},{
            quickReplyButton: {
                displayText: 'OWNER',
                id: `${prefix}owner`
            }
          }
          ]
          }
          }
          }), { userJid: m.chat })
          ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
          .catch ((err) => reply(err))
          }
          
            async function sendButgoblin(from) {
            ez = Math.ceil(Math.random() * 500)
            addLevelingXp(sender, ez)
            a = randomNomor(65)
            b = randomNomor(500)
            c = randomNomor(90)
            d = randomNomor(5)
            addLevelingXp(sender, ez)
            addBalance(sender, b, balance)
            addEmas(sender, a)
            addBesi(sender, c)
            addDm(sender, d)
            bufo = await getBuffer(picak+'KILL GLOBIN')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission To kill Goblin*\n\n🎁 *Reward for killing Goblin*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Thank you for carrying out this misssion*`
            let message = await prepareWAMessageMedia({ image: bufo, jpegThumbnail:bufo }, { upload: ZimBotInc.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            templateMessage: {
            hydratedTemplate: {
            imageMessage: message.imageMessage,
            hydratedContentText: hg,
            hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`,
            hydratedButtons:  [{        
                "urlButton": {
                  "displayText": "SUBSCRIBE",
                  "url": "https://youtube.com/@zim-bot"
                }
            }, {
            quickReplyButton: {
                displayText: 'INVENTORY',
                id: `${prefix}inventori`
            }},{
              quickReplyButton: {
                  displayText: 'OWNER',
                  id: `${prefix}owner`
              }
            }
            ]
            }
            }
            }), { userJid: m.chat })
            ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            .catch ((err) => reply(err))
            }
          
            async function sendButdevil(from) {
            ez = Math.ceil(Math.random() * 600)
            addLevelingXp(sender, ez)
            a = randomNomor(70)
            b = randomNomor(600)
            c = randomNomor(95)
            d = randomNomor(6)
            addLevelingXp(sender, ez)
            addBalance(sender, b, balance)
            addEmas(sender, a)
            addBesi(sender, c)
            addDm(sender, d)
            bufas = await getBuffer(picak+'KILL DEVIL')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission to kill 𝗗𝗲𝘃𝗶𝗹️*\n\n🎁 *Reward for killing Devil*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Thank you for carrying out this mission*`
            let message = await prepareWAMessageMedia({ image: bufas, jpegThumbnail:bufas }, { upload: ZimBotInc.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            templateMessage: {
            hydratedTemplate: {
            imageMessage: message.imageMessage,
            hydratedContentText: hg,
            hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`,
            hydratedButtons:  [{        
                "urlButton": {
                  "displayText": "SUBSCRIBE",
                  "url": "https://youtube.com/@zim-bot"
                }
            }, {
            quickReplyButton: {
                displayText: 'INVENTORY',
                id: `${prefix}inventori`
            }},{
              quickReplyButton: {
                  displayText: 'OWNER',
                  id: `${prefix}owner`
              }
            }
            ]
            }
            }
            }), { userJid: m.chat })
            ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            .catch ((err) => reply(err))
            }
          
            async function sendButbehemoth(from) {
            ez = Math.ceil(Math.random() * 700)
            addLevelingXp(sender, ez)
            a = randomNomor(75)
            b = randomNomor(600)
            c = randomNomor(100)
            d = randomNomor(7)
            addLevelingXp(sender, ez)
            addBalance(sender, b, balance)
            addEmas(sender, a)
            addBesi(sender, c)
            addDm(sender, d)
            batai = await getBuffer(picak+'KILL BEHEMOTH')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission to kill Behemoth*\n\n🎁 *Reward for kiling Behemoth*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Thank you for carrying out this mission*`
            let message = await prepareWAMessageMedia({ image: batai, jpegThumbnail: batai }, { upload: ZimBotInc.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
              templateMessage: {
              hydratedTemplate: {
              imageMessage: message.imageMessage,
              hydratedContentText: hg,
              hydratedFooterText: `${global.botname}`,
              mentions: [sender],
              hydratedButtons: [{        
              "urlButton": {
              "displayText": "SUBSCRIBE",
              "url": "https://youtube.com/@zim-bot"
              }
            }, {
              quickReplyButton: {
                  displayText: 'INVENTORY',
                  id: `${prefix}inventori`
              }},{
                quickReplyButton: {
                    displayText: 'OWNER',
                    id: `${prefix}owner`
                }
              }
              ]
              }
              }
              }), { userJid: m.chat })
              ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
                  
            .catch ((err) => reply(err))
          }
          
            async function sendButdemon(from) {
            ez = Math.ceil(Math.random() * 850)
            addLevelingXp(sender, ez)
            a = randomNomor(90)
            b = randomNomor(900)
            c = randomNomor(120)
            d = randomNomor(10)
            addLevelingXp(sender, ez)
            addBalance(sender, b, balance)
            addEmas(sender, a)
            addBesi(sender, c)
            addDm(sender, d)
            bhuu = await getBuffer(picak+'KILL DEMON')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission to kill Demon*\n🎁 *Demon Kill Reward*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold*: ${a}\n ┊ *Diamond:* ${d}\n\n*Thank You for Carrying Out This Mission*`
            let message = await prepareWAMessageMedia({ image: bhuu, jpegThumbnail: bhuu }, { upload: ZimBotInc.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
              templateMessage: {
              hydratedTemplate: {
              imageMessage: message.imageMessage,
              hydratedContentText: hg,
              hydratedFooterText: `${global.botname}`,
              mentions: [sender],
              hydratedButtons: [{        
              "urlButton": {
              "displayText": "SUBSCRIBE",
              "url": "https://youtube.com/@zim-bot"
              }
            }, {
              quickReplyButton: {
                  displayText: 'INVENTORY',
                  id: `${prefix}inventori`
              }},{
                quickReplyButton: {
                    displayText: 'OWNER',
                    id: `${prefix}owner`
                }
              }
              ]
              }
              }
              }), { userJid: m.chat })
              ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
                  
            .catch ((err) => reply(err))
          }
          
            async function sendButdemonking(from) {
            ez = Math.ceil(Math.random() * 1000)
            addLevelingXp(sender, ez)
            addLevelingXp(sender, ez)
            addBalance(sender, 1999, balance)
            addEmas(sender, 99)
            addBesi(sender, 99)
            addDm(sender, 99)
            bhuud = await getBuffer(picak+'KILL DEMONKING ')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission to kill DemonKing*\n\n🎁 *DemonKing Kill Reward*\n ┊ *Money* : $${b}\n ┊ *Iron :* ${c}\n ┊ *Gold :* ${a}\n ┊ *Diamond :* ${d}\n\n*Thank You for Carrying Out This Mission*`
            let message = await prepareWAMessageMedia({ image: bhuud, jpegThumbnail:bhuud }, { upload: ZimBotInc.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            templateMessage: {
            hydratedTemplate: {
            imageMessage: message.imageMessage,
            hydratedContentText: hg,
            hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`,
            hydratedButtons:  [{        
                "urlButton": {
                  "displayText": "SUBSCRIBE",
                  "url": "https://youtube.com/@zim-bot"
                }
            }, {
            quickReplyButton: {
                displayText: 'INVENTORY',
                id: `${prefix}inventori`
            }},{
              quickReplyButton: {
                  displayText: 'OWNER',
                  id: `${prefix}owner`
              }
            }
            ]
            }
            }
            }), { userJid: m.chat })
            ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            .catch ((err) => reply(err))
            }
          const emote = (satu, dua) => {
            try{	    
            const { EmojiAPI } = require("emoji-api");
            const emoji = new EmojiAPI();
            emoji.get(satu)
            .then(emoji => {
            const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
            const buttonMessage = {image: {url: emoji.images[dua].url},caption: "ᴢɪᴍ ʙᴏᴛ ᴠ5",footerText: 'Loading...',buttons: buttons,headerType: 4}
            ZimBotInc.sendMessage(from, buttonMessage, {quoted:m})
            })
            } catch (e) {
            reply("Emoji error, please enter another emojinNOTE : Just enter 1 emoji")
            }
            }
//----ANTILINK AND CHATBOT-----\\
//chatbot is encrypted sorry
var _0x33fa3e=_0x465d;function _0x2a31(){var _0x124451=['reply','1109740LfSEyY','includes','9059424ATMYLh','702DCvREW','3129360vqgfpx','sender','@s.whatsapp.net','http://api.brainshop.ai/get?bid=167831&key=BFghpAKanUPXcLWQ&uid=','error','9eHTAtD','chatbot','catch','&msg=','1931044WXDcdy','data','split','18074ZBFvdT','user','GET','27825912kQipLx','62352dAoPvn','settings','http://api.brainshop.ai/get?bid=167831&key=BFghpAKanUPXcLWQ&uid=ZimBotinc.user.id&msg='];_0x2a31=function(){return _0x124451;};return _0x2a31();}function _0x465d(_0x46eeb2,_0x5f0900){var _0x2a3178=_0x2a31();return _0x465d=function(_0x465d22,_0x141be9){_0x465d22=_0x465d22-0x110;var _0x9b342b=_0x2a3178[_0x465d22];return _0x9b342b;},_0x465d(_0x46eeb2,_0x5f0900);}(function(_0x3277b6,_0x4246a7){var _0x1e4f2f=_0x465d,_0x355551=_0x3277b6();while(!![]){try{var _0x22af3f=-parseInt(_0x1e4f2f(0x11c))/0x1+parseInt(_0x1e4f2f(0x115))/0x2+parseInt(_0x1e4f2f(0x111))/0x3*(parseInt(_0x1e4f2f(0x120))/0x4)+parseInt(_0x1e4f2f(0x124))/0x5+-parseInt(_0x1e4f2f(0x123))/0x6*(-parseInt(_0x1e4f2f(0x118))/0x7)+parseInt(_0x1e4f2f(0x122))/0x8+-parseInt(_0x1e4f2f(0x11b))/0x9;if(_0x22af3f===_0x4246a7)break;else _0x355551['push'](_0x355551['shift']());}catch(_0x32822d){_0x355551['push'](_0x355551['shift']());}}}(_0x2a31,0xabe65));if(db[_0x33fa3e(0x11d)][botNumber][_0x33fa3e(0x112)]){if(m[_0x33fa3e(0x125)][_0x33fa3e(0x121)](_0x33fa3e(0x126))){var mhata=''+command;sehcalaz=ZimBotInc[_0x33fa3e(0x119)]['id'][_0x33fa3e(0x117)]('@')[0x0];var duzvi=encodeURI(mhata);const bhabhi={'method':_0x33fa3e(0x11a),'url':_0x33fa3e(0x11e)+command};await axios['get'](_0x33fa3e(0x127)+sehcalaz+_0x33fa3e(0x114)+duzvi)['then'](function(_0x55e8cd){var _0x4963f0=_0x33fa3e,_0x207a24='';_0x207a24=_0x55e8cd[_0x4963f0(0x116)]['cnt'],m[_0x4963f0(0x11f)](_0x207a24);})[_0x33fa3e(0x113)](function(_0x4cac14){var _0x12b308=_0x33fa3e;console[_0x12b308(0x110)](_0x4cac14);});}}
if (db.settings[botNumber].chatgpt) {
if (m.chat.endsWith("@s.whatsapp.net")) {
if (!body) return
console.log("->[\x1b[1;32mNew\x1b[1;37m]", color('Question From', 'yellow'), color(pushname, 'lightblue'), `: "${body}"`)
try {
const response = await openai.createCompletion({
model: "text-davinci-002",
        prompt:body,
        temperature: 0.5,
        max_tokens: MAX_TOKEN,
		stop: ["Ai:", "Human:"],
        top_p: 0.3,
        frequency_penalty: 0.5,
        presence_penalty: 0, 
})
reply(response.data.choices[0].text.trim())
} catch (e) {
reply("Server Error, AI Not Responding...")
}
}
}

if (db.settings[botNumber].privatechat) {
if (m.chat.endsWith("@s.whatsapp.net")) {
const got = require('got')
let {body} = await got(`http://api.brainshop.ai/get?bid=173030&key=zK0sxNKb6C9pA3gr&uid=[${m.sender}]&msg=[${budy}]`)
  let value = JSON.parse(body).cnt;
   m.reply(value)
 }
 }
if (db.chats[m.chat].antilink) {
if (budy.includes('https://chat.whatsapp.com/')) {
if (!m.key.fromMe) {
reply('[ 𝗭𝗜𝗠 𝗕𝗢𝗧 𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞 ]\n𝗟𝗶𝗻𝗸 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱 𝗵𝗲𝗿𝗲, 𝗢𝗞𝘆?..,\n𝗚𝗼𝗼𝗱 𝗯𝘆𝗲 𝗜𝗺 𝗸𝗶𝗰𝗸𝗶𝗻𝗴 𝘂𝗿 𝗮𝘀𝘀 𝗻𝗼𝘄👋🏻')
let sianj = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}
}
if (db.chats[m.chat].wame) {
if (budy.match(`wa.me/`)) {
reply(`「 𝗭𝗜𝗠 𝗕𝗢𝗧 𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞 」\n\n𝗬𝗼𝘂 𝗵𝗮𝘃𝗲 𝘀𝗲𝗻𝗱 𝘄𝗮.𝗺𝗲 𝗹𝗶𝗻𝗸, 𝗻𝗼 𝘁𝗶𝗺𝗲 𝘁𝗼 𝘄𝗮𝘀𝘁𝗲 𝘂𝗮 𝗼𝘂𝘁!`)
if (!isBotAdmins) return reply(`𝘡𝘪𝘮 𝘉𝘰𝘵 𝘮𝘶𝘴𝘵 𝘣𝘦 𝘢𝘥𝘮𝘪𝘯 𝘧𝘪𝘳𝘴𝘵😚`)
let gclink = (`https://wa.me/`)
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(`𝘖𝘏 𝘠𝘦𝘢𝘩 𝘪𝘵 𝘥𝘪𝘥𝘯𝘵 𝘩𝘢𝘱𝘱𝘦𝘯, 𝘣𝘦𝘤𝘢𝘶𝘴𝘦 𝘺𝘰𝘶 𝘴𝘦𝘯𝘵 𝘵𝘩𝘪𝘴 𝘸𝘢.𝘮𝘦 𝘭𝘪𝘯𝘬𝘺 𝘰𝘬𝘢𝘺😌`)
if (isAdmins) return reply(`𝘏𝘦𝘭𝘭 𝘯𝘰😱 𝘺𝘰𝘶 𝘢𝘥𝘮𝘪𝘯`)
if (isCreator) return reply(`𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶`)
ZimBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (db.chats[m.chat].antiinstagram) {
    if (budy.includes("https://www.instagram.com/")){
 if (!isBotAdmins) return
 zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n\n*you are admn okay*`
 if (isAdmins) return reply(zimbotv3)
 if (m.key.fromMe) return reply(zimbotv3)
 if (isCreator) return reply(zimbotv3)
 kice = m.sender
 await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
 ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no ig links here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
 }
}

if (db.chats[m.chat].antisticker) {
let isSticker = m.mtype
if(isSticker === "stickerMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return reply(`*you are admin lucky you dont send stickers here*`)
if (isCreator) return reply(`*𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶*`)
reply('*ANTI STICKER*\n\n*NO STICKERS  ALLOWED HERE OKAY GOODBYE*')
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no stickers here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

if (db.chats[m.chat].antivn) {
let isAudio = m.mtype
if(isAudio === "audioMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return reply(`*you are admin lucky you dont send voice note here*`)
if (isCreator) return reply(`*𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶*`)
reply('*ANTI VOICE NOTE*\n\n*NO VOICE ALLOWED HERE  OKAY GOODBYE*')
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no voice note here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

if (db.chats[m.chat].antivideo) {
let isVideo = m.mtype
if(isVideo === "videoMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return reply(`*you are admin lucky you dont send videos here*`)
if (isCreator) return reply(`*𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶*`)
reply('*ANTI VIDEO*\n\n*NO VIDEOS ALLOWED HERE  OKAY GOODBYE*')
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no videos here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

if (db.chats[m.chat].antiphoto) {
let isPhoto = m.mtype
if(isPhoto === "imageMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return reply(`*you are admin lucky you dont send photos here*`)
if (isCreator) return reply(`*𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶*`)
reply('*ANTI PHOTOS*\n\n*NO PHOTOS ALLOWED HERE  OKAY GOODBYE*')
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no photos here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

if (db.chats[m.chat].antifb) {
if(budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n\n*you are admin okay*`
if (isAdmins) return reply(zimbotv3)
if (m.key.fromMe) return reply(zimbotv3)
if (isCreator) return reply(zimbotv3)
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
 ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no fb links here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} 
 }

 if (db.chats[m.chat].antitelegram) {
 if (budy.includes("https://t.me/")){
 if (!isBotAdmins) return
 zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n*you are admin okay*`
 if (isAdmins) return reply(zimbotv3)
 if (m.key.fromMe) return reply(zimbotv3)
 if (isCreator) return reply(zimbotv3)
 kice = m.sender
 await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
 ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no telegram links here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} 
 }

if (db.chats[m.chat].antitiktok) {
if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n\n*you are bot admin okay*`
if (isAdmins) return m.reply(zimbotv3)
if (m.key.fromMe) return m.reply(zimbotv3)
if (isCreator) return m.reply(zimbotv3)
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no tiktok links here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}

if (db.chats[m.chat].antitwitter) {
if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n *you are bot admin okay*`
if (isAdmins) return reply(zimbotv3)
if (m.key.fromMe) return reply(zimbotv3)
if (isCreator) return reply(zimbotv3)
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no twittwer link here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}

if (db.chats[m.chat].antilinkall) {
if (budy.includes("http")){ 
if (!isBotAdmins) return
zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n *you are bot admin okay*`
if (isAdmins) return reply(zimbotv3)
if (m.key.fromMe) return reply(zimbotv3)
if (isCreator) return reply(zimbotv3)
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
ZimBotInc.sendMessage(m.chat, {text:`*▊▊▊DETECTED▊▊▊*\n@${kice.split("@")[0]} *I said dont send any links okay*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}


if (m.mtype == 'viewOnceMessage') {
if (!db.chats[m.chat].antionce) return
teks = `*▊▊▊DETECTED ONCE▊▊▊*

`
ZimBotInc.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply(`*I opened it by force*`))
}



if (db.chats[m.chat].antilinkyt) {
if (budy.includes("https://youtube.com/")){ 
if (!isBotAdmins) return
zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n*you are admin okay*`
if (isAdmins) return reply(zimbotv3)
if (m.key.fromMe) return reply(zimbotv3)
if (isCreator) return reply(zimbotv3)
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no yt links here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} 
}

if (db.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
reply(`*▊▊▊ ANTILINK ▊▊▊*\n\n*You have been detected sending a group link, sorry you will be kicked!*`)
if (!isBotAdmins) return reply(`*Bbot must be admin okay*`)
let gclink = (`https://chat.whatsapp.com/`+await ZimBotInc.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(`*sorry I didn't kick you, because you sent the link of this group lucky you*`)
if (isAdmins) return reply(`*Ehh sorry you admin*`)
if (isCreator) return reply(`*whoa you are  bot creator i wont kick you okay*`)
ZimBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (budy.length > 3500) {
if (!m.isGroup) return
if (!isAntiVirtex) return
if (groupAdmins) return
reply('Mark as read\n'.repeat(300))
reply(`*▊▊▊DETECTED▊▊▊*\n\n*You sent a virtex, sorry you will be kicked from the group*`)
console.log(('[KICK]', 'red'), color('Received a text virus!', 'yellow'))
ZimBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}  


if (db.chats[m.chat].antiwame) {
if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n\n*you are admin okay*`
if (isAdmins) return reply(zimbotv3)
if (m.key.fromMe) return reply(zimbotv3)
if (isCreator) return reply(zimbotv3)
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no links okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}

if (db.settings[botNumber].autoblock) {
if (m.chat.endsWith("@s.whatsapp.net")) {
if (isCreator) reply('*you are bot creator okay*')
block = m.sender
await ZimBotInc.sendMessage(from, {text:`*▊▊▊AUTO BLOCK▊▊▊*\n\n@${block.split("@")[0]} *today I'm blocking dumps bye you are _blocked_* *if you want to use bot join this group* ${global.group1}\n\n${global.group2}`, m})
ZimBotInc.updateBlockStatus(m.sender,'block')
}
}

if (db.chats[m.chat].antilinkyt) {
if (budy.includes(`https://nando.com`)) {
if (!isBotAdmins) return reply('*BOT MUST BE ADMIN OKAY*')
reply(`*▊▊▊ ANTIYT ▊▊▊*\n\n*SOrry ${botname} will kick you out because what you sent is a youtube link in this group*`)
if (isAdmins) return reply(`*Ehh sorry you admin*`)
 if (isCreator) return reply(`*whoa you are  bot creator i wont kick you okay*`)
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
ZimBotInc.sendMessage(m.chat, {text:`*▊▊▊ ANTILINK ▊▊▊*\n\n@${kice.split("@")[0]} *Has been kicked for sending the youtube link in this group*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}


if (db.chats[m.chat].antibule)  {
if (m.sender.includes(`+212`)) {
if (!isBotAdmins) return reply('*BOT MUST BE ADMIN OKAY*')
reply(`*▊▊▊ ANTIBULE ▊▊▊*\n\n*Sorry ${botname} will kick you out because you are a stranger in this group*`)
if (isAdmins) return reply(`*Ehh sorry you admin*`)
if (isCreator) return reply(`*whoa you are  bot creator i wont kick you okay*`)
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
ZimBotInc.sendMessage(m.chat, {text:`*▊▊▊ ANTILINK ▊▊▊*\n\n@${kice.split("@")[0]} *You shouldn't be in this group*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
if (db.settings[botNumber].grouponly) {
  if (!m.isGroup) {
    let a = 'a'
    if (!isCreator) throw `*INBOX NOT ALLOWED*`
    if (budy === a) 
    throw  '*inbox not allowed*'
   
    }
  }
var Apik = ''
var socket = fetchJson('wss://wss.allsportsapi.com/live_events?widgetKey='+ 'db7fca1f4dfd0fa8b50c30c3b4569a61e0c5c93a79c18864bf9c9b6ab635c427' +'&timezone=+02:00');
socket.onmessage = function(e) {
  if (e.data) {
    var matcheData = JSON.parse(e.data);
    console.log(`*JUST IN:*` + matcheData)
  }
}
//mute chat
 if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
 return
 }
//write database every 1minute
setInterval(() => {
 fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)
//But5Loc
var nextMinutes = Math.random() * 300 + 1000;
setTimeout(function(){
  ZimBotInc.sendMessage(ZimBotInc.user.id, {text: `*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ ANNOUNCEMENT:* *SUBSCRIBE TO DRIPS OFC*\n\n*YOUTUBE:* https://youtube.com/@zim-bot\n\n*NEW FEATURES COMING SOON SO STAY TUNED*\n\n*FEEL FREE TO BRING IDEAS OF THE FEATURES ON THE TABLE*\n\n*IF YOU WANT TO CONTRUBUTE FORK THE REPO, MAKE CHANGES PUSH YOUR CHANGES TO THE ORIGIN BRANCH AND WAIT FOR YOUR PULL REQUEST TO BE VERIFIED*\n\n*Thanks for choosing zim-bot*`,contextInfo: { externalAdReply:{title:"ᴢɪᴍ ʙᴏᴛ ᴠ5",body:"SUBSCRIBE DRIPS OFC",showAdAttribution: true,mediaType:2,thumbnail: fs.readFileSync(`./drips.jpg`) ,mediaUrl:`https://youtu.be/KNu-gr2h7bo`, sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: m})
  //anouncement by drips 
}, nextMinutes * 300 * 1000);
const send5Butlmg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
    var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
   locationMessage: { degreesLatitude: 0, degreesLongtitude: 0, jpegThumbnail: img },
 "hydratedContentText": text,
 "hydratedFooterText": footer,
 "hydratedButtons": but
   }
   }
   }), options)
    return ZimBotInc.relayMessage(jid, template.message, { messageId: template.key.id })
    }
//reset limit every 12hrs
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
 let user = Object.keys(global.db.users)
 let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
 for (let jid of user) global.db.users[jid].limit = limitUser
 console.log('Reseted Limit')
}, {
 scheduled: true,
 timezone: "Africa/Harare"
})
//script by drips   
//respond to cmd
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
 userJid: ZimBotInc.user.id,
 quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, ZimBotInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
 ...chatUpdate,
 messages: [proto.WebMessageInfo.fromObject(messages)],
 type: 'append'
}
ZimBotInc.ev.emit('messages.upsert', msg)
}
    



    
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
 let user = global.db.users[jid]
 if (!user) continue
 let afkTime = user.afkTime
 if (!afkTime || afkTime < 0) continue
 let reason = user.afkReason || ''
 reply(`
Don't tag him!
He's in Offline/AFK, ${reason ? 'with reason ' + reason : 'no reason'}
Its been ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
 let user = global.db.users[m.sender]
 reply(`
You came back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
 user.afkTime = -1
 user.afkReason = ''
}
    
switch(command) {
  case 'quest':
    let sectionnya= [
    {
    "title": `MISSION 1`,
     rows: [
    {
    "title": `KILLING SLIME`,
    "description": `Hunting Slimes For Rewards`,
    "rowId": `${prefix}slime`
    }
    ]
    }
    ,
    {
    "title": `MISSION 2`,
     rows: [
    {
    "title": `KILLING GOBLIN`,
    "description": `Hunt Globin To Get Rewards`,
    "rowId": `${prefix}goblin`
    }
    ]
    }
    ,
    {
    "title": `MISSION 3`,
     rows: [
    {
    "title": `KILLING DEVIL`,
    "description": `Hunt Devils To Get Rewards`,
    "rowId": `${prefix}devil`
    }
    ]
    }
    ,
    {
    "title": `MISSION 4`,
     rows: [
    {
    "title": `KILLING BEHEMOTH`,
    "description": `Hunting Behemoths To Earn Rewards`,
    "rowId": `${prefix}behemoth`
    }
    ]
    }
    ,
    {
    "title": `MISSION 5`,
     rows: [
    {
    "title": `KILLING DEMONS`,
    "description": `Hunt Demons To Get Rewards`,
    "rowId": `${prefix}demon`
    }
    ]
    }
    ,
    {
    "title": `MISSION 6`,
     rows: [
    {
    "title": `KILLING DEMONKING`,
    "description": `DemonKing Hunting To Earn Rewards`,
    "rowId": `${prefix}demonking`
    }
    ]
    }
    ]
    ZimBotInc.sendList(m.chat, `Hi Chomie *${pushname}*`, `Please Select Below`, "CLICK", "ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ ", sectionnya, { quoted: m})
    break
    case 'slime':
    case 'killslime':
    if (!m.isGroup) return reply(mess.group) 
    if (!isPetualang) return reply(mess.noPetualang)
    await sendButslime(from)
    break
    case 'goblin':
    case 'killgoblin':
    if (!m.isGroup) return reply(mess.group) 
    if (!isPetualang) return reply(mess.noPetualang)
    await sendButgoblin(from)
    break
    case 'devil':
    case 'killdevil':
    if (!m.isGroup) return reply(mess.group) 
    if (!isPetualang) return reply(mess.noPetualang)
    await sendButdevil(from)
    break
    case 'behemoth':
    case 'killbehemoth':
    if (!m.isGroup) return reply(mess.group) 
    if (!isPetualang) return reply(mess.noPetualang)
    await sendButbehemoth(from)
    break
    case 'demon':
    case 'killdemon':
    if (!m.isGroup) return reply(mess.group) 
    if (!isPetualang) return reply(mess.noPetualang)
    await sendButdemon(from)
    break
    case 'demonking':
    case 'killdemonking':
    if (!m.isGroup) return reply(mess.group) 
    if (!isPetualang) return reply(mess.noPetualang)
    await sendButdemonking(from)
    break
    case 'rpgmenu':
case 'profile':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
await sendButLoc(from)
break
case 'joinrpg':
if (!m.isGroup) return reply(mess.group)  
if (isPetualang) return reply(' *Youve Become an Adventurer*')
if (args.length < 1) return reply(`*Send a command ${prefix + command} name*`)
await sendButJoin(from, q)
break
case 'mining':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
pp = randomNomor(75)
emas = randomNomor(15)
dm = randomNomor(3)
besi = randomNomor(50)
addBalance(sender, pp, balance)
addBesi(sender, besi)
addEmas(sender, emas)
addDm(sender, dm)
mining = ('*Wait mining......*')
setTimeout( () => {
buttons = [
{ buttonId: 'mining', buttonText: { displayText: 'Mining' }, type: 1 }
]
ZimBotInc.sendButtonText(m.chat, buttons, `*Completed Mining🚧nlist results:*\n*Gold* ${emas}🪙\n*Money:* $${pp}💰\n*Iron:* ${besi}⛓️\n*Diamond:* ${dm}💎`, ZimBotInc.user.name, m)
}, 9000) // 1000 = 1s,
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: '🚧 Finished Kneading . . .🪙👷' }, { quoted: m })
}, 7000) // 1000 = 1s,
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: '🚧 Finding Gold . . .⚒️🏔️️️' }, { quoted: m })
}, 4000) // 1000 = 1s,
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: '🚧 Start Mining . . .⚒️🏔️️' }, { quoted: m })
}, 1500) // 1000 = 1s,
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: mining }, {quoted: m}) 
}, 0) // 1000 = 1s,
break
case 'inventori':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
buttons = [
{ buttonId: 'adventure', buttonText: { displayText: 'Adventure' }, type: 1 }
]
ZimBotInc.sendButtonText(m.chat, buttons, `📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n ┊ Name: ${pushname}\n ┊ Rank : ${role}\n ┊ Status : ${elit}\n ┊ Xp : ${getLevelingXp(sender)}/${reqXp}\n ┊ Level : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n ┊ Gold : ${getEmas(sender)}🪙\n ┊ Money : $${(getBalance(sender, balance))}💰\n ┊ Iron : ${getBesi(sender)}⛓️\n ┊ Diamond : ${getDm(sender)}💎\n ┊ Fish : ${getFish(sender)}🎣`, ZimBotInc.user.name, m)
break
case 'sellikan':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
if (args.length < 1) return reply(`Send command *${prefix + command}* amount to sell`)
jmlh = body.slice(10)
rp = 5 * jmlh
if (getFish(sender) < jmlh) return reply(`*Your Fish Isn't Enough*`)
sellFish(sender, jmlh, balance)
addBalance(sender, rp, balance) 
buttons = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
ZimBotInc.sendButtonText(m.chat, buttons, `🛒 *MARKET*\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Price/Fish : 5\n ┊ Status : Success\n ┊ Left FishPrice/Fish : ${getFish(sender)}\n ┊ Sales Results : $${rp}`,  ZimBotInc.user.name, m)
break
case 'sellbesi':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
if (args.length < 1) return reply(`Send command *${prefix + command}* amount to sell`)
jmlh = body.slice(10)
rp = 10 * jmlh
if (getBesi(sender) < jmlh) return reply(`Besi Isn't Enough`)
sellBesi(sender, jmlh, balance)
addBalance(sender, rp, balance) 
buttons = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
ZimBotInc.sendButtonText(m.chat, buttons, `🛒 MARKET\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Harga/Besi : 10\n ┊ Status : Sukses\n ┊ Sisa Besi : ${getBesi(sender)}\n ┊ Sales Results : $${rp}`, ZimBotInc.user.name, m)
break
case 'sellemas':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
if (args.length < 1) return reply(`Send command *${prefix + command}* amount to sell`)
jmlh = body.slice(10)
rp = 25 * jmlh
if (getEmas(sender) < jmlh) return reply(`Your Gold Isn't Enough`)
sellEmas(sender, jmlh, balance)
addBalance(sender, rp, balance) 
buttons = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
ZimBotInc.sendButtonText(m.chat, buttons, `🛒 MARKET\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Harga/Emas : 25\n ┊ Status : Sukses\n ┊ Sisa Emas : ${getEmas(sender)}\n ┊ Sales Results : $${rp}`, ZimBotInc.user.name, m)
break 
case 'selldiamond':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
if (args.length < 1) return reply(`Send command *${prefix + command}* amount to sell`)
ttl = body.slice(13)
var etoo = 75 * ttl
if (getDm(sender) < ttl) return reply(`Iron Isn't Enough`)
sellDm(sender, ttl)
addBalance(sender, etoo, balance) 
buttons = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
ZimBotInc.sendButtonText(m.chat, buttons, `🛒 MARKET\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Harga/Dm : 75\n ┊ Status : Sukses\n ┊ Sisa Diamond : ${getDm(sender)}\n ┊ Sales Results : $${etoo}`, ZimBotInc.user.name, m)
break 
case 'mancing':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
ikannya = ikan[Math.floor(Math.random() * ikan.length)]
xp = Math.ceil(Math.random() * 350)
coin = randomNomor(50)	    
ditangkap = Math.ceil(Math.random() * 50)
cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
setTimeout( () => {
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `「 Memancing 」\n\n ┊ *Capture:* ${ikannya}\n ┊ *Total Get:* ${ditangkap} *Fish*\n ┊ MONEY : $${coin}\n ┊ EXP : ${xp}Xp`
        ZimBotInc.sendMessage(from, { caption: hg, location: { jpegThumbnail: cing }, templateButtons: button, footer: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`, mentions: [sender] })
        .catch ((err) => reply(mess.error))
}, 6000)
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: 'Managed to Get a Fish . . .' }, { quoted: m })
}, 5000) // 1000 = 1s,
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: '🎣 Attracting Kail. . .' }, { quoted: m })
}, 3000) // 1000 = 1s,
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: '🎣 Start Fishing . . .' }, { quoted: m })
}, 1500) // 1000 = 1s,
addFish(sender, ditangkap)
addLevelingXp(sender, xp)
addBalance(sender, coin, balance) 
break
case 'adventure':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
ngab = ['Avalanche','Volcanic Eruption','Tsunami','Earthquake','Meteor','Demon']
var sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
var dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
anu = fs.readFileSync('./lib/dungeon.js');
var ad = dungeon[Math.floor(Math.random() * dungeon.length)]
jsonData = JSON.parse(anu);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasm = await getBuffer(randKey.result)  
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
setTimeout( () => {		
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `「 DEATH 」\n\n *┊ Place*  ${ad}\n ┊ *MONEY :* $${money}\n ┊ *EXP :* ${adven}Xp`
        ZimBotInc.sendMessage(from, { caption: hg, location: { jpegThumbnail: hasm }, templateButtons: button, footer: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`, mentions: [sender] })
        .catch ((err) => reply(mess.error))
}, 7000)
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: `Awass` }, { quoted: m })
}, 5000) // 1000 = 1s,
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: `Suddenly There ${sesuatu}` }, { quoted: m })
}, 3000) // 1000 = 1s,
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: `${pushname} On an Adventure` }, { quoted: m })
}, 1500) // 1000 = 1s,
addLevelingXp(sender, adven)
addBalance(sender, money, balance)
break
case 'luckyday':
case 'luckytime':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
{
ez = Math.ceil(Math.random() * 450)
a = randomNomor(99)
b = randomNomor(500)
c = randomNomor(150)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
addEmas(sender, a)
addBesi(sender, c)
buttons = [
{ buttonId: `${command}`, buttonText: { displayText: `TRY LUCKY` }, type: 1 }
]
ZimBotInc.sendButtonText(m.chat, buttons, `🎰 *Lucky*\n┊ *Money:* $${b}\n┊ *Gold :* ${a}\n┊ *Iron :* ${c}\n┊ *XP :* ${ez}`, ZimBotInc.user.name, m)
}
break
case 'afk': {
   let user = global.db.users[m.sender]
   user.afkTime = + new Date
   user.afkReason = text
   reply(`${m.pushName} Already Afk${text ? ': ' + text : ''}`)
 }
 break
/* case 'anyapk': 
 const anyApkDl = require("any-apk-dl")
const provider = anyApkDl()

provider.download("com.fmwhatsapp","./apks/").then(res=>{
    console.log(res);
})
case 'apktes': //Script by zim-bot
  const downloader = require("apk-downloader")

downloader.downloadAPK("com.microbees.floatingapp")
*/

 
 
  /*  case 'donasi': case 'donate': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
   ZimBotInc.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/TfI3QYW.jpg' }, caption: `*𝗛𝗜 𝗕𝗥𝗢 ${m.pushName}*\n\n 𝗕𝗢𝗧 𝗥𝗘𝗡𝗧𝗔𝗟 𝗣𝗥𝗜𝗖𝗘\n 250rands Per Group via Gpay/paytm/phonepe 1 Month\n\nFor more details, you can chat with the owner\nhttps://wa.me/2+447441437150 (ZIM BOT OWNER)\n\n𝗗𝗢𝗡𝗔𝗧𝗘 : \n\n 𝗙𝗔𝗠𝗣𝗔𝗬 : https://i.imgur.com/TfI3QYW.jpg\n` }, { quoted: m })
 }
 */
 break
 case 'sc': case 'script': case 'donate': case 'donasi': case 'donate': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {

  teks = `
  *ZIM-BOT-V4*\n\n*YOUTUBE:* https://youtu.be/KNu-gr2h7bo\n*GITHUB:* https://youtube.com/@zim-bot\n\n*DONATE:* https://www.paypal.com/paypalme/zimbotinc`
  let buttons = [
  {buttonId: `rpgmenu`, buttonText: {displayText: 'RPG'}, type: 1}
  ]
  let buttonMessage = {
  image: thumb,
  jpegThumbnail: global.thumb,
  caption: teks,
  footer: `${botname}`,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title:"DONATE ME",
  body: "DRIPS OFC", 
  showAdAttribution: true,
  thumbnail: fs.readFileSync("Zimbot/drips.jpg"),
  mediaType:1,
  mediaUrl: 'https://youtu.be/KNu-gr2h7bo',
  sourceUrl: "https://youtu.be/KNu-gr2h7bog"
  }}
  }
  ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
  }
 break
 case 'forex': case 'broker': case 'binary': case 'trading': {
  bentoforex = await getBuffer(picak+'LIVE FOREX')
  teks = `
  *ZIM-BOT-V4 FOREX TRADING*\n\n*DESCRIPTION:* _Trade with Deriv broker ( formerly called Binary ) link above. Create a Real Synthetic account  You will get to trade famous indices like Volatility 75 Index, Crash, Boom and others. -Minimum deposit as low as 5 dollars.  -You can trade even in weekends,  these indices are available to trade 24 hours a day, 365 days a year. -No noise, Trade with Deriv broker ( formerly called Binary ) link above. The best Forex broker since year 2000. Create a Real Financial or Financial STP account  for currency pairs._\n\n*GET STARTED TODAY:*\n\n*LINK:* https://track.deriv.com/_hx9O43AkP_tBMfcXPt5VjGNd7ZgqdRLk/1\n\n*LINK2:* https://record.binary.com/_Mxrjb7udl0q6tyDIijdDK2Nd7ZgqdRLk/1/\n\n*CONTACT:* https://wa.me/+263775482759 or https://wa.me/263784675236_*for help*_`
  let buttons = [
  {buttonId: `alive`, buttonText: {displayText: 'BACK'}, type: 1}
  ]
  let buttonMessage = {
  image: bentoforex,
  jpegThumbnail: bentoforex,
  caption: teks,
  footer: `${botname}`,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title:"DONATE ME",
  body: "DRIPS OFC", 
  showAdAttribution: true,
  thumbnail: fs.readFileSync("Zimbot/drips.jpg"),
  mediaType:1,
  mediaUrl: 'https://youtu.be/KNu-gr2h7bo',
  sourceUrl: "https://youtu.be/KNu-gr2h7bog"
  }}
  }
  ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
  }
  break
 case 'chat': {
   if (!isCreator) throw global.owner
   if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
   if (args[0] === 'mute') {
  ZimBotInc.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   } else if (args[0] === 'unmute') {
  ZimBotInc.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   } else if (args[0] === 'archive') {
  ZimBotInc.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   } else if (args[0] === 'unarchive') {
  ZimBotInc.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   } else if (args[0] === 'read') {
  ZimBotInc.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   } else if (args[0] === 'unread') {
  ZimBotInc.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   } else if (args[0] === 'delete') {
  ZimBotInc.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   }
 }
 
 break
 case 'mathquiz': case 'math': {
   if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "*There are still unfinished match*"
   let { genMath, modes } = require('./src/math')
   if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nExample: ${prefix}math medium`
   let result = await genMath(text.toLowerCase())
   ZimBotInc.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} seconds`, m).then(() => {
  kuismath[m.sender.split('@')[0]] = result.jawaban
   })
   await sleep(result.waktu)
   if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Answer: " + result.jawaban)
  reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
  delete kuismath[m.sender.split('@')[0]]
   }
 }
 break
 case 'mysoulmate': {
 if (!m.isGroup) throw mess.group
 let member = participants.map(u => u.id)
 let me = m.sender
 let jodoh = member[Math.floor(Math.random() * member.length)]
 let jawab = `👫Your match is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
 let ments = [me, jodoh]
 let buttons = [
{ buttonId: '❤️', buttonText: { displayText: 'LOVE♥️' }, type: 1 }
  ]
  await ZimBotInc.sendButtonText(m.chat, buttons, jawab, ZimBotInc.user.name, m, {mentions: ments})
 }
 break
 case 'couple': {
 if (!m.isGroup) throw mess.group
 let member = participants.map(u => u.id)
 let orang = member[Math.floor(Math.random() * member.length)]
 let jodoh = member[Math.floor(Math.random() * member.length)]
 let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Ciee Whats Going On💖👀`
 let menst = [orang, jodoh]
 let buttons = [
{ buttonId: '❤️', buttonText: { displayText: 'DATING♥️' }, type: 1 }
  ]
  await ZimBotInc.sendButtonText(m.chat, buttons, jawab, ZimBotInc.user.name, m, {mentions: menst})
 }
 break
 case 'join': {
   if (!isCreator) throw global.owner
   if (!text) throw 'Enter the group link!'
   if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw '*LINK INVALID*'
   replay(mess.wait)
   let result = args[0].split('https://chat.whatsapp.com/')[1]
   await ZimBotInc.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break
 case 'leave': {
   if (!isCreator) throw global.owner
   await ZimBotInc.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break
case 'kick': {
if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ZimBotInc.groupParticipantsUpdate(m.chat, [users], 'remove')
}
break
case 'add': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw global.owner
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ZimBotInc.groupParticipantsUpdate(m.chat, [users], 'add')
}
break
case 'promote': {
if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ZimBotInc.groupParticipantsUpdate(m.chat, [users], 'promote')
}
break
case 'demote': {
if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ZimBotInc.groupParticipantsUpdate(m.chat, [users], 'demote')
}
break
case 'block': {
if (!isCreator) throw global.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ZimBotInc.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator) throw global.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ZimBotInc.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
    case 'setname': case 'setsubject': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
   if (!text) throw 'Text ?'
   await ZimBotInc.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
 }
 break
  case 'setdesc': case 'setdesk': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
   if (!text) throw 'Text ?'
   await ZimBotInc.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
 }
 break
  case 'setppbot': case 'setbotpp': {
   if (!isCreator) throw global.owner
   if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
   if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
   if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
   let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
   await ZimBotInc.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
   reply(mess.success)
   }
   break
case 'setppgroup': case 'setgrouppp': case 'setgcpp': case 'setppgrup': case 'setppgc': {
   if (!m.isGroup) throw mess.group
   if (!isAdmins) throw mess.admin
   if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
   if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
   if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
   let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
   await ZimBotInc.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
   reply(mess.success)
   }
   break
   case 'setbio':
   reply(mess.wait)
if (!q) return reply('Send orders *#setbio text*')
ZimBotInc.setStatus(`${q}`)
reply(mess.success)
break

case 'grupinfo': case 'groupinfo':
try{
 var pic = await ZimBotInc.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*𝗚𝗥𝗢𝗨𝗣 𝗜𝗡𝗙𝗢*\n\n*𝗡𝗔𝗠𝗘 :* ${groupName}\n*𝗜𝗗 𝗚𝗥𝗢𝗨𝗣:* ${m.chat}\n*𝗠𝗔𝗗𝗘 :* ${moment(`${groupMetadata.creation}` * 1000).tz('Africa/Harare').format('DD/MM/YYYY HH:mm:ss')}\n*𝗚𝗥𝗢𝗨𝗣 𝗢𝗪𝗡𝗘𝗥:* @${groupMetadata.owner.split('@')[0]}\n*𝗔𝗗𝗠𝗜𝗡𝗦 :* ${groupAdmins.length}\n*𝗠𝗘𝗠𝗕𝗘𝗥𝗦 :* ${participants.length}\n*𝗗𝗘𝗦𝗖 :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
ZimBotInc.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
 case 'tagall': case 'tag': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
let teks = ` 
 ┃*𝐌𝐄𝐒𝐒𝐀𝐆𝐄 : ${q ? q : 'blank'}*\n\n
`
 for (let mem of participants) {
   teks += `BOTTAG @${mem.id.split('@')[0]}\n`
   }
   ZimBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
   }
   break
   case 'hidetag': {
 if (!m.isGroup) throw mess.group
 if (!isAdmins) throw mess.admin
 ZimBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
 }
 break
    case 'style': case 'styletext': {
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // response when limit runs out
db.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./lib/scraper')
if (!text) throw 'Enter Query text!'
   let anu = await styletext(text)
   let teks = `Entered Text:  ${text}\n\n`
   for (let i of anu) {
  teks += `🔏 *${i.name}* : ${i.result}\n\n`
   }
   reply(teks)
    }
    break
  case 'vote': {
 if (!m.isGroup) throw mess.group
 if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
 if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Owner is handsome*`
 reply(`Voting starts!\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for no\n*${prefix}checkvote* - to check the votes\n*${prefix}deletevote* - to delete vote`)
 vote[m.chat] = [q, [], []]
 await sleep(1000)
 upvote = vote[m.chat][1]
 devote = vote[m.chat][2]
 teks_vote = `
┏━━━━━━━━━━⧁
┃ 𝗨𝗣𝗩𝗢𝗧𝗘
┃
┃𝗥𝗘𝗔𝗦𝗢𝗡: ${vote[m.chat][0]} 
┃
┃*Total:* ${vote[m.chat][1].length}
┗━━━━━━━━━━⧁
 
┏━━━━━━━━━━⧁
┃𝗗𝗘𝗩𝗢𝗧𝗘 
┃
┃ *Total:* ${vote[m.chat][2].length}
┗━━━━━━━━━━⧁

*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝗨𝗣𝗩𝗢𝗧𝗘'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝗗𝗘𝗩𝗢𝗧𝗘'}, type: 1}
]

 let buttonMessageVote = {
   text: teks_vote,
   footer: ZimBotInc.user.name,
   buttons: buttonsVote,
   headerType: 1
 }
 ZimBotInc.sendMessage(m.chat, buttonMessageVote)
    }
 break
  case 'upvote': {
 if (!m.isGroup) throw mess.group
 if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*Type ${prefix}vote* - to start voting`
 isVote = vote[m.chat][1].concat(vote[m.chat][2])
 wasVote = isVote.includes(m.sender)
 if (wasVote) throw 'You have Voted'
 vote[m.chat][1].push(m.sender)
 menvote = vote[m.chat][1].concat(vote[m.chat][2])
 teks_vote = `
┏━⧀ *VOTE* ⧁
┃*𝗥𝗘𝗔𝗦𝗢𝗡:* ${vote[m.chat][0]}
┃
┃ 𝗨𝗣𝗩𝗢𝗧𝗘 ༻
┃
┃ Total: ${vote[m.chat][1].length}
┃${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃
╰━━━━━━━━━━━━⧁

┏━━⧀𝗗𝗘𝗩𝗢𝗧𝗘⧁
┃ 
┃ Total: ${vote[m.chat][2].length}
┃${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃
╰━━━━━━━━━━━━━⧁

*${prefix}hapusvote* - to delete votes`
 let buttonsUpvote = [
 {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
 {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
 ]

 let buttonMessageUpvote = {
   text: teks_vote,
   footer: ZimBotInc.user.name,
   buttons: buttonsUpvote,
   headerType: 1,
   mentions: menvote
}
 ZimBotInc.sendMessage(m.chat, buttonMessageUpvote)
    }
break
   case 'devote': {
 if (!m.isGroup) throw mess.group
 if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
 isVote = vote[m.chat][1].concat(vote[m.chat][2])
 wasVote = isVote.includes(m.sender)
 if (wasVote) throw 'You Have Voted'
 vote[m.chat][2].push(m.sender)
 menvote = vote[m.chat][1].concat(vote[m.chat][2])
 teks_vote = `

*𝗗𝗘𝗩𝗢𝗧𝗘:* ${vote[m.chat][0]}

┏༺ 𝗨𝗣𝗩𝗢𝗧𝗘 ༻
┃
┃ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃
╰━━━━━━━━━━

┏༺ 𝗗𝗘𝗩𝗢𝗧𝗘 ༻
┃
┃ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃
┗━━━━━━━━━━━━

*${prefix}hapusvote* - to delete votes`
 let buttonsDevote = [
 {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
 {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
 ]

 let buttonMessageDevote = {
   text: teks_vote,
   footer: ZimBotInc.user.name,
   buttons: buttonsDevote,
   headerType: 1,
   mentions: menvote
 }
 ZimBotInc.sendMessage(m.chat, buttonMessageDevote)
}
 break
    
case 'checkvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `༼༺⋋ 𝗩𝗢𝗧𝗘 ⋌༻༽

*𝗥𝗘𝗔𝗦𝗢𝗡:* ${vote[m.chat][0]}

┌༺ 𝗨𝗣𝗩𝗢𝗧𝗘 ༻
 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌༺ 𝗗𝗘𝗩𝗢𝗧𝗘 ༻
 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - to delete votes


©${ZimBotInc.user.id}
`
ZimBotInc.sendTextWithMentions(m.chat, teks_vote, m)
break
case 'deletevote': case'delvote': case 'hapusvote': {
 if (!m.isGroup) throw mess.group
 if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - to start voting`
 delete vote[m.chat]
 reply('*Successfully deleted vote session in this group*')
    }
 break
  case 'group': case 'grup': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
   if (args[0] === 'close'){
  await ZimBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful closing the group`)).catch((err) => reply(jsonformat(err)))
   } else if (args[0] === 'open'){
  await ZimBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
   } else {
   let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'OPEN' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'CLOSE' }, type: 1 }
  ]
  await ZimBotInc.sendButtonText(m.chat, buttons, `Group Mode`, ZimBotInc.user.name, m)

}
 }
 break
 case 'editinfo': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
if (args[0] === 'open'){
   await ZimBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully opened edit group Info`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'close'){
   await ZimBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Close Edit Group Info`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'OPEN' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
  ]
  await ZimBotInc.sendButtonText(m.chat, buttons, `*GROUP SESSION*`, ZimBotInc.user.name, m)

 }
 }
 break
 /*
case 'chatbot':
if (isCreator) throw mess.owner
if (args[0] === 'on') {
if (isChatbot) return reply('*already activated*')
chatbot.push(botNumber)
reply('*chatbot on*')
} else if (args[0] === 'off') {
if (!isChatbot) return reply('*already deactivated*')
var ini = chatbot.indexOf(botNumber)
chatbot.splice(ini, 1)
reply('*chatbot off*')
} else  {
let buttons = [
{ buttonId: 'chatbot on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'chatbot off', buttonText: { displayText: 'OFF' }, type: 1 }
 ]
 await ZimBotInc.sendButtonText(m.chat, buttons, `*CHATBOT SESSION*`, ZimBotInc.user.name, m)
}
*/
 break
case 'chatbot': {
if (!isCreator) throw mess.owner
if (args[0] === "on") {
if (db.settings[botNumber].chatbot) return reply(`*chatbot already on okay*`)
db.settings[botNumber].chatbot = true
reply(`*chatbot on enjoy talking to me okay*`)
} else if (args[0] === "off") {
if (!db.settings[botNumber].chatbot) return reply(`*Already off okay*`)
db.settings[botNumber].chatbot = false
reply(`*It was nice to chat with you goodbye _chatbot off_*`)
} else {
 let drips = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
  ]
  await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ʟᴏᴄᴀʟ ᴏɴʟʏ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
}
  } 
break
case 'privatechat': {
if (!isCreator) throw mess.owner
if (args[0] === "on") {
if (db.settings[botNumber].privatechat) return reply(`*chatbot already on okay*`)
db.settings[botNumber].privatechat = true
reply(`*chatbot on enjoy talking to me okay*`)
} else if (args[0] === "off") {
if (!db.settings[botNumber].privatechat) return reply(`*Already off okay*`)
db.settings[botNumber].privatechat = false
reply(`*It was nice to chat with you goodbye _chatbot off_*`)
} else {
 let dripsu = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
  ]
  await ZimBotInc.sendButtonText(m.chat, dripsu, `*┃🔏ʟᴏᴄᴀʟ ᴏɴʟʏ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
}
  } 
case 'chatgpt': {
if (!isCreator) throw mess.owner
if (args[0] === "on") {
if (db.settings[botNumber].chatgpt) return reply(`*Artificial Intelligence(AI) chatgpt already on okay*`)
db.settings[botNumber].chatgpt = true
reply(`*Artificial Intelligence(AI) chatgpt on enjoy learning from me okay*`)
} else if (args[0] === "off") {
if (!db.settings[botNumber].chatgpt) return reply(`*Artificial Intelligence(AI) chatgpt off okay*`)
db.settings[botNumber].chatgpt = false
reply(`*It was nice to chat with you goodbye _Artificial Intelligence(AI) chatgpt off_*`)
} else {
 let dripsu = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
  ]
  await ZimBotInc.sendButtonText(m.chat, dripsu, `*┃🔏ᴄʜᴀᴛɢᴘᴛ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
}
}
break 
case 'welcome': {
  if (!m.isGroup) throw mess.group
  if (!isAdmins)  throw mess.admin
  if (args[0] === "on") {
  if (db.chats[m.chat].isWelcome) return reply(`*Welcome already on okay*`)
  db.chats[m.chat].isWelcome = true
  reply(`*welcome on*`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].isWelcome) return reply(`*Already off okay*`)
  db.chats[m.chat].isWelcome = false
  reply(`*welcome off*`)
  } else {
   let drips = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
    ]
    await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴡᴇʟᴄᴏᴍᴇ ᴍᴏᴅᴇ🔏┃**`, ZimBotInc.user.name, m)
  }
    }   
  break
 case 'localonly': {
  if (!m.isGroup) throw mess.group
  if (!isAdmins)  throw mess.admin
  if (args[0] === "on") {
  if (db.chats[m.chat].localonly) return reply(`*🤖ʟᴏᴄᴀʟ ᴏɴʟʏ ᴀʟʀᴇᴀᴅʏ ᴏɴ ᴏᴋᴀʏ*`)
  db.chats[m.chat].localonly = true
  reply(`*🤖ʟᴏᴄᴀʟ ᴏɴʟʏ ᴏɴ*`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].localonly) return reply(`*🧸ᴀʟʀᴇᴀᴅʏ ᴏғғ ᴏᴋᴀʏ*`)
  db.chats[m.chat].localonly = false
  reply(`*🤖ʟᴏᴄᴀʟ ᴏɴʟʏ ᴏғғ*`)
  } else {
   let drips = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
    ]
    await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ʟᴏᴄᴀʟ ᴏɴʟʏ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
  }
    }   
  break 
  case 'grouponly': {
    if (!isCreator) throw mess.owner
    if (args[0] === "on") {
    if (db.settings[botNumber].grouponly) return reply(`*Grouponly already on okay*`)
    db.settings[botNumber].grouponly = true
    reply(`*grouponly on*`)
    } else if (args[0] === "off") {
    if (!db.settings[botNumber].grouponly) return reply(`*Grouponly Already off okay*`)
    db.settings[botNumber].grouponly = false
    reply(`*Grouponly off*`)
    } else {
     let drips = [
    { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
    { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
      ]
      await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ɢʀᴏᴜᴘ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
    }
      } 
  break
  case 'autoblock': {
    if (!isCreator) throw mess.owner
    if (args[0] === "on") {
    if (db.settings[botNumber].autoblock) return reply(`*Autoblock already on okay*`)
    db.settings[botNumber].autoblock = true
    reply(`*Autoblock on*`)
    } else if (args[0] === "off") {
    if (!db.settings[botNumber].autoblock) return reply(`*Autoblock Already off okay*`)
    db.settings[botNumber].autoblock = false
    reply(`*Autoblock off*`)
    } else {
     let drips = [
    { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
    { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
      ]
      await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀᴜᴛᴏʙʟᴏᴄᴋ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
    }
      } 
  break
//-----GROUP---\\

//--CREATED BY DRIPS--\\

case 'antiwame': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
   if (args[0] === "on") {
   if (db.chats[m.chat].wame) return reply(`Already Activated`)
   db.chats[m.chat].wame = true
   reply(`Anti Wa.me Activated!`)
   } else if (args[0] === "off") {
   if (!db.chats[m.chat].wame) return reply(`Already deactivated`)
   db.chats[m.chat].wame = false
   reply(`Anti Wa.me is not activated!`)
   } else {
    let buttons = [
{ buttonId: 'antiwame on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antiwame off', buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await ZimBotInc.sendButtonText(m.chat, buttons, `Mode Anti Wa.me`, ZimBotInc.user.name, m)
   }
}
break
   case 'mute': {
   if (!m.isGroup) throw mess.group
   if (!isAdmins) throw mess.admin
   if (args[0] === "on") {
   if (db.chats[m.chat].mute) return reply(`Already activated`)
   db.chats[m.chat].mute = true
   reply(`${ZimBotInc.user.name} has been muted in this group !`)
   } else if (args[0] === "off") {
   if (!db.chats[m.chat].mute) return reply(`Already deactivated`)
   db.chats[m.chat].mute = false
   reply(`${ZimBotInc.user.name} has been unmuted in this group!`)
   } else {
    let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: 'OFF' }, type: 1 }
  ]
  await ZimBotInc.sendButtonText(m.chat, buttons, `Mute Bot`, ZimBotInc.user.name, m)
   }
}
break
case 'antilink': {
 if (!m.isGroup) throw mess.group
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
 if (args[0] === "on") {
 if (db.chats[m.chat].antilink) return reply(`*Already on umm okay*`)
 db.chats[m.chat].antilink = true
 reply(`*Antilink active*`)
 } else if (args[0] === "off") {
 if (!db.chats[m.chat].antilink) return reply(`*Already off okay*`)
 db.chats[m.chat].antilink = false
 reply(`*Antilink disabled*`)
 } else {
let drips = [
{ buttonId: 'antilink on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪʟɪɴᴋ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
}
}
break
case 'antiytchannel': case 'antilinkyoutubechannel': case 'antiytchannel': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.chats[m.chat].antiytchannel) return reply(`*Already on umm okay*`)
db.chats[m.chat].antiytchannel = true
reply(`*Antilink active*`)
} else if (args[0] === "off") {
if (!db.chats[m.chat].antiytchannel) return reply(`*Already off okay*`)
db.chats[m.chat].antiytchannel = false
reply(`*Antilink disabled*`)
} else {
let drips = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
]
await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪʏᴛ ʟɪɴᴋ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
}
}
break
 case 'antilinkinstagram': case 'adripsantiig': case 'antiinsta': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.chats[m.chat].antiinstagram) return reply(`*Already on umm okay*`)
db.chats[m.chat].antiinstagram= true
reply(`*Antilink active*`)
} else if (args[0] === "off") {
if (!db.chats[m.chat].antiinstagram) return reply(`*Already off okay*`)
db.chats[m.chat].antiinstagram = false
reply(`*Antilink disabled*`)
} else {
 let drips = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
 ]
 await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪ ɪɴsᴛᴀ ʟɪɴᴋ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
}
}
break
case 'antilinkfacebook': case 'antifb': {
 if (!m.isGroup) throw mess.group
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
 if (args[0] === "on") {
 if (db.chats[m.chat].antifb) return reply(`*Already on umm okay*`)
 db.chats[m.chat].antifb = true
 reply(`*Antilink active*`)
 } else if (args[0] === "off") {
 if (!db.chats[m.chat].antifb) return reply(`*Already off okay*`)
 db.chats[m.chat].antifb = false
 reply(`*Antilink disabled*`)
 } else {
  let drips = [
    { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
    { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
]
await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪ ғʙ ʟɪɴᴋs ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
 }
  }
break
case 'antitelegram': case 'adripsantitele': {    
 if (!m.isGroup) throw mess.group
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
 if (args[0] === "on") {
 if (db.chats[m.chat].antitelegram) return reply(`*Already on umm okay*`)
 db.chats[m.chat].antitelegram = true
 reply(`*Antilink active*`)
 } else if (args[0] === "off") {
 if (!db.chats[m.chat].antitelegram) return reply(`*Already off okay*`)
 db.chats[m.chat].antitelegram = false
 reply(`*Antilink disabled*`)
 } else {
let drips = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
   ]
   await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪ ᴛᴇʟᴇ ʟɪɴᴋs ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
 }
}
break
case 'antivn': case 'antiaudio': case 'antivoicenote': case 'antivoice': {
  if (!m.isGroup) throw mess.group
  if (!isBotAdmins) throw mess.botAdmin
  if (!isAdmins) throw mess.admin
  if (args[0] === "on") {
  if (db.chats[m.chat].antivn) return reply(`*Already on umm okay*`)
  db.chats[m.chat].antivn = true
  reply(`*Antivn active*`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].antivn) return reply(`*Already off okay*`)
  db.chats[m.chat].antivn = false
  reply(`*Antivn disabled*`)
  } else {
   let drips = [
     { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
     { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
 ]
 await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪ ᴠɴ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
  }
   }
 break
 case 'antisticker': case 'nostickers': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.chats[m.chat].antisticker) return reply(`*Already on umm okay*`)
db.chats[m.chat].antisticker = true
reply(`*Antisticker active*`)
} else if (args[0] === "off") {
if (!db.chats[m.chat].antisticker) return reply(`*Already off okay*`)
db.chats[m.chat].antisticker = false
reply(`*Antisticker disabled*`)
} else {
let drips = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
]
await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪ sᴛɪᴄᴋᴇʀ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
}
}
break
case 'antiphoto': case 'antipic': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.chats[m.chat].antiphoto) return reply(`*Already on umm okay*`)
db.chats[m.chat].antiphoto = true
reply(`*Antiphoto active*`)
} else if (args[0] === "off") {
if (!db.chats[m.chat].antiphoto) return reply(`*Already off okay*`)
db.chats[m.chat].antiphoto = false
reply(`*Antiphoto disabled*`)
} else {
let drips = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
]
await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ʟᴏᴄᴀʟ ᴏɴʟʏ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
}
}
break
case 'antivideo': case 'antivid': {
  if (!m.isGroup) throw mess.group
  if (!isBotAdmins) throw mess.botAdmin
  if (!isAdmins) throw mess.admin
  if (args[0] === "on") {
  if (db.chats[m.chat].antivideo) return reply(`*Already on umm okay*`)
  db.chats[m.chat].antivideo = true
  reply(`*Antivideo active*`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].antivideo) return reply(`*Already off okay*`)
  db.chats[m.chat].antivideo = false
  reply(`*Antivideo disabled*`)
  } else {
   let drips = [
     { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
     { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
 ]
 await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪᴠɪᴅᴇᴏ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
  }
   }
 break
case 'antiviewonce': case 'antionce':

if (!m.key.fromMe && !isCreator)  throw mess.owner
if (args[0] === "on") {
if (global.db.chats[m.chat].antionce) return reply(`*Already activated*`)
global.db.chats[m.chat].antionce = true
reply(`${command} *Successfully Activated*`)
} else if (args[0] === "off") {
  if (!global.db.chats[m.chat].antionce) return reply(`*Already deactivated*`)
global.db.chats[m.chat].antionce = false
reply(`${command} *Successfully Deactivated*`)
   } else {
let drips = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
]
await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪᴠɪᴇᴡ ᴏɴᴄᴇ ᴍᴏᴅᴇ🔏┃*`, `${global.botname}`, m)
}
break
case 'antitiktok': case 'aantitik': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.chats[m.chat].antitiktok) return reply(`*Already on umm okay*`)
db.chats[m.chat].antitiktok = true
reply(`*Antilink active*`)
} else if (args[0] === "off") {
if (!db.chats[m.chat].antitiktok) return reply(`*Already off okay*`)
db.chats[m.chat].antitiktok = false
reply(`*Antilink disabled*`)
} else {
let drips = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
]
await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪᴛɪᴋᴛᴏᴋ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
}
}
break
case 'antilinkall': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
 if (db.chats[m.chat].antilinkall) return reply(`*Already on umm okay*`)
 db.chats[m.chat].antilinkall = true
 reply(`*Antilink active*`)
 } else if (args[0] === "off") {
 if (!db.chats[m.chat].antilinkall) return reply(`*Already off okay*`)
 db.chats[m.chat].antilinkall = false
 reply(`*Antilink disabled*`)
 } else {
  let drips = [
    { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
    { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
]
await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪʟᴏɴᴋ ᴀʟʟ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
 }
 }
break
case 'adripsantitwt': case 'antitwitter': case 'antilinktwit': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.chats[m.chat].antitwitter) return reply(`*Already on umm okay*`)
db.chats[m.chat].antitwitter = true
reply(`*Antilink active*`)
} else if (args[0] === "off") {
if (!db.chats[m.chat].antitwitter) return reply(`*Already off okay*`)
db.chats[m.chat].antitwitter = false
reply(`*Antilink disabled*`)
} else {
 let dripsi = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
 ]
 await ZimBotInc.sendButtonText(m.chat, dripsi, `*┃🔏ᴀɴᴛɪ ᴛᴡɪᴛᴛᴇʀ ʟɪɴᴋ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
 }
}
break
case 'antibadword': {		
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args[0] === "on") {
if (antiToxic) return reply('*Already activated*')
dripsanti.push(from)
reply('*Success turning on anti rude in this group*')
var group = await ZimBotInc.groupMetadata(from)
var members = group['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ZimBotInc.sendMessage(from, {text: `*▊▊▊ANTILINK RUDE▊▊▊*\n\n*no hate speech anymore, watch space im going to kick dumps*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return reply('*Already deactivated*')
let off = dripsanti.indexOf(from)
dripsanti.splice(off, 1)
reply('*Success in turning off antirude in this group happy now*')
} else {
 let buttons = [
 { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
 { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
 ]
 await ZimBotInc.sendButtonText(m.chat, buttons, `*▊▊▊ANTI BADWORDS▊▊▊*\n\n.`, `${global.botname}`, m)
 }
 }
 
break
 case 'linkgroup': case 'grouplink': case 'gclink': case 'linkgc':{ 
   if (!m.isGroup) throw mess.group
   let response = await ZimBotInc.groupInviteCode(m.chat)
   ZimBotInc.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink of: ${groupMetadata.subject} Group`,m ,{ detectLink: true })
}
   break
 case 'nsfw': {	 			
 if (!m.isGroup) return reply(mess.group)
 if (!isBotAdmins) return reply(mess.botAdmin)
 if (!isAdmins && !isCreator) return reply(mess.admin)
 if (args[0] === "on") {
 if (isAntinsfw) return reply('*Already activated*')
 dripsno.push(from)
 reply('*hahaha turning on horny mood in this group happy now*')
 var group = await ZimBotInc.groupMetadata(from)
 var members = group['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 ZimBotInc.sendMessage(from, {text: `*horny mood activated everyone be ready for masturbation*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!isAntinsfw) return reply('*Already deactivated*')
 let off = dripsno.indexOf(from)
 dripsno.splice(off, 1)
 reply('*Success turning off horny mood in this group*')
 } else {
let button = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
]
await ZimBotInc.sendButtonText(m.chat, button, `*▊▊▊HORNY MOOD▊▊▊*\n\n*TURN IT ON SO PEOPLE THEY WILL START TO MASTURBATE LOL*`, `${global.botname}`, m)
}
}
break
 case 'ephemeral': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
   if (!text) throw 'Enter the enable/disable value, For Example ${prefix}ephemeral enable'
   if (args[0] === 'enable') {
  await ZimBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   } else if (args[0] === 'disable') {
  await ZimBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   }
 }
 break
 case 'translate': case 'terjemahan': case 'tr': {
   tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
   Infoo = tes.info
   Detek = tes.translate
   reply(`🌐Translate : ${Detek}\n`)
   }
   break
  /* case 'translate': case 'terjemahan': case 'tr': {
    tes = await fetchJson (`https://soccer.sportmonks.com/api/v2.0/livescores&api_token=y5TQaQFczQuU3awKmWEi1eD1Sy3U6WuTkNZAw2fdQEtHDRwgJpkCZVUf9DYb`)
    Infoo = tes.info
    Detek = tes.translate
    reply(`🌐Translate : ${Detek}\n`)
    }
*/
break

 break
 case 'git': case 'gitclone':
reply(mess.wait)
 let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
 if(!args[0]) throw 'link github  EXAMPLE: https://youtube.com/@zim-bot/zim-bot-md'
if (!regex1.test(args[0])) throw 'link!'
   let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filenameq=ZidniGanz.zip'
    reply(`*Please wait, sending repository..*`)
    ZimBotInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' , quoted: m,contextInfo: { externalAdReply:{
      title:"ᴢɪᴍ ʙᴏᴛ ᴠ5",
      body:"SUB DRIPS OFC",
      showAdAttribution: true,
      mediaType:2,
      thumbnail: fs.readFileSync('./drips.jpg'),
      mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
      sourceUrl: `https://youtu.be/KNu-gr2h7bo`,
      }}
      })
 
 break
 case 'tagme': {
   ZimBotInc.sendMessage(m.chat, {text:`@${m.sender.split("@")[0]}`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
   }
 break
 case 'truth':
				const trut =['Have you loved anyone? How long?','If you can or if you want, outside school/college Who will you make friends? (May be different / high school)','What is your biggest fear?','Have you liked a people and felt that person likes you too?','Who is your ex-girlfriend?','What makes you happy when you are sad?','Ever loved someone? what does it feels like?','Have you ever been in an affair?','The most feared thing','Who is the most influential person to your life?','What is the proud thing you did this year?',' Who can make you smile?','Who is the person you truly love? What is the reason? ','Mention the incident that makes you hurt that you still remember','What are the achievements that have been crushed on this year?','What is your worst habit when at school?']
				const ttrth = trut[Math.floor(Math.random() * trut.length)]
				truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
			ZimBotInc.sendMessage(m.chat, {image: truteh, caption: '*Truth*\n\n'+ ttrth, quoted: m,contextInfo: { externalAdReply:{
        title:"ᴢɪᴍ ʙᴏᴛ ᴠ5",
        body:"SUB DRIPS OFC",
        showAdAttribution: true,
        mediaType:2,
        thumbnail: fs.readFileSync(`./drips.jpg`) ,
        mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
        sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: m})
break
case 'ghsearch': 
       case 'githubsearch': 
       case 'searchgithub':
             if (!q) return reply('*What are you looking for?*')
             let pomi = await fetch('https://api.github.com/search/repositories?q='+q)
            let dhumi = await pomi.json()
             if (pomi.status !== 200) throw dhumi
             str = dhumi.items.map((repo, index) => {
             return `
${1 + index}. *${repo.full_name}*${repo.fork ? '*FORKS*' : ''}
${repo.html_url}
*CREATED ON:* ${formatDate(repo.created_at)}
*LAST UPDATED ON:* ${formatDate(repo.updated_at)}
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐ ${repo.stargazers_count}
${repo.open_issues} *ISSUES:*${repo.description ? `
*DESCRIPTION:*\n${repo.description}` : ''}
*CLONE:* $ git clone ${repo.clone_url}
`.trim()
}).join('\n\n')
            reply(str)
break
 case 'delete': case 'del': {
   if (!m.quoted) throw false
   let { chat, fromMe, id, isBaileys } = m.quoted
   if (!isBaileys) throw '*The message was not sent by a bot💥*'
   ZimBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
 }
 break
 case 'bcgc': case 'bcgroup': {
   if (!isCreator) throw global.owner
   if (!text) throw `Where is the text?\n\nExample : ${prefix + command} hello guys, am back`
   let getGroups = await ZimBotInc.groupFetchAllParticipating()
   let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
   let anu = groups.map(v => v.id)
   reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
   for (let i of anu) {
  await sleep(1500)
  let btn = [{
 urlButton: {
  displayText: 'SUBSCRIBE',
  url: 'https://youtube.ccom/c/DRIPSOFC'
 }
  }, {
 callButton: {
  displayText: 'OWNER',
  phoneNumber: '+27 634-090-0203'
 }
  }, {
 quickReplyButton: {
  displayText: 'PING',
  id: 'ping'
 }
  }, {
 quickReplyButton: {
  displayText: 'OWNER',
  id: 'owner'
 }  
  }, {
 quickReplyButton: {
  displayText: 'SCRIPT',
  id: 'sc'
 }
  }]
 fatihgans = fs.readFileSync('./Zimbot/drips.jpg')
 let txt = `「 ZimBot Broadcast 」\n\n${text}`
 ZimBotInc.send5ButImg(i, txt, ZimBotInc.user.name, fatihgans, btn)
  }
   reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
 }
 break
 case 'bc': case 'broadcast': case 'bcall': {
   if (!isCreator) throw global.owner
   if (!text) throw `Where is the text?\n\nExample : ${prefix + command} Zimbot here`
   let anu = await store.chats.all().map(v => v.id)
   reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} second`)
for (let yoi of anu) {
    await sleep(1500)
    let btn = [{
 urlButton: {
  displayText: 'GITHUB',
  url: 'https://youtube.com/@zim-bot/zimbot-v2'
 }
  }, {
 quickReplyButton: {
  displayText: 'OWNER',
  id: 'owner'
 }
  }]
 fatihgans = fs.readFileSync('./Zimbot/drips.jpg')
 let txt = `「 ZIM BOT BROADCAST 」\n\n${text}`
 ZimBotInc.send5ButImg(yoi, txt, `Broadcast By ${global.pengguna}`, fatihgans, btn)
}
reply('*Broadcast Success*')
 }
 break
 case 'chatinfo': {
   if (!m.quoted) reply('*Reply to mesaage👀*')
   let msg = await m.getQuotedObj()
   if (!m.quoted.isBaileys) throw '*The message was not sent by a bot!💥*'
   let teks = ''
   for (let i of msg.userReceipt) {
  let read = i.readTimestamp
  let unread = i.receiptTimestamp
  let waktu = read ? read : unread
  teks += `🔏 @${i.userJid.split('@')[0]}\n`
  teks += `🔏 *𝗧𝗜𝗠𝗘 :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} 🔏 *𝗦𝗧𝗔𝗧𝗨𝗦 :* ${read ? 'Read' : 'Unread'}\n\n`
   }
   ZimBotInc.sendTextWithMentions(m.chat, teks, m)
 }
 break
 case 'q': case 'quoted': {
if (!m.quoted) return reply('Reply Message!!')
let wokwol = await ZimBotInc.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return reply('*The message you replied to does not contain a reply💫*')
await wokwol.quoted.copyNForward(m.chat, true)
 }
    break
 case 'listpc': {
  let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
  let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
  for (let i of anu) {
      let nama = store.messages[i].array[0].pushName
      teks += `⬡ *NAME :* ${nama}\n⬡ *USER :* @${i.split('@')[0]}\n⬡ *CHAT :* https://wa.me/${i.split('@')[0]}\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
  }
  ZimBotInc.sendTextWithMentions(m.chat, teks, m)
}
break
break
   case 'listgc': {
    let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
    let teks = `🔏𝗚𝗥𝗢𝗨𝗣 𝗖𝗛𝗔𝗧 𝗟𝗜𝗦𝗧\n\n𝗧𝗢𝗧𝗔𝗟 𝗚𝗥𝗢𝗨𝗣 : ${anu.length} Group\n\n`
    for (let i of anu) {
let metadata = await ZimBotInc.groupMetadata(i)
teks += `🔏𝗡𝗔𝗠𝗘 : ${metadata.subject}\n🔏𝗢𝗪𝗡𝗘𝗥 : @${metadata.owner.split('@')[0]}\n🔏𝗜𝗗 : ${metadata.id}\n🔏 𝗠𝗔𝗗𝗘 : ${moment(metadata.creation * 1000).tz('Africa/Harare').format('DD/MM/YYYY HH:mm:ss')}\n🔏 𝗠𝗘𝗠𝗕𝗘𝗥 : ${metadata.participants.length}\n\n────────────────────────\n\n`
    }
    ZimBotInc.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listonline': case 'onlinelist': case 'liston': {
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
  let online = [...Object.keys(store.presences[id]), botNumber]
  ZimBotInc.sendText(m.chat, '*LIST ONLINE*:\n\n' + online.map(v => '> @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
 case 'sticker': case 's': case 'stickergif': case 'sgif': {
 if (!quoted) throw `Reply Video/Image With Caption ${prefix + command}`
 replay(mess.wait)
  if (/image/.test(mime)) {
   let media = await quoted.download()
   let encmedia = await ZimBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
   await fs.unlinkSync(encmedia)
 } else if (/video/.test(mime)) {
   if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
   let media = await quoted.download()
   let encmedia = await ZimBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
   await fs.unlinkSync(encmedia)
 } else {
   throw `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`
   }
 }
 break
 case 'ebinary': {
 if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
 let { eBinary } = require('./lib/binary')
 let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
 let eb = await eBinary(teks)
 reply(eb)
}
break
 case 'dbinary': {
 if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
 let { dBinary } = require('./lib/binary')
 let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
 let db = await dBinary(teks)
 reply(db)
}
break
 case 'emojimix': {
if (!text) throw `Example : ${prefix + command} 😅+🤔`
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
    let encmedia = await ZimBotInc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
    await fs.unlinkSync(encmedia)
}
    }
    break
 case 'toimage': case 'toimg': {
   if (!quoted) throw '*Reply Image*'
   if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
   replay(mess.wait)
   let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
   let ran = await getRandom('.png')
   exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) throw err
  let buffer = fs.readFileSync(ran)
  ZimBotInc.sendMessage(m.chat, { image: buffer }, { quoted: m })
  fs.unlinkSync(ran)
   })
 }
 break
case 'tomp4': case 'tovideo': {
   if (!quoted) throw 'Reply Image'
   if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
   replay(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
   let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
   let webpToMp4 = await webp2mp4File(media)
   await ZimBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '*Convert webp to video*' } }, { quoted: m })
   await fs.unlinkSync(media)
 }
 break
 case 'tts':
  const gtts = require('./Zimbot/gtts')(args[0])
  if (args.length < 1) return ZimBotInc.sendMessage(from, `ᴇxᴀᴍᴘʟᴇ: ${prefix}ᴇɴ ʜᴇʟʟᴏ`, text, {quoted: m})
  if (args.length < 2) return ZimBotInc.sendMessage(from, `ᴇxᴀᴍᴘʟᴇ: ${prefix}ᴇɴ ʜᴇʟʟᴏ`, text, {quoted: m})
 var dtt = body.slice(20)
  reply(mess.wait)
  var ranm = getRandom('.mp3')
		var	rano = getRandom('.ogg')
				dtt.length > 300
         gtts.save(ranm, dtt, function() {
          exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
          fs.unlinkSync(ranm)
          buffer = fs.readFileSync(rano)
          if (err) return reply('error')
          Ruri.sendMessage(from,  audio, {quoted: freply, ptt:true})
          ZimBotInc.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: true, quoted: mudratunha})
          fs.unlinkSync(rano)
          })
          })
  break
 case 'toaud': case 'toaudio': {
 if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want Audio With Caption ${prefix + command}`
 if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
 replay(mess.wait)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 ZimBotInc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
 }
 break
 case 'tomp3': {
 if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
 if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
 if (!quoted) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
 replay(mess.wait)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 ZimBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${ZimBotInc.user.name}.mp3`}, { quoted : m })
 }
 break
 case 'tovn': case 'toptt': {
 if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
 if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
 replay(mess.wait)
 let media = await quoted.download()
 let { toPTT } = require('./lib/converter')
 let audio = await toPTT(media, 'mp4')
 ZimBotInc.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
 case 'togif': {
   if (!quoted) throw 'Reply Image'
   if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
   replay(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
   let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
   let webpToMp4 = await webp2mp4File(media)
   await ZimBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
   await fs.unlinkSync(media)
 }
 break
case 'tourl': {
   replay(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
   let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
   if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  reply(util.format(anu))
   } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  reply(util.format(anu))
   }
   await fs.unlinkSync(media)
 }
 break
 case 'imagenobg': case 'removebg': case 'remove-bg': {
    if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
    let remobg = require('remove.bg')
    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
    hmm = await './src/remobg-'+getRandom('')
    localFile = await ZimBotInc.downloadAndSaveMediaMessage(quoted, hmm)
    outputFile = await './src/hremo-'+getRandom('.png')
    replay(mess.wait)
    remobg.removeBackgroundFromImageFile({
 path: localFile,
 apiKey: apinobg,
 size: "regular",
 type: "auto",
 scale: "100%",
 outputFile 
    }).then(async result => {
    ZimBotInc.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
    await fs.unlinkSync(localFile)
    await fs.unlinkSync(outputFile)
    })
    }
    break
 
    case 'yts1': case 'ytsearch': {
   if (!text) throw `Example : ${prefix + command} story wa anime`
   let yts = require("yt-search")
   let search = await yts(text)
   let teks = 'SUBSCRIBE Search\n\n Result From '+text+'\n\n'
   let no = 1
   for (let i of search.all) {
  teks += `🔏No: ${no++}\n🧸𝗧𝗬𝗣𝗘 : ${i.type}\n🔳𝗩𝗜𝗗𝗘𝗢 𝗜𝗗: ${i.videoId}\n🔴𝗧𝗜𝗧𝗟𝗘 : ${i.title}\n🔏𝗩𝗜𝗘𝗪𝗦 : ${i.views}\n🎬𝗗𝗨𝗥𝗔𝗧𝗜𝗢𝗡 : ${i.timestamp}\n📡𝗨𝗣𝗟𝗢𝗔𝗗 𝗔𝗧 : ${i.ago}\n🎰𝗔𝗨𝗧𝗛𝗢𝗥 : ${i.author.name}\n📌𝗨𝗥𝗟 : ${i.url}\n\n─────────────────\n\n`
   }
   ZimBotInc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
 }
 break

case 'google': {
    reply(mess.wait)
    const { googleIt } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let text = args.join` `
    if (!text) return reply(m.chat, 'No text to search', m)
    let url = 'https://google.com/search?q=' + encodeURIComponent(text)
    let search = await googleIt(text)
    let msg = search.articles.map(({
        // header,
        title,
        url,
        description
    }) => {
        return `*${title}*\n_${url}_\n_${description}_`
    }).join('\n\n')
    try {
        let ss = await (await fetch(('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
        if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
        await ZimBotInc.sendFile(m.chat, ss, 'screenshot.png', url + '\n\n' + msg, m)
    } catch (e) {
        reply(msg)
    }
}
   break
case 'gimage': case 'googleimage': {
reply(mess.wait)
if (!text) throw `Example : ${prefix + command} ml nana`
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
  {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
   ]
   let buttonMessage = {
  image: { url: images },
  caption: `❰ 𝗚𝗢𝗢𝗚𝗟𝗘 𝗜𝗠𝗔𝗚𝗘 ❱
*𝗤𝗨𝗘𝗥𝗬* : ${text}
*𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟* : ${images}`,
  footer: ZimBotInc.user.name,
  buttons: buttons,
  headerType: 4
   }
   ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
    
 case 'lyrics':
reply(mess.wait)
if (args.length < 1) return reply('What is the name of the song?')
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
 break
 
 case 'apk':
  reply(mess.wait)
if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
query = args.join(' ')
get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
kontol = get_result.result
ini_txt = '❰ *APPLICATIONS* ❱\n\n'
for (var x of kontol) {
  ini_txt += `Name : ${x.apps_name}\n`
  ini_txt += `Link :${x.apps_linkdl}\n`
  ini_txt += `Tag : ${x.apps_tag}\n`
  ini_txt += `\n`
}
reply(ini_txt)
break
case 'apkdone':
  reply(mess.wait)
if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
query = args.join(' ')
get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkdone?apps=${query}&apikey=cabd55849002ea851ce8`, { method: 'get' })
kontol = get_result.result
ini_txt = '❰ *APPLICATIONS* ❱\n\n'
for (var x of kontol) {
  ini_txt += `Name : ${x.apps_name}\n`
  ini_txt += `Link :${x.apps_linkdl}\n`
  ini_txt += `Version : ${x.apps_version}\n`
  ini_txt += `Rate : ${x.apps_rate}\n`
  ini_txt += `Tag : ${x.apps_tag}\n\n`
  ini_txt += `\n`
}
reply(ini_txt)
break
case 'ytshorts': case 'shorts': {
  
if (!text) return m.reply(`*Use ${prefix + command} enter pin link*`)
if (!isUrl(args[0]) && !args[0].includes('youtube')) throw '*The link you provided is not valid*'                
xa.Youtube(`${text}`).then(async (data) => {
if (data.medias[0].formattedSize.split('MB')[0] >= 100) return reply('*File Over Limit* '+util.format(data)) 
cap = `
*▊▊▊YOUTUBE SHORTS▊▊▊*

*⬤▶━━━━━━━━━2:30*\n\n\n\n*⬤TITLE:* ${data.title}\n*⬤QUALITY:* ${data.medias[0].quality}\n*⬤SIZE:* ${data.medias[0].formattedSize}\n*⬤DURATION* ${data.duration}\n*⬤ID:* ${data.medias[0].cached}\n*⬤LINK:* ${data.url}\n\n*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`
buf = await getBuffer(data.thumbnail)
ZimBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
ZimBotInc.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*⬤TITLE:* ${data.title}\n*⬤QUALITY:* ${data.medias[0].quality}\n*⬤SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })  
            }).catch((err) => {
                reply(`*Failed to download and send media*`)
            })
        }
        break
 case 'pinterest': case 'pndl': case 'pin': {
replay(mess.wait)
 if (!args.join(" ")) return reply("What picture are you looking for?")
 try {
 hx.pinterest(args.join(" ")).then(async(res) => {
 dripdako = res[Math.floor(Math.random() * res.length)]
 let buttons = [
 {buttonId: `pinterest ${args.join(" ")}`, buttonText: {displayText: 'NEXT'}, type: 1}
 ]
 let buttonMessage = {
 image: { url: dripdako },
 caption:  `
 *TITLE:*`  + args.join(" ") 
 
 `*PHOTO URL:* `+dripdako,

 footer: `${global.botname}`,
 buttons: buttons,
 headerType: 4,
 contextInfo:{externalAdReply:{
 title:`ᴢɪᴍ ʙᴏᴛ ᴠ5`,
 body:`DRIPS OFC`,
 showAdAttribution: true,
 thumbnail: global.thumb,
 mediaType:2,
 mediaUrl: `https://youtu.be/KNu-gr2h7bo`,
 sourceUrl: `https://youtu.be/KNu-gr2h7bo`
 }}
 }
 ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
 }).catch(_ => _)
 } catch {
 reply("Error")
 }
 }
 
 break
    case 'couplepp': case 'ppcouple': {
   replay(mess.wait)
   let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
   let random = anu[Math.floor(Math.random() * anu.length)]
   ZimBotInc.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
   ZimBotInc.sendMessage(m.chat, { image: { url: random.female }, caption: `*Couple Female*` }, { quoted: m })
 }
 break

//------NSFW FEATURES-----\\

case 'masturbation': 
case 'jahy': 
case 'hentai': 
case 'glasses': 
case 'gangbang': 
case 'foot': 
case 'femdom': 
case 'cum': 
case 'ero': 
case 'cuckold': 
case 'blowjob': 
case 'bdsm': 
case 'ahegao': 
case 'ass': 
case 'orgy': 
case 'panties': 
case 'pussy': 
case 'thighs': 
case 'yuri': 
case 'tentacles': 
if (!m.isGroup) return replay(mess.group)
if (!isAntinsfw) return reply('*NSFW turned on ready to masturbate*')
try{
reply(mess.wait)
hwindi = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
stallone = await getBuffer(hwindi.result)
ZimBotInc.sendMessage(from, {image:stallone},{quoted:m})
} catch (e) {error("Error")}
break
//---END HERE-------\\

//CREATED BY DRIPS

//------ANIME FESTURES------\\
case 'cry': 
case 'kill':
case 'hug':
case 'pat':
case 'lick':
case 'kiss':
case 'bite':
case 'yeet':
case 'neko':
case 'bully':
case 'bonk':
case 'wink':
case 'poke':
case 'nom':
case 'slap':
case 'smile':
case 'wave':
case 'awoo':
case 'blush':
case 'smug':
case 'glomp':
case 'happy':
case 'dance':
case 'cringe':
case 'cuddle':
case 'highfive':
case 'shinobu':
case 'megumin':
case 'handhold':
reply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
ZimBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break  
case 'animeslap':
reply(mess.wait)
 stantontunha = await axios.get(`https://nekos.life/api/v2/img/slap`)
var garo = [
{buttonId: `.${command}`, buttonText: {displayText: `NEXT`}, type: 1},
]
let tunhamasawi = {
image: {url:stantontunha.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: garo,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat, tunhamasawi,{ quoted:m }).catch(err => {
return('Error!')
})

break
case 'animepat':
reply(mess.wait)
 lioneltunha = await axios.get(`https://nekos.life/api/v2/img/pat`)
var tunhabee = [
{buttonId: `.${command}`, buttonText: {displayText: `NEXT`}, type: 1},
]
let masawitunha = {
image: {url:lioneltunha.data.url},
caption:  `DATA OBTAINED!`,
footer: `${global.botname}`,
buttons: tunhabee,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat, masawitunha,{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'animeneko':
reply(mess.wait)
princetunha = await axios.get(`https://nekos.life/api/v2/img/neko`)
var tunhaprince = [
{buttonId: `.${command}`, buttonText: {displayText: `Next `}, type: 1},
]
let tanaka = {
image: {url:princetunha.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: tunhaprince,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat, tanaka,{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'animehug':
reply(mess.wait)
tunha = await axios.get(`https://nekos.life/api/v2/img/hug`)
var madeline = [
{buttonId: `.${command}`, buttonText: {displayText: `Next `}, type: 1},
]
let magwetta = {
image: {url:tunha.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: madeline,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat, magwetta,{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'animekiss':
reply(mess.wait)
tunha = await axios.get(`https://nekos.life/api/v2/img/kiss`)
var blessedtuna2 = [
{buttonId: `.${command}`, buttonText: {displayText: `Next `}, type: 1},
]
let sekedema = {
image: {url:tunha.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: blessedtuna2,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat, sekedema,{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'animewlp':
reply(mess.wait)
mhofu = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
var wati = [
{buttonId: `.${command}`, buttonText: {displayText: `Next `}, type: 1},
]
let sekeMutema = {
image: {url:mhofu.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: wati,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat, sekeMutema,{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'animespank':
reply(mess.wait)
mhofu = await axios.get(`https://nekos.life/api/v2/img/spank`)
var wati = [
{buttonId: `.${command}`, buttonText: {displayText: `Next `}, type: 1},
]
let edzai = {
image: {url:mhofu.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: wati,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat, edzai,{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'shinobu2': 
reply(mess.wait)
dhoti = await axios.get('https://waifu.pics/api/sfw/shinobu')
var wati = [
{buttonId: `.shinobu`, buttonText: {displayText: `Next `}, type: 1},
]
let haha = {
image: {url:dhoti.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: wati,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat,haha, { quoted:m }).catch(err => {
return('Error!')
})  
break
case 'megumin2':
reply(mess.wait)
saka = await axios.get('https://waifu.pics/api/sfw/megumin')
var wati = [
{buttonId: `.megumin`, buttonText: {displayText: `Next `}, type: 1},
]
let kuku = {
image: {url:saka.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: wati,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat,kuku, { quoted:m }).catch(err => {
return('Error!')
})  
break
case 'update':
  const heroku = new Heroku({ token: Config.HEROKU_API_KEY })
  await git.fetch();
  var commits = await git.log(['main' + '..origin/' + 'main']);
  if (commits.total === 0) {
    reply("*No pending updates!*")
  } else {
    var changelog = "_Pending updates:_\n\n";
    commits['all'].map(
        (commit) => {
            reply(`• *${commit.message}* _[${commit.date.substring(0, 10)}]_ \n`)
          }
          );
          mss = changelog;
          var img = ""
       var buttons = [{
        urlButton: {
            displayText: 'DRIPS',
            url: 'tes'
        }
    },// By drips 
    {
        quickReplyButton: {
            displayText: 'lol',
            id: `${prefix}upd`
        }
    }];
    }
    await ZimBotInc.sendMessage(m.chat, {text: ` *type updatenow to update the bot*`});
    

break
case 'updatenow':
  
    await git.fetch();
    var commits = await git.log(['main' + '..origin/' + 'main']);
    if (commits.total === 0) {
      return await ZimBotInc.sendMessage(m.chat, { text:"_Bot up to date_"})
    } else {
      await ZimBotInc.sendMessage(m.chat, {text: "_Build started ⏫_"})
      try {
        var app = await heroku.get('/apps/' + Config.HEROKU_APP_NAME)
        var git_url = await heroku.get(app.git_url)
    } catch {
        await ZimBotInc.sendMessage(m.chat, { text:"*Heroku app name/api key wrong*"})

        await new Promise(r => setTimeout(r, 1000));
      }
      git.fetch('upstream', 'main');
      git.reset('hard', ['FETCH_HEAD']);//lols

    git_url =  git_url.replace("https://", "https://api:" + Config.HEROKU_API_KEY + "@")//drips
      try {
        await git.addRemote('heroku', git_url);
    } catch {console.log('Deploy error catched. Retrying...')}
    try { await git.push('heroku', 'main'); } catch(e){ 
    if (e.message.includes("concurrent")) return reply("Your account has reached in-parallel build limit! Please wait for the other app to finish its deploy ❗"); 
    }
    await ZimBotInc.sendMessage(m.chat, {text:"_Finished build! Restarting.._"})
 //

  }

break
case 'awoo2':
reply(mess.wait)
bhingo = await axios.get(`https://waifu.pics/api/sfw/awoo`)
var pulo = [
{buttonId: `.${command}`, buttonText: {displayText: `Next `}, type: 1},
]
let tidza = {
image: {url:bhingo.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: pulo,
headerType: 2
}  
await ZimBotInc.sendMessage(m.chat, tidza, { quoted:m }).catch(err => {
return('Error!')
})
break
case 'animewall2': case 'animewallpaper2':
reply(mess.wait)
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return reply('What wallpaper do you want?')
const wall = new AnimeWallpaper();
const pages = [1,2,3,4];
const random=pages[Math.floor(Math.random() * pages.length)]
const wallpaper = await wall
.getAnimeWall4({ title: q, type: "sfw", page: pages })
.catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var francisca = [
{buttonId: `.${command} ${q}`, buttonText: {displayText: `Next `}, type: 1},
]
let tunhastallone = {
image: {url:wallpaper[i].image},
caption: `*QUERY :* ${q}`,
footer: `${global.botname}`,
buttons: francisca,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat, tunhastallone, {quoted: m}) 
//-----END HERE-----\\



//----DOWNLOAD FEATURES---\\
case 'play2':  {   
if  (!text) reply('example: seh calaz takambo tamba')
let yts = require("yt-search")
drips2 = await yts(text)
aramat = drips2.all 
var mulaikah = aramat[0].url
try {
xa.Youtube(mulaikah).then(async (data) => {
const captions = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮ _*◉ʏᴏᴜᴛᴜʙᴇ ᴍᴜꜱɪᴄ◉*_ ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵

*◉Tɪᴛʟᴇ :* ${drips2.videos[0].title}
*◉Sɪᴢᴇ :* ${data.medias[7].formattedSize}
*◉Dᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${drips2.videos[0].description}`
message = await prepareWAMessageMedia({ image : { url: drips2.videos[0].thumbnail } }, { upload:   ZimBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: captions,
imageMessage: message.imageMessage,
hydratedFooterText: `${botname}`,
hydratedButtons: [{
urlButton: {
displayText: 'SOURCE VIDEO',
url: `${drips2.videos[0].url}`
}
}, {
urlButton: {
displayText: `GITHUB`, 
url: `https://youtube.com/@zim-bot`
}
}, {
quickReplyButton: {
displayText: `VIDEO`,
id: `${prefix}ytmp4 ${drips2.videos[0].url}`
}
}, {
quickReplyButton: {
displayText: `SONG`,
id: `${prefix}ytmp3 ${drips2.videos[0].url}`
}
}, {
quickReplyButton: {
displayText: `YTSEARCH`,
id: `${prefix}ytsearch ${drips2.videos[0].title}`
}
}]
}
}
}), { userJid: m.chat })
ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
})
} catch (err) {
reply('*An error occurred maybe the query was not found*')
}
}
break
case 'play': {
let { yta } = require('./lib/y2mate')
if (!text)  reply(`Example : ${prefix + command} story wa anime`)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buf = await getBuffer(anu.thumbnail)
let muziq = [
                    {buttonId: `audio ${anu.url}`, buttonText: {displayText: 'AUDIO'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'VIDEO'}, type: 1},
                     {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'DOCUMENT'}, type: 1}
                ]
let caption = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓
       ⟮ _*◉ʏᴏᴜᴛᴜʙᴇ ᴍᴜꜱɪᴄ◉*_ ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵

*◉Tɪᴛʟᴇ :* ${anu.title}
*◉Sɪᴢᴇ :* ${anu.filesize}
*◉Uʀʟ :* ${anu.url}
*◉Dᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${anu.description}
 ©ᴢɪᴍʙᴏᴛɪɴᴄ

`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   ZimBotInc.waUploadToServer })
let buttonMessage = {
        image: buf,
        jpegThumbnail:buf,
        caption: caption,
        footer: ` ⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
        buttons: muziq,
        headerType: 4,
        contextInfo: { externalAdReply:{
        title:"ZIM BOT♡",
        body:"SUB DRIPS OFC",
        mediaType:2,
        thumbnail: fs.readFileSync(`./drips.jpg`),
        }}
        }
        ZimBotInc.sendMessage(m.chat, buttonMessage)
      
   }
break
/*
case 'yt3':  case 'ytmusc': 
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
const dripsmp3 = require ('./lib/ytdl2')
let yts = require("youtube-yts")
let search = await yts(text)
let bhingu = search.videos[0]
const kudzi = await dripsmp3.mp3(bhingu.url)
let caption = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮ _*◉ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ◉*_ ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵\n\n*◉TITLE :* ${bhingu.title}\n*◉FILESIZE :*\n*◉URL :* ${isUrl(text)}\n*◉EXT :* MP3\n*\n\n*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`
buf = await getBuffer(kudzi.meta.image)
await ZimBotInc.sendMessage(m.chat, {text: `*ɪᴍ sᴇɴᴅɪɴɢ ʏᴏᴜʀ sᴏɴɢ📻ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ...* `}, {quoted: m})
ZimBotInc.sendMessage(m.chat, { document: fs.readFileSync(kudzi.path),
    fileName: bhingu.title + '.mp3',
    mimetype: 'audio/mp4', quoted: m, contextInfo: { externalAdReply:{
title:"◉ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ◉",
body:"SUB DRIPS OFC",
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync(`./drips.jpg`) ,
mediaUrl:`https://wa.me/447441437150`, 
sourceUrl: `https://youtu.be/KNu-gr2h7bo` }
},
}, {quoted: m})

await fs.unlinkSync(kudzi.path)
*/
break
case 'ytmp3':
if (!args || !args[0]) throw 'need a link'
if (!/^(?:https?:\/\/)?(?:www\.|m\.|music\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/.test(args[0])) throw `Invalid link`
ZimBotInc.sendMessage(m.chat, { react: { text: `🕒`, key: m.key }})
const jsoni = await fetchJson('https://yt.nxr.my.id/yt2?url=' + args[0] + '&type=audio')
await ZimBotInc.sendMessage(m.chat, {text: `*ɪᴍ sᴇɴᴅɪɴɢ ʏᴏᴜʀ sᴏɴɢ📻ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ...* `}, {quoted: m})
if (!jsoni.status || !jsoni.data.url) throw `failed to download your music`
let captiono = `*Y T - P L A Y*\n\n`
captiono += `	◦  *Title* : ${jsoni.title}\n`
captiono += `	◦  *Size* : ${jsoni.data.size}\n`
captiono += `	◦  *Duration* : ${jsoni.duration}\n`
captiono += `	◦  *Bitrate* : ${jsoni.data.quality}\n\n`
captiono += 'ZIMBOT'
zimbotu =  `${jsoni.data.url}`

ZimBotInc.sendMessage(m.chat,{document: {url:jsoni.data.url}, fileName: `${jsoni.title}`, mimetype: 'audio/mp3', quoted: m, contextInfo: { externalAdReply:{
title:"◉ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ◉",
body:"SUB DRIPS OFC",
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync(`./drips.jpg`) ,
mediaUrl:`https://wa.me/447441437150`, 
sourceUrl: `https://youtu.be/KNu-gr2h7bo` }
}}, {quoted: m})
break
case 'ytmp4': case 'ytvideo': 
const dripsvideo = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !dripsvideo.isYTUrl(text)) throw `Where is the link?🤪`
ZimBotInc.sendMessage(m.chat, { react: { text: `🕒`, key: m.key }})
const v5=await dripsvideo.mp4(text)
/*var capti = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮ _*◉ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ◉*_ ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵\n\n*◉Title* : ${media.title}\n*◉FILESIZE* : ${media.filesizeF}\n*◉URL* : ${isUrl(text)}\n*◉EXT* : MP3\n*◉RESOLUTION* : ${args[1] || '360p'}\n\n*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`
*/
var buf = await getBuffer(v5.thumb)
let hobho = ('*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴠɪᴅᴇᴏ🎬ᴡᴀɪᴛ...*')
await ZimBotInc.sendMessage(m.chat, {text: `*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴠɪᴅᴇᴏ🎬ᴡᴀɪᴛ...* `}, {quoted: m})
ZimBotInc.sendMessage(m.chat, { video: { url:v5.videoUrl }, mimetype: 'video/mp4', fileName: `${v5.title}.mp4`, caption: `*ᴛɪᴛʟᴇ:* ${v5.title} \n\n *ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot*` , quoted: m,contextInfo: { externalAdReply:{
showAdAttribution: true,
},
}},{ quoted: m})
break
case 'audio':   
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
const dripsmp4 = require ('./lib/ytdl2')
let ytss = require("youtube-yts")
let searchi  = await ytss(text)
let bhinguu = searchi.videos[0]
const kudzii = await dripsmp4.mp3(bhinguu.url)
let captionu = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮ _*◉ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ◉*_ ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵\n\n*◉TITLE :* ${bhinguu.title}\n*◉FILESIZE :*\n*◉URL :* ${isUrl(text)}\n*◉EXT :* MP3\n*\n\n*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`
buf = await getBuffer(kudzii.meta.image)
await ZimBotInc.sendMessage(m.chat, {text: `*ɪᴍ sᴇɴᴅɪɴɢ ʏᴏᴜʀ sᴏɴɢ📻ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ...* `}, {quoted: m})
ZimBotInc.sendMessage(m.chat, { audio: fs.readFileSync(kudzii.path), fileName: bhinguu.title + '.mp3', mimetype: 'audio/mp4', quoted: m, contextInfo: { externalAdReply:{
title:"◉ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ◉",
body:"SUB DRIPS OFC",
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync(`./drips.jpg`) ,
mediaUrl:`https://wa.me/447441437150`, 
sourceUrl: `https://wa.me/447441437150` }
},
}, {quoted: m})

await fs.unlinkSync(kudzii.path)
break
case 'ytshorts': case 'shorts': {
if (!text) return reply(`*Use ${prefix + command} enter pin link*`)
if (!isUrl(args[0]) && !args[0].includes('youtube')) throw '*The link you provided is not valid*'  
xa.Youtube(`${text}`).then(async (data) => {
if (data.medias[0].formattedSize.split('MB')[0] >= 100) return m.reply('*File Over Limit* '+util.format(data)) 
cap = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮ _*◉Yᴏᴜᴛᴜʙᴇ Sʜᴏʀᴛꜱ◉*_ ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵\n\n\n\n*◉TITLE:* ${data.title}\n*◉QUALITY:* ${data.medias[0].quality}\n*◉SIZE:* ${data.medias[0].formattedSize}\n*◉DURATION* ${data.duration}\n*◉ID:* ${data.medias[0].cached}\n*◉LINK:* ${data.url}\n\n*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`
buf = await getBuffer(data.thumbnail)
ZimBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
ZimBotInc.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*◉TITLE:* ${data.title}\n*◉QUALITY:* ${data.medias[0].quality}\n*◉SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })  
}).catch((err) => {
reply(`*Failed to download and send media*`)
})
}
break
case 'getmusic': {
let { yta } = require('./lib/y2mate')   
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('*Reply message*')
if (!m.quoted.isBaileys) throw `*Can only reply to messages from bots*`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `*Maybe the message you replied does not contain the ytsearch results`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('*File Over Limit* '+util.format(media))
ZimBotInc.sendImage(m.chat, media.thumb, `*◉TITLE* : ${media.title}\n*◉FILE SIZE :* ${media.filesizeF}\n*◉URL :* ${urls[text - 1]}\n*◉EXT :* MP3\n*◉RESOLUTION :* ${args[1] || '128kbps'}`, m)
ZimBotInc.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
case 'getvideo': { 
let { ytv } = require('./lib/y2mate')  
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Message')
if (!m.quoted.isBaileys) throw `*Can only reply to messages from bots8`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `*Maybe the message you replied does not contain the ytsearch result*`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('*File Over Limit* '+util.format(media))
ZimBotInc.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `*◉TITLE :* ${media.title}\n*◉FILESIZE :* ${media.filesizeF}\n*◉URL :* ${urls[text - 1]}\n*◉EXT:* MP3\n*◉RESOLUTION :* ${args[1] || '360p'}` }, { quoted: m })
}
case 'mediafire': {  
reply(mess.wait)         
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*The link you provided is not valid*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮ _*◉Mᴇᴅɪᴀꜰɪʀᴇ Dᴏᴡɴʟᴏᴀᴅ◉*_ ⟯ 
          
*NAME* : ${baby1[0].nama}
*SIZE* : ${baby1[0].size}
*MIME* : ${baby1[0].mime}
*LINK* : ${baby1[0].link}\n

 _scraping metadata...._ 
*${botname}*`
reply(`${result4}`)
ZimBotInc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime ,  quoted : mudratunha, contextInfo: { externalAdReply:{
  title:"ᴢɪᴍ ʙᴏᴛ ᴠ5",
  body:"SUBSCRIBE DRIPS OFC",
  showAdAttribution: true,
  mediaType:2,
  thumbnail: fs.readFileSync(`./drips.jpg`) ,
  mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: m})
}
break
case 'song': {
  reply(mess.wait)
  if (!text) throw `Example : ${prefix + command} story wa anime`
  let yts = require("yt-search")
  let search = await yts(text)                   
let sections = []   
let listmenu = [`ytmp4 ${search.all[0].url}`,`ytmp3 ${search.all[1].url}`,`ytmp4 ${search.all[2].url}`,`ytmp3 ${search.all[3].url}`,`ytmp4 ${search.all[4].url}`,`ytmp3 ${search.all[5].url}`,`ytmp4 ${search.all[6].url}`,`ytmp3 ${search.all[7].url}`,`ytmp4 ${search.all[8].url}`,`ytmp3 ${search.all[9].url}`,`ytmp4 ${search.all[10].url}`,`ytmp3 ${search.all[11].url}`,`ytmp4 ${search.all[12].url}`,`ytmp3 ${search.all[13].url}`,`ytmp4 ${search.all[14].url}`,`ytmp3 ${search.all[15].url}`,`ytmp4 ${search.all[16].url}`,`ytmp3 ${search.all[17].url}`,`ytmp4 ${search.all[18].url}`,`ytmp3 ${search.all[19].url}`]
      let listmenuu = [`VIDEO MP4⬤: ${search.all[0].title}`,`SONG MP3⬤: ${search.all[1].title}`,`VIDEO MP4⬤: ${search.all[2].title}`,`SONG MP3⬤: ${search.all[3].title}`,`VIDEO MP4⬤: ${search.all[4].title}`,`SONG MP3⬤: ${search.all[5].title}`,`VIDEO MP4⬤: ${search.all[6].title}`,`SONG MP3⬤: ${search.all[7].title}`,`VIDEO MP4⬤: ${search.all[8].title}`,`SONG MP3⬤: ${search.all[9].title}`,`VIDEO MP4⬤: ${search.all[10].title}`,`SONG MP3⬤: ${search.all[11].title}`,`VIDEO MP4⬤: ${search.all[12].title}`,`SONG MP3⬤: ${search.all[13].title}`,`VIDEO MP4⬤: ${search.all[14].title}`,`SONG MP3⬤: ${search.all[15].title}`,`VIDEO MP4⬤: ${search.all[16].title}`,`SONG MP3⬤: ${search.all[17].title}`,`VIDEO MP4⬤: ${search.all[18].title}`,`SONG MP3⬤: ${search.all[19].title}`]
      let listmenuuu = [`\n${search.all[0].description}`,`\n${search.all[1].description}`,`\n${search.all[2].description}`,`\n${search.all[3].description}`,`\n${search.all[4].description}`,`\n${search.all[5].description}`,`\n${search.all[6].description}`,`\n${search.all[7].description}`,`\n${search.all[8].description}`,`\n${search.all[9].description}`,`\n${search.all[10].description}`,`\n${search.all[11].description}`,`\n${search.all[12].description}`,`\n${search.all[13].description}`,`\n${search.all[14].description}`,`\n${search.all[15].description}`,`\n${search.all[16].description}`,`\n${search.all[17].description}`,`\n${search.all[18].description}`,`\n${search.all[19].description}`]
      let nombor = 1
      let startnum = 0
      let startnumm = 0
      for (let x of listmenu) {
      const list = {title: 'RESULT NUMBER ' + nombor++,
      rows: [
         {
          title: `${listmenuu[startnum++]}`,
          description: `${listmenuuu[startnumm++]}`,
          rowId: `${prefix}${x}`
}, 
]
}
sections.push(list)   
}
const sendm =  ZimBotInc.sendMessage(
m.chat, 
{
text: "\n\n*_DONE SCRAPING DATA_*",
footer: botname,
title: `HERE IS YOUR RESULTS CHOMIE FROM *${text}* _select song or video below_`,
buttonText: "CLICK HERE",
sections
}, { quoted : m })
}
break
case 'ytsaudio': case 'ytsmusic': case 'ytsearchmusic': {
                   reply(mess.wait)
                  if (!text) throw `Example : ${prefix + command} guspy warior ita seunononga`
                  let yts = require("yt-search")
                  let search = await yts(text)                
                  let no = 1
                  let sections = []   
                  for (let i of search.all) {
                  const list = {title: `${i.title}`,
                  rows: [
                      {
                      title: `${i.title}\n`, 
                      rowId: `${prefix}ytmp3 ${i.url}`,
                      description: `${i.description}\n*UPLOAD:* ${i.ago}\n*CHANNEL:* ${i.author.name}\n*VIEWS:* ${i.views}\n*DURATION:* ${i.timestamp}\n*LINK:* ${i.url}`
                      }, 
                      ]
                        }
                        sections.push(list)   
                        }
                        const sendm =  ZimBotInc.sendMessage(
                        m.chat, 
                        {
                        text: ` ${text}`,
                        footer: botname,
                        title: `${ucapannya2} ${pushname} Here are the search results from ytsaudio`,
                        buttonText: "LIST OF AUDIOS",
                        sections
                        }, { quoted : m })
                        }
                    break
  case 'ytsvideo': case 'ytsearchvideo': {
                  reply(mess.wait)
                  if (!text) throw `Example : ${prefix + command} seh calaz takambo tamba munyika`
                  let yts = require("yt-search")
                  let search = await yts(text)                
                  let no = 1
                  let sections = []   
                  for (let i of search.all) {
                  const list = {title: `${i.title}`,
                  rows: [
                      {
                      title: `${i.title}\n`, 
                      rowId: `${prefix}ytmp4 ${i.url}`,
                      description: `${i.description}\n*UPLOAD:* ${i.ago}\n*CHANNEL:* ${i.author.name}\n*VIEWS:* ${i.views}\n*DURATION* ${i.timestamp}\n*LINK:* ${i.url}`
                      }, 
                      ]
                        }
                        sections.push(list)   
                        }
                        const sendm =  ZimBotInc.sendMessage(
                        m.chat, 
                        {
                        text: ` ${text}`,
                        footer: botname,
                        title: `${ucapannya2} ${pushname} *Here are the search results from ytsvideo*`,
                        buttonText: "LIST OF VIDEOS",
                        sections
                        }, { quoted : m })
                        }
                    break
  case 'yts': case 'youtubesearch': case 'ytsearch': {
    
                  await ZimBotInc.sendMessage(m.chat, {text: `*sᴇᴀʀᴄʜɪɴɢ🔎 ʏᴏᴜʀ ᴠɪᴅᴇᴏs🎬ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ...* `}, {quoted: m})
                  if (!text) throw `Example : ${prefix + command} story wa anime`
                  let yts = require("youtube-yts")
                  let search = await yts(text)                
                  let no = 1
                  let sections = []   
                  for (let i of search.all) {
                  const list = {title: `${i.title}`,
                  rows: [
                      {
                      title: `${i.title}\n\n`, 
                      rowId: `${prefix}ytmp3 ${i.url}`,
                      description: `${i.url}`
                      }, 
                      ]
                        }
                        sections.push(list)   
                        }
                        const sendm =  ZimBotInc.sendMessage(
                        m.chat, 
                        {
                        text: `*ϙᴜᴇʀʏ:* \n${text}🎛️`,
                        footer: ` ⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023` ,
                        title: `*ʏᴏᴜᴛᴜʙᴇ sᴇᴀʀᴄʜ*`,
                        buttonText: "CLICK HERE",
                        sections
                        }, { quoted : m })
                        }
                    break
case 'fbdl': case 'fb': case 'facebook': case 'fbvideo': {     	    
  reply(mess.wait)        
  if (!text) throw '*Enter a Link Query!*'
     if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'         
 let bocil = require('@bochilteam/scraper')  
     bocil.facebookdlv2(`${text}`).then(async (data) => {                   

         let txt = `*
         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
             ⟮ _*◉FB Dᴏᴡɴʟᴏᴀᴅ◉*_ ⟯ *\n\n`

         txt += `*◉TITLE :* ${data.title}\n`

         txt += `*◉QUALITY :* ${data.result[0].quality}\n`

         txt += `*◉DESCRIPTION :* ${data.description}\n`

         txt += `*◉ID :* ᴢɪᴍ ʙᴏᴛ ɪɴᴄ\n`

         txt += `*◉URL :* ${text}\n\n`

         txt += `*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`                

     buf = await getBuffer(data.thumbnail)    

     ZimBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, {quoted: mudratunha})
     for (let i of data.result) {  
    ZimBotInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, mimetype: 'video/mp4', caption: `*◉ Quality :* ${i.quality}` ,  quoted: m,contextInfo: { externalAdReply:{
      title:"ᴢɪᴍ ʙᴏᴛ ᴠ5",
      body:"SUBSCRIBE DRIPS OFC",
      showAdAttribution: true,
      mediaType:2,
      thumbnail: fs.readFileSync(`./drips.jpg`) ,
      mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
      sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: m})
     
       
     }
    
  }).catch((err) => {

      reply(`*Failed When Downloading Media and Sending Files*`)

  })

}

              

break
case 'savefrom': {

  

if (!text) return m.reply(`Failed to download media and send audio ${prefix + command} link url`) 

if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
let noh = require('@bochilteam/scraper')                

noh.savefrom(`${text}`).then(async (data) => {

let sections = []   

for (let i of data.url) {

const list = {title: `${i.type}`,

rows: [

  {

   title: `Quality ${i.subname}`, 

   rowId: `${prefix}get ${text}`,

   description: `${data.hosting}`	     

  }, 

  ]

 }

 sections.push(list)   

 }

const sendm =  ZimBotInc.sendMessage(

  m.chat, 

  {

   text: `${data.meta.title} *Here is the list of videos, click the button below to choose, here is the list of videos, click the button below to choose*`,

   footer: `©ᴢɪᴍ ʙᴏᴛ ɪɴᴄ 2023`,

   title: "**▊▊▊SAVEFROM DL▊▊▊**",

   buttonText: "CLICK HERE",

   sections

  }, { quoted : m })                 

            }).catch((err) => {

                reply(`*Sorry An Error Occurred*`)

            })

        }

break
case 'fb2': case 'facebook2': case 'fb': {
  //
    if (!text) throw '*Enter a Link Query!*'
    if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
    anu = await fetchJson(`https://violetics.pw/api/downloader/facebook?apikey=beta&url=${text}`)
    tummb = await getBuffer('https://telegra.ph/file/9789a09c964cee5597a05.jpg')    
    ZimBotInc.sendMessage(m.chat, { video: { url: anu.result.url[0].url }, jpegThumbnail:tummb, caption: `*📽️ FACEBOOK DOWNLOADER*\n\n*Name* : ${anu.result.meta.title}\n*Quality* : ${anu.result.url[0].subname}\n*Ext* : ${anu.result.url[0].ext}\n`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
}
break
case 'get': {

  

      if (!text) throw 'Enter a Link' 

  

      let bicil = require('@bochilteam/scraper')

      let urlnya = text

    bicil.savefrom(urlnya)

    .then(async(result) => {	  	                                	                      	            

  for(let i of result.url) {		

  if(i.url.includes('mp4')){		           			    				

let link = await getBuffer(i.url)

      ZimBotInc.sendMessage(m.chat, { video: link, caption: `*quality ${i.subname}*` }, { quoted: m })                  

     }

    }

  }).catch((err) => reply(`*Sorry Future Error*`))

  }		
break
case 'tiktok4': { //DOWNLOADER
  // //if 
   if (!text) throw '*Enter a Link Query!*'                
   if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
   
   reply(mess.wait)
   hx.ttdownloader(`${text}`).then(async (data) => {                      
       let buttons = [                    
       {buttonId: `${prefix}tiktokmp3 ${text}`, buttonText: {displayText: 'AUDIO'}, type: 1}
   ]
   let buttonMessage = {
       video: { url: data.nowm },                    
       caption: `${util.format(data)}`,
       footer: 'Please Select Below',
       buttons: buttons,
       headerType: 5
   }
   ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })                
   }).catch((err) => {
       reply(`*Failed to download media and send videos*`)
   })
}
break
case 'tiktok2': {
if (!text) throw `Use example ${prefix + command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'

anu = await fetchJson(`https://violetics.pw/api/downloader/tiktok?apikey=df7d-425a-3bc8&url=${text}`)
let listmn = `*▊▊▊TIKTOK DL▊▊▊*\n\n*Title:* ${anu.result.title}\n*Author:* ${anu.result.id}\n*Url:* ${anu.result.url}`
buf = await getBuffer(anu.result.thumb)
buf2 = await getBuffer(anu.result.link_dl2)
let message = await prepareWAMessageMedia({ video: buf2, gifPlayback:false, jpegThumbnail:buf }, { upload: ZimBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: listmn,
hydratedFooterText: `${botname}`,
hydratedButtons: [{
urlButton: {
displayText: 'SUBSCRIBE',
url: 'https://youtube.com/@zim-bot'
}
}, {
urlButton: {
displayText: 'GITHUB',
url: 'https://youtube.com/@zim-bot'
}
}, {
quickReplyButton: {
displayText: 'PING',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'OWNER',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'DONATE',
id: 'donadi'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'tiktok': case 'tiktoknowm': case 'tiktokwm': case 'tt': case 'ttnowm': case 'ttwm': {

  // //if 
   if (!text) throw '*Enter a Link Query!*'            
   
   let bocil = require('@bochilteam/scraper')    
   if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
   bocil.tiktokdlv3(`${text}`).then(async (video) => {           
     var hadi = randomNomor(100)        
      var hadie = randomNomor(200)     
      var hadir = randomNomor(300)
       var memek = randomNomor(1000)                      
     let caption = `
     *▊▊▊TIKTOK DL▊▊▊*\n\n*AUTHOR* : DRIPS\n*NICKNAME* : ${video.author.nickname}\n*CAPTION* : ${video.description}\n*QUALITY* : nowatermark\n*COMMENTS* : ${memek}\n*CREATE* ${hadir} Ago\n*LIKES* : ${hadi}\n*DISLIKE* : ${hadie}\n*SOURCE* : ${text}\n\n\n*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`
     buf = await getBuffer(video.author.avatar)                
     ZimBotInc.sendMessage(m.chat, { image: { url: video.author.avatar }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m })
     ZimBotInc.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail:buf, mimetype: 'video/mp4', caption: `*Downloading From ${text}*` }, { quoted: m })               
   }).catch((err) => {
       reply(`*Failed to download media and send videos*`)
   })
}
break
case 'tiktok5': case 'tt5': {
  // //if 
if (!text) throw '*Enter a Link Query!*'            
   
let bocil = require('@bochilteam/scraper')    
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
bocil.tiktokdlv3(`${text}`).then(async (video) => {           
var hadi = randomNomor(100)        
var hadie = randomNomor(200)     
var hadir = randomNomor(300)
var memek = randomNomor(1000)                      
let caption = `*▊▊▊TIKTOK DL▊▊▊*\n\n*AUTHOR* : DRIPS\n*NICKNAME* : ${video.author.nickname}\n*CAPTION* : ${video.description}\n*COMMENTS* : ${memek}\n*CREATE* ${hadir} Ago\n*LIKES* : ${hadi}\n*DISLIKES* : ${hadie}\n*SOURCE* : ${text}\n\n\n*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`
buf = await getBuffer(video.author.avatar)                
ZimBotInc.sendMessage(m.chat, { image: { url: video.author.avatar }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m })
ZimBotInc.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail:buf, mimetype: 'video/mp4', caption: `*Downloading From ${text}*` }, { quoted: m })               
}).catch((err) => {
reply(`*Failed to download media and send videos*`)
})
}
break
case 'tt3': case 'tiktok3': {
  // //if 
if (!text) throw '*Enter a Link Query!*'            
   
let bocil = require('@bochilteam/scraper')    
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
bocil.tiktokdlv3(`${text}`).then(async (video) => {           
var hadi = randomNomor(100)        
var hadie = randomNomor(200)     
var hadir = randomNomor(300)
var memek = randomNomor(1000)                      
let caption = `**▊▊▊TIKTOK DL▊▊▊**\n\n*⬤AUTHOR* : DRIPS\n*⬤NICKNAME* : ${video.author.nickname}\n*⬤CAPTION* : ${video.description}\n*⬤COMMENTS* : ${memek}\n*⬤CREATE* ${hadir} Ago\n*⬤LIKES* : ${hadi}\n*⬤DISLIKES* : ${hadie}\n*⬤ SOURCE* : ${text}`
buf = await getBuffer(video.author.avatar)                
let message = await prepareWAMessageMedia({ image: buf, jpegThumbnail: buf }, { upload: ZimBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: caption,
hydratedFooterText: `${botname}`,
hydratedButtons: [{
urlButton: {
displayText: 'SOURCE',
url: `${text}`
}
}, {
urlButton: {
displayText: 'GITHUB',
url: 'https://youtube.com/@zim-bot'
}
}, {
quickReplyButton: {
displayText: 'WATERMARK',
id: `ttwm ${text}`
}
}, {
quickReplyButton: {
displayText: 'NOWATERMARK',
id: `tiktoknowm ${text}`
}  
}, {
quickReplyButton: {
displayText: 'AUDIO',
id: `tiktokmp3 ${text}`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })                
}).catch((err) => {
reply(`*Failed to download media and send videos*`)
})
}
break
case 'tiktokmp3': case 'tiktokaudio': { 	   

if (!text) throw '*Enter Link Tiktok!*'
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
let got = require('./lib/tiktok.js')
   
got.tiktokDown(`${text}`).then(async (data) => {
ZimBotInc.sendMessage(m.chat, { audio: { url: data.result.nowatermark }, mimetype: 'audio/mp4'}, { quoted: m })
}).catch((err) => {
reply(`*Failed to download media and send audio*`)
})
}
break
case 'ttmp3': {
if (!text) throw `*Enter link tiktok example ${prefix + command} https://vt.tiktok.com/zgjbtcsdq/`  
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
let get = require('./lib/scraper.js')
                                  
get.aiovideodl(`${text}`).then(async (res) => {        
var anu = await getBuffer(res.medias[2].url)         
ZimBotInc.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}).catch((err) => {
reply(`*Failed to download media and send videos*`)
})
}
break
case 'ig': case 'igdl': case 'instagram': {

  

if (!text) throw '*Please Enter Instagarm Link*' 

if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'

   

                

let urlnya = text

 hx.igdl(urlnya)

 .then(async(result) => {	  


 var halo = 0		


ZimBotInc.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM DOWNLOADER 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Filetype :* ${result.medias[0].fileType}\n*⬤ Type :* ${result.medias[0].type}\n*⬤ Jumlah Media :* ${result.medias.length}\n*⬤ Url :* ${text}\n\n*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*` }, { quoted: m })	                                  	                      	            


for(let i of result.medias) {		


if(i.url.includes('mp4')){		           			    				


let link = await getBuffer(i.url)

ZimBotInc.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })

} else {


let link = await getBuffer(i.url)

ZimBotInc.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })          


}


 }

}).catch((err) => reply(`*Sorry Instagram Instagram ${text} Not found*`))

}		

break
case 'ig3': case 'igdl3': case 'instagram3': {

   ////if 
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
   
let bicil = require('@bochilteam/scraper')
let urlnya = text
 bicil.instagramdlv4(urlnya)
 .then(async(result) => {
for(let i of result){
if(i.url.includes('mp4')){
let link = await getBuffer(i.url)
ZimBotInc.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*${botname}*` }, { quoted: m }) 
} else {
let link = await getBuffer(i.url)
ZimBotInc.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*${botname}*` }, { quoted: m })                  
}
}
}).catch((err) => reply(`*Failed When Downloading And Sending Media*`))
}		
break
case 'ig2': case 'igdl2': case 'instagram2': {	            
   if (!text) throw '*Enter a Link Query!*'                
   if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
   
anu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${text}`)
var oi = 1
for(let i of anu.medias){                
var txt = `*▊▊▊INSTA DL▊▊▊*\n\n*Username:* ${anu.user.username}\n*Fullname:* ${anu.user.fullName}\n*Followers:* ${anu.user.followers}\n*Type:* ${anu.medias[0].type}\n*Tipe:* ${anu.medias[0].fileType}\n*ID:* ${anu.user.id}\n*Jumlah Media:* ${oi++}\n*Url:* ${text}\n\n*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`
var buf = await getBuffer(anu.user.profilePicUrl)        
ZimBotInc.sendMessage(m.chat, { image: { url: anu.user.profilePicUrl }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m }).catch((err) => m.reply('error'))
ZimBotInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m }).catch((err) => m.reply('error'))
}
}
break
case 'igimage': {	            
if (!text) throw '*Enter a Link Query!*'
const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
   
instagramdlv3(`${text}`).then(async (data) => {
for (let f of data) {                                      
ZimBotInc.sendMedia(m.chat, f.url, '', `Download Url Instagram From ${text}`, m)
}
}).catch((err) => {
reply(`*Failed to download media and send videos*`)
})
}
break
case 'igs': case 'igstory': case 'instagramstory': {

   

if (!text) throw 'Type  Username!' 

                 

let urlnya = text

 hx.igstory(urlnya)

 .then(async(result) => {

var halo = 0		

ZimBotInc.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM STORY 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Filetype :* ${result.medias[0].fileType}\n*⬤ Type :* ${result.medias[0].type}\n*⬤ Media :* ${result.medias.length}\n*⬤ Bio :* ${result.user.biography}\n\n*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*` }, { quoted: m })	                                  	                      	            

for(let i of result.medias) {

if(i.url.includes('mp4')){

let link = await getBuffer(i.url)

ZimBotInc.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m }) 

} else {

let link = await getBuffer(i.url)

ZimBotInc.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })                  

}

}

}).catch((err) => reply(`*Sorry Story Instagram ${text} not found*`))

}		

break
case 'igs2': case 'igstory2': case 'instagramstory2':{
////if you (copy.codes) .then(give a credit)
if (!text) throw '*Enter a Link Query!*'
//   if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
   
anu = await fetchJson(`https://api.akuari.my.id/downloader/igStory?username=${text}`)        
for (let i of anu) {
tummb = await getBuffer(i.preview)         
ZimBotInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:tummb, caption: `*${botname}*`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
}
}
break
case 'igs3': case 'igstory3': case 'instagramstory3': {
  
if (!text) throw 'Enter Username!' 
   
let bicil = require('@bochilteam/scraper')
let urlnya = text
bicil.instagramStoryv2(urlnya)
.then(async(result) => {	  
var halo = 1		
ZimBotInc.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTA DOWNLOADER 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Jumlah Media :* ${halo++}\n*⬤ Bio :* ${result.user.biography}\n\n*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*` }, { quoted: m })	                                  	                      	            
for(let i of result.results) {		
if(i.url.includes('mp4')){		           			    				
let link = await getBuffer(i.sourceUrl)
ZimBotInc.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*Story ${i.type}*` }, { quoted: m })
} else {
let link = await getBuffer(i.url)
ZimBotInc.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*Story ${i.type}*` }, { quoted: m })          
}
}
}).catch((err) => reply(`*Sorry Story Instagram ${text} Tnot found*`))
}		
break
case 'igtv': {	            
if (!text) throw '*Enter a Link Query!*'
const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
   
instagramdlv3(`${text}`).then(async (data) => {            
var buf = await getBuffer(data[0].thumbnail)        
ZimBotInc.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m })
}).catch((err) => {
reply(`*Failed to download media and send videos*`)
})
}
break
case 'twitter': case 'td': case 'twitterdl': {     	             
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('twitter.com')) throw '*The link you provided is not valid*'
     
xa.Twitter(`${text}`).then(async (data) => {                    
let txt = `*▊▊▊TWITTER DL▊▊▊*\n\n`
txt += `*⬤TITLE :* ${data.title}\n`
txt += `*⬤QUALITY :* ${data.medias[1].quality}\n`
txt += `*⬤TYPE :* ${data.medias[1].extension}\n`
txt += `*⬤SIZE :* ${data.medias[1].formattedSize}\n`
txt += `*⬤DURATION :* ${data.medias.length}\n`
txt += `*⬤URL :* ${data.url}\n\n`
txt += `*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`
buf = await getBuffer(data.thumbnail)    
ZimBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })
for (let i of data.medias) {
ZimBotInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*Downloading From ${text}*`}, { quoted: m })
}
}).catch((err) => {
reply(`*Failed to download media and send videos*`)
})
 }
 break
case 'twitter2': case 'td2': case 'twitterdl2': {     	             
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('twitter.com')) throw '*The link you provided is not valid*'
     
xa.Twitter(`${text}`).then(async (data) => {
for (let x of data.medias) {
let txt = `*▊▊▊TWITTER DL▊▊▊*n\n`
txt += `*⬤TITLE :* ${data.title}\n`
txt += `*⬤QUALITY :* ${x.quality}\n`
txt += `*⬤TYPE:* ${x.extension}\n`
txt += `*⬤SIZE:* ${x.formattedSize}\n`
txt += `*⬤URL :* ${data.url}\n\n`
txt += `*Hi ${pushname}The bot is doing great job dont forget to subcribe*`
buf = await getBuffer(data.thumbnail)    
ZimBotInc.sendMessage(m.chat, { video: { url: x.url }, jpegThumbnail:buf, caption: `${txt}`}, { quoted: m })
}
}).catch((err) => m.reply(`Sorry the faiture is error`))   
 }
 break

case 'twittermp3': case 'twitteraudio': { 	             
  if (!text) throw '*Enter a Link Query!*'
  if (!isUrl(args[0]) && !args[0].includes('twitter.com')) throw '*The link you provided is not valid*'
     
  xa.Twitter(`${text}`).then(async (data) => {
  ZimBotInc.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4'}, { quoted: m })
  }).catch((err) => {
  reply(`*Failed to download media and send audio*`)
})
 }
break
case 'fbdl': case 'facebook': case 'pesbuk': {     	    
         
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
              
let bocil = require('@bochilteam/scraper')  
bocil.facebookdlv2(`${text}`).then(async (data) => {                   

let txt = `*▊▊▊FB DOWNLOAD▊▊▊*\n\n`

txt += `*⬤TITLE :* ${data.title}\n`

txt += `*⬤QUALITY :* ${data.result[0].quality}\n`

txt += `*⬤DESCRIPTION :* ${data.description}\n`

txt += `*⬤ID :* ᴢɪᴍ ʙᴏᴛ ɪɴᴄ\n`

txt += `*⬤URL :* ${text}\n\n`

txt += `*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`                

buf = await getBuffer(data.thumbnail)    

ZimBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         

for (let i of data.result) {     

ZimBotInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*⬤ Quality :* ${i.quality}`}, { quoted: m })

}          

}).catch((err) => {

reply(`*Failed When Downloading Media and Sending Files*`)

})

 }

 break
case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {

if (!text) return m.reply(`Use${prefix + command} enter facebook link`)
if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
     
let noh = require('@bochilteam/scraper')                
noh.savefrom(`${text}`).then(async (anu) => {  
ZimBotInc.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })      
}).catch((err) => {
reply(`*Failed to link to audio*`)
})
}
 break
case 'fb6': {   	            
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
                 
xa.Facebook(`${text}`).then(async (data) => {                   
let txt = `*▊▊▊FB6 DOWNLOAD▊▊▊*\n\n`
txt += `*⬤TITLE :* ${data.title}\n`
txt += `*⬤QUALITY :* ${data.medias[1].quality}\n`
txt += `*:⬤TYPE* ${data.medias[1].extension}\n`
txt += `*⬤SIZE :* ${data.medias[1].formattedSize}\n`
txt += `*⬤URL :* ${data.url}\n\n`
txt += `*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`
buf = await getBuffer(data.thumbnail)    
ZimBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })              
ZimBotInc.sendMessage(m.chat, { video: { url: data.medias[1].url }, jpegThumbnail:buf, caption: `*⬤ Quality :* ${data.medias[1].quality}`}, { quoted: m })                
}).catch((err) => {
reply(`*Failed When Downloading Media and Sending Files*`)
})
}
break
case 'youtube': case 'ytdl': {
   ////if 
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('youtube.com')) throw '*The link you provided is not valid*'
    
anu = await fetchJson(`https://api.akuari.my.id/downloader/youtube?link=${text}`)        
if (anu.filesize_video >= 100000) return m.reply('*File Over Limit* '+util.format(anu))
tummb = await getBuffer(anu.thumb)
audio = await getBuffer(anu.audio)        
ZimBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `${anu.title}`}, { quoted : m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
ZimBotInc.sendMessage(m.chat, { video: { url: anu.video }, jpegThumbnail:tummb, caption: `${util.format(anu)}`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
 }
 break
 case 'igreal': case 'instagramreal': {
   ////if 
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
     
anu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${text}`)        
tummb = await getBuffer(anu.medias[0].preview)         
ZimBotInc.sendMessage(m.chat, { video: { url: anu.medias[0].url }, jpegThumbnail:tummb, caption: `${util.format(anu)}`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
 }
 break
 case 'cuttly': {
  //if 
if (!text) throw `Example : ${prefix + command} https://github.com`
anu = await fetchJson(`https://xteam.xyz/shorturl/cuttly?url=${text}&nama=alyabot&APIKEY=${setting.riy}`)
m.reply(`${anu.result}`)
}
break
case 'speedtest': {
  reply('Testing Speed...')
  let cp = require('child_process')
  let { promisify } = require('util')
  let exec = promisify(cp.exec).bind(cp)
  let o
  try {
  o = await exec('python speed.py')
  } catch (e) {
  o = e
  } finally {
  let { stdout, stderr } = o
  if (stdout.trim()) m.reply(stdout)
  if (stderr.trim()) m.reply(stderr)
  }
  }
  break
  case 'report': {
    if (!args.join(" ")) return m.reply(`Example : \n- ${prefix + command} feature ig error min\n- ${prefix + command} this user is spamming min`)
    teks = `*▊▊▊REPORT FEATURE▊▊▊*`
    teks1 = `\n\nNUMBER : @${m.sender.split("@")[0]}\n*REPORT :* ${args.join(" ")}`
    teks2 = `\n\nSucces send to owner`
    for (let i of owner) {
    ZimBotInc.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
    }
    ZimBotInc.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
    }
    break
    case 'request': case 'suggest': {
    if (!args.join(" ")) return m.reply(`Example : ${prefix + command} min add a downloader feature`)
    teks = `*▊▊▊REQUEST FEATURE▊▊▊*`
    teks1 = `\n\n*NUMBER :* @${m.sender.split("@")[0]}\n*REQUEST :* ${args.join(" ")}`
    teks2 = `\n\nSucces send to owner`
    for (let i of owner) {
    ZimBotInc.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
    }
    ZimBotInc.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
    }
    break
    case 'amino': {
      if (!text) throw `what are you looking for!, example : ${prefix + command} naruto`
      
      let anu = await fetchJson(`https://violetics.pw/api/search/amino?apikey=beta&query=${text}`)
      m.reply(`${util.format(anu)}`)
      }
  break
case 'anime': {

 

if (!text) return m.reply(`you are looking for what anime apa?\n\nEXAMPLE ${prefix}anime naruto`)


anu = await fetchJson(`https://api.jikan.moe/v4/anime?q=${text}`)

let sections = []   

for (let i of anu.data) {

const list = {title: `${i.title}`,

rows: [

{

title: `${i.title}`, 

rowId: `${prefix}animee ${i.mal_id}`,

description: `${i.synopsis}`

}, 

]

}

sections.push(list)   

}

const sendm =  ZimBotInc.sendMessage(

m.chat, 

{

text: `*Search Results From* ${text}`,

footer: botname,

title: "*▊▊▊ANIME▊▊▊*",

buttonText: "CLICK HERE",

sections

}, { quoted : m })

}

break
case 'animee': {

res = await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
let txt = `𝗔𝗻𝗶𝗺𝗲 𝗜𝗻𝗳𝗼\n\n*TITLE:* *${res.data.title}*\n*ENGLISH:* *${res.data.title_english}*\n*JAPANESE:* *${res.data.title_japanese}*\n*TYPE ANIME:* *${res.data.type}*\n*ADAPTER:* *${res.data.source}*\n*TOTAL EPISODE:* *${res.data.episodes}*\n*STATUS:* *${res.data.status}*\n*ONGOING:* *${res.data.airing ? 'Ya' : 'DRIS'}*\n*AIRED:* *${res.data.aired.string}*\n*DURATION:* *${res.data.duration}*\n*RATING:* *${res.data.rating}*\n*SCORE:* *${res.data.score}*\n*RANK:* *${res.data.rank}*\n*STUDIO:* *${res.data.studios[0].name}* `
ZimBotInc.sendMessage(m.chat, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }).catch((err) => m.reply('sorry error'))
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `*Type some text*\n\nExample : ${prefix + command} ZIM-BOT-INC`
let getGroups = await ZimBotInc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} second*`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'GITHUB',
url: 'https://youtube.com/@zim-bot'
}
}]
let txt = `「 *ZIMBOT BROADCAST* 」\n\n${text}`
ZimBotInc.send5ButImg(i, txt, botname, global.bc, btn)
}
reply(` *Send Broadcast To* ${anu.length} *Group*`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `*Type some text*\n\nExample : ${prefix + command} ZIM-BOT-INC`
let anu = await store.chats.all().map(v => v.id)
reply(`*Send Broadcast To* ${anu.length} Chat\nTime ${anu.length * 1.5} second`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'GITHUB',
url: 'https://youtube.com/@zim-bot'
}
}]
let txt = `「 *ZIMBOT BROADCAST* 」\n\n${text}`
ZimBotInc.send5ButImg(yoi, txt, botname, global.bc, btn)
}
reply('*Success Broadcast*')
}
break
case 'bc2': case 'bcloc': {
if (!isCreator) throw mess.owner
if (!text) throw `*Type some text*\n\nExample : ${prefix + command} drips|hi5`
let anu = await store.chats.all().map(v => v.id)
let [melo, melo2] = text.split`|`
reply(`*Send Broadcast To* ${anu.length} Chat\nTime ${anu.length * 1.5} minutes`)
for (let yoi of anu) {
await sleep(1500)
var button = [{ buttonId: `${prefix}ho`, buttonText: { displayText: `${melo2}` }, type: 1 }]              
ZimBotInc.sendMessage(yoi, { caption: `${melo}`, location: { jpegThumbnail: await getBuffer(picak+'Brodcast') }, buttons: button, footer: `${botname}`, mentions: [m.sender] })
}		
}
break
case 'bcimage': case 'bcvideo': case 'bcaudio': {
if (!isCreator) throw mess.owner
if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`
let anu = await store.chats.all().map(v => v.id)
let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync('./drips.jpg'), surface: 200, message: `ZIM-BOT-INC`, orderTitle: 'ZIM-BOT-INC', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} minutes*`)
for (let i of anu) {
await sleep(1500)
let butoon = [{
urlButton: {
displayText: `GITHUB`,
url: 'https://youtube.com/@zim-bot'
}
},
{
quickReplyButton: {
displayText: 'MENU',
id: 'menu'
}
}]
let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
if (/webp/.test(mime)) {
ZimBotInc.sendMessage(i, { sticker: { url: media } }, { quoted: ftroli })
} else if (/image/.test(mime)) {
let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
ZimBotInc.send5ButImg(i, junn, `${global.botname}`, buffer, butoon)
} else if (/video/.test(mime)) {
let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
ZimBotInc.sendMessage(i, {video: buffer, caption: `${junn}`}, { quoted: ftroli })
} else if (/audio/.test(mime)) {
ZimBotInc.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : ftroli })
} else {
reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
}
await fs.unlinkSync(media)
}
reply(` *Send Broadcast To* ${anu.length} *Chats*`)
}
break
case 'bctext': {
if (!isCreator) throw mess.owner
if (!text) throw `*Type some text*\n\nExample : ${prefix + command} zim-ot`
//let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 666666666,status: 200, thumbnail: await getBuffer(picak+'Brodcast'), surface: 200, message: `© ${botname}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
let ftroli = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${botname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ZimBotInc.user.name},;;;\nFN:${botname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await getBuffer(picak+'Brodcast'), thumbnail: await getBuffer(picak+'Brodcast'),sendEphemeral: true}}}
let anu = await store.chats.all().map(v => v.id)
reply(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} seconds*`)
for (let yoi of anu) {
await sleep(1500)
ZimBotInc.sendMessage(yoi, {text:`${text}`}, {quoted:blessedtuna})
}
reply('*Success Broadcast*')
}
break
case 'bcvid': case 'bcvideo': {
if (!isCreator) throw mess.owner
if (!text) throw `*use ${prefix + command}|text*`
let buf = `https://telegra.ph/file/f8b17ce3b28bb5f25f5e1.mp4`
let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 999999999999,status: 200, thumbnail: await getBuffer(picak+'Brodcast'), surface: 200, message: `© ${botname}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}                
let anu = await store.chats.all().map(v => v.id)
reply(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} minute*`)
for (let yoi of anu) {
await sleep(1500)		    
ZimBotInc.sendMessage(yoi, { video: await getBuffer(buf), jpegThumbnail: await getBuffer(picak+'Brodcast'), caption: `${text}` }, { quoted: ftroli}).catch ((err) => m.reply('*Sorry, failed to send the video*'))
}
reply('*Sucecess Broadcast*')
}
break
case 'swm': case 'stickerwm': case 'wm': {
  reply(mess.wait)
  if (!args.join(" ")) return m.reply(`Example :\n${prefix}swm drips love | tuna`)
  const swn = args.join(" ")
  const pcknm = swn.split("|")[0];
  const atnm = swn.split("|")[1];
  if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
  if (m.quoted.isAnimated === true) {
  ZimBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
  ZimBotInc.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
  } else if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await ZimBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
  let media = await quoted.download()
  let encmedia = await ZimBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
  await fs.unlinkSync(encmedia)
  } else {
  reply(`*Send Image/Video With Caption* ${prefix + command}\n*Duration Video 1-9 seconds*`)
  }
  }
break
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
reply(mess.wait)
if (!/image/.test(mime)) throw respond
if (!text) throw respond
reply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGans = await floNime(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
let FaTiH = await ZimBotInc.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
}
break
case 'brainly': {
reply(mess.wait)
if (!text) throw `Example : ${prefix + command} apa itu wibu`           
x = await fetchJson(`https://api.violetics.pw/api/media/brainly?apikey=beta&query=${text}`)                       
ini_txt = '*BRAINLY SEARCH*\n\n'
for (let i of x.result) {       
ini_txt += `*QUESTION* : ${i.pertanyaan}\n`
ini_txt += `*ANSWER* : ${i.jawaban}\n`                     
}   
reply(`${ini_txt}`)
}
break
case 'searchanime': {
reply(mess.wait)
if (!text) throw `Example : ${prefix + command} nama anime`
anu = await getBuffer(`https://api.akuari.my.id/search/konachan?query=${text}`)
ZimBotInc.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('*Sorry Xteam server is down*'))
}
break

//----END HERE------\\

//CREATED BY ᴢɪᴍ ʙᴏᴛ ɪɴᴄ

//----PHOT FILTER-----\\
break
case 'angie': 
case 'aria':
case 'attic': 
case 'blackandwhite': 
case 'chorme1977': 
case 'constrastbandw':
case 'creamy': 
case 'duotone': 
case 'eva': 
case 'goldenhour': 
case 'hana': 
case 'hdr': 
case 'japanese':
case 'lana': 
case 'lavander': 
case 'lemonande': 
case 'lightleak': 
case 'lisa': 
case 'lomo': 
case 'milk': 
case 'molly':
case 'monochrome': 
case 'morning': 
case 'movie': 
case 'orton': 
case 'paretro': 
case 'perfectbandw': 
case 'plumy': 
case 'retrolga': 
case 'ruby': 
case 'sand': 
case 'sapphire': 
case 'sepia': 
case 'softsepia': 
case 'solarize': 
case 'sphinx':
case 'venus': 
case 'viewfinder': 
case 'warmsunset': {
if (!/image/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)   
let anu = await TelegraPh(media)
let buf = await getBuffer(`https://violetics.pw/api/photofilter/${command}?apikey=beta&image=${anu}`)
ZimBotInc.sendMessage(m.chat, { image: buf, jpegThumbnail:buf, caption: `PhotoFilter ${command}` ,  quoted: m, contextInfo: { externalAdReply:{
  title:"ᴢɪᴍ ʙᴏᴛ ᴠ5",
  body:"SUBSCRIBE DRIPS OFC",
  showAdAttribution: true,
  mediaType:2,
  thumbnail: fs.readFileSync(`./drips.jpg`) ,
  mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: m})
}
 
//----END HERE-------\\

//CREATED BY ᴢɪᴍ ʙᴏᴛ ɪɴᴄ

//----TEXTPRO--------\\
case 'candy':
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow2': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case '3dstone2': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'halloween': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': 
case 'demon': {
if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`) 
reply(mess.wait)
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await maker.textpro(link, q)
ZimBotInc.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}` ,  quoted: m, contextInfo: { externalAdReply:{
  title:"ᴢɪᴍ ʙᴏᴛ ᴠ5",
  body:"SUBSCRIBE DRIPS OFC",
  showAdAttribution: true,
  mediaType:2,
  thumbnail: fs.readFileSync(`./drips.jpg`) ,
  mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: m})
}
//----END HERE--------\\

//CREATED BY DRIPS

//----PHOTOOXY------\\
case 'silk':  
case '3dnature': 
case 'bevel': 
case 'birthdaycake': 
case  'burnpaper':  
case 'coffee': 
case 'coffee-heartcup': 
case 'embroiderytext': 
case 'flaming': 
case 'flowertypo': 
case 'funnycup': 
case 'fur': 
case 'gerbang': 
case 'glowrainbow': 
case 'gradientavatar': 
case 'graffititext': 
case 'harrypotter': 
case 'lovemessage': 
case 'luxuryroyal': 
case 'neonlight': 
case 'sweetcandy': 
case 'summertext': 
case 'woodheart': 
case 'woodblock': 
case 'yellowroses': 
case 'wolfmetal': 
case 'underwaterocean': {
if (!text) throw `Example : ${prefix + command} text`
anu = await getBuffer(`https://violetics.pw/api/photooxy/${command}?apikey=beta&text=${text}`)
ZimBotInc.sendMessage(m.chat, { image: anu, caption: `*PHOTO OXY ${command}*` , quoted: m, contextInfo: { externalAdReply:{
  title:"ᴢɪᴍ ʙᴏᴛ ᴠ5",
  body:"SUBSCRIBE DRIPS OFC",
  showAdAttribution: true,
  mediaType:2,
  thumbnail: fs.readFileSync(`./drips.jpg`) ,
  mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: m})
}
break

//---END HERE------\\

//CREATED BY DRIPS

//----EPHOTO-------\\
case '3d-wood': 
case 'angels-wings': 
case 'snake-text': 
case 'redhot-metal2': 
case 'sandsummer-beach': 
case 'snow-text': 
case 'water-3d': 
case 'water-effect': 
case 'wet-glass': 
case 'status-mood2': 
case 'summerysand': {
if (!text) throw `Example : ${prefix + command} nama anime`
anu = await getBuffer(`https://violetics.pw/api/ephoto360/${command}?apikey=beta&text=${text}`)
ZimBotInc.sendMessage(m.chat, { image: anu, caption: `*EPHOTO ${command}*` ,  quoted: m, contextInfo: { externalAdReply:{
  title:"ᴢɪᴍ ʙᴏᴛ ᴠ5",
  body:"SUBSCRIBE DRIPS OFC",
  showAdAttribution: true,
  mediaType:2,
  thumbnail: fs.readFileSync(`./drips.jpg`) ,
  mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: m})
}
break

case 'once': case 'toonce': { //by DRIPS
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
ZimBotInc.sendMessage(from, {image: {url: anu},viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anu = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
ZimBotInc.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
}
}
break

case 'ary': 
case 'arygameplays': {
replay(mess.wait)
let buttons = [
{buttonId: `ary`, buttonText: {displayText: 'NEXT'}, type: 1}
]
let anu = await fetchJson(`https://wallebotapi.mitomods.com/docs/random/arygameplays?apikey=Donitas`)
let buttonMessage = {
image: { url: `${anu.result}` },
caption: `Arygameplays`,
footer: global.botnma,
buttons: buttons,
headerType: 4
}
ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
break
case 'emojiapple':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "0")
break
case 'emojigoogle':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "1")
break
case 'emojisamsung':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "2")
break
case 'emojimicrosoft':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "3")
break
case 'emojiwhatsapp':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "4")
break
case 'emojitwitter':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "5")
break
case 'emojifecabook':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "6")
break
case 'emojiskype':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "7")
break
case 'emojijoy':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "8")
break
case 'emojimoji':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "9")
case 'emojipedia':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "10")
break
case 'emojilg':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "11")
break
case 'news':
// and we need jsdom and Readability to parse the article HTML

let urltt = 'https://newsapi.org/v2/everything?' +
`q=${text}&` +
'sortBy=publishedAt&' +
'apiKey=306032cefd134ab38660d7db51dd18d1';
// First lets get some search data from News API

// Build the URL we are going request. This will get articles related to Apple and sort them newest first

// Make the request with axios' get() function
axios.get(urltt).then(function(r1) {

  // At this point we will have some search results from the API. Take the first search result...
  let firstResult = r1.data.articles[0];

  // ...and download the HTML for it, again with axios
  axios.get(firstResult.url).then(function(r2) {

    // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
    let dom = new JSDOM(r2.data, {
      url: firstResult.url
    });

    // now pass the DOM document into readability to parse
    let article = new Readability(dom.window.document).parse();

    // Done! The article content is in the textContent property
    console.log(color(article.textContent));
    reply(article.textContent)
  })
})
break
/* case 'drips':
  // First lets get some search data from News API

// Build the URL we are going request. This will get articles related to Apple and sort them newest first
let urlttt = 'https://newsapi.org/v2/top-headlines?' +
`country=za&apiKey=` +
'306032cefd134ab38660d7db51dd18d1';

// Make the request with axios' get() function
axios.get(urlttt).then(function(r1) {

  // At this point we will have some search results from the API. Take the first search result...
  let firstResult = r1.data.articles[0];

  // ...and download the HTML for it, again with axios
  axios.get(firstResult.url).then(function(r2) {

    // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
    let dom = new JSDOM(r2.data, {
      url: firstResult.url
    });

    // now pass the DOM document into readability to parse
    let article = new Readability(dom.window.document).parse();

    // Done! The article content is in the textContent property
    console.log(color(article.textContent));
    reply(article.textContent)
  })
})
    break
    */
case 'topheadlines':
  
  // First lets get some search data from News API

// Build the URL we are going request. This will get articles related to Apple and sort them newest first
let dhongi = 'https://newsapi.org/v2/top-headlines/sources?bbc-news&apiKey=' +
'306032cefd134ab38660d7db51dd18d1';

// Make the request with axios' get() function
axios.get(dhongi).then(function(r1) {

  // At this point we will have some search results from the API. Take the first search result...
  let firstResult = r1.data.articles[0];

  // ...and download the HTML for it, again with axios
  axios.get(firstResult.url).then(function(r2) {

    // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
    let dom = new JSDOM(r2.data, {
      url: firstResult.url
    });

    // now pass the DOM document into readability to parse
    let article = new Readability(dom.window.document).parse();

    // Done! The article content is in the textContent property
    console.log(color(article.textContent));
    reply(article.textContent)
  })
})
  break
  case 'googlenews':
  const request = require('request');

const options = {
  method: 'GET',
  url: 'https://google-news1.p.rapidapi.com/search',
  qs: {
    q: `${text}`,
    country: 'ZW',
    lang: 'en',
    source: 'iharare.com',
    limit: '100',
    when: '30d'
  },
  headers: {
    'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
    'X-RapidAPI-Host': 'google-news1.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	reply(body);
});
break
case 'hackernews':
const drips = {
  method: 'GET',
  url: 'https://community-hacker-news-v1.p.rapidapi.com/topstories.json',
  qs: {print: 'pretty'},
  headers: {
    'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
    'X-RapidAPI-Host': 'community-hacker-news-v1.p.rapidapi.com',
    useQueryString: true
  }
};
let dhuripi = require('request')
dhuripi(drips, function (error, response, body) {
	if (error) throw new Error(error);
reply(body)
	console.log(body);
});
break
case 'gnews':
reply(mess.wait)
const dripbabe = {
  method: 'GET',
  url: 'https://google-news.p.rapidapi.com/v1/search',//By drips 
  qs: {q: `${text}`, country: 'ZW', lang: 'en'}, //put your country on string: country://
  headers: {
    'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',// 3 request per hour
    'X-RapidAPI-Host': 'google-news.p.rapidapi.com',// if you with more request please visit https://rapidapi.com/newscatcher-api-newscatcher-api-default/api/google-news/pricing
    useQueryString: true
  }
};
let gnews = require('request')
gnews(dripbabe, function (error, response, body) {//removing credits is not an option
	if (error) throw new Error(error);
  reply(body);
	console.log(body);
});
break

case 'news2':
  reply(mess.wait)
const luckysure = {
  method: 'GET',
  url: 'https://free-news.p.rapidapi.com/v1/search',//By DRIPS
  qs: {q: `${text}`, lang: 'en'},
  headers: {
    'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',// 1 request per second (unlimited)
    'X-RapidAPI-Host': 'free-news.p.rapidapi.com',//removing credtis is not an option
    useQueryString: true
  }
};
let stanto = require('request')
stanto(luckysure, function (error, response, body) {
	if (error) throw new Error(error);
   reply(body);
	console.log(body);
});
break
case 'playstore': case 'apk':
reply(mess.wait)
if(!q) return reply('what are you looking for?')
let play = await hx.playstore(q)
let storup = ''
for (let i of play){
 storup += `\n*「 *PLAY STORE* 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(storup)
break
case 'igsearch':
  const dripsig = {
    method: 'GET',
    url: 'https://instagram-data1.p.rapidapi.com/user/search',//By Drips
    qs: {keyword: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',// 25 request per month if you unlimited requests buy api here visit https://rapidapi.com/logicbuilder/api/instagram-data1/pricing
      'X-RapidAPI-Host': 'instagram-data1.p.rapidapi.com',//removing credits is not an option
      useQueryString: true
    }
  };
  let magwettta = require('request')
  magwettta(dripsig, function (error, response, body) {
    if (error) throw new Error(error);
    reply(body);
    console.log(body);
  });
  break
  case 'apkdl': case 'apkmod': case 'apkd': {      
  
  if (!text) return m.reply(`Use${prefix + command} vpn`) 
  let noh = require('./lib/myfunc2')                
  noh.rexdl(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data) {
  const list = {title: `${i.judul}`,
  rows: [
	    {
	     title: `${i.judul}`, 
	     rowId: `${prefix}donlod ${i.link}`,
	     description: `CATEGORY: ${i.kategori}\nPUBLISH: ${i.upload_date}\nINFORMATION: ${i.deskripsi}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  ZimBotInc.sendMessage(
      m.chat, 
      {
       text: `${ucapannya2} ${pushname} *Search Results From ${text} Click the button below to choose*`,
       footer: `© ᴢɪᴍ ʙᴏᴛ ɪɴᴄ`,
       title: "*▊▊▊APK DOWNLOAD▊▊▊*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    reply(`*${text} Not found*`)
                })
            }
            break
            case 'donlod':  {  
              let dhupi = require('./lib/index.js')             
                              if (!text) return m.reply(`Use${prefix + command} whatsapp`)
                              if (!isUrl(args[0]) && !args[0].includes('https://rexdl.com/'))
                              
                         dhupi.rexdldown(`${text}`).then(async (anu) => {        
                         if (anu[0].size.split('MB')[0] >= 150) return reply('*File Over Limit* '+util.format(anu))
                         for (let i of anu) {    
                         linkye = `*▊▊▊APK DOWNLOAD▊▊▊*\n\n*TITLE:* ${i.title}\n*UPDATE:* ${i.up}\n*VERSION:* ${i.vers}\n*FILESIZE:* ${i.size}\n*URL:* \n*DESCRIPTION:* ${i.desc}\n\n*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`         
                              ZimBotInc.sendMessage(m.chat, { image: await getBuffer(i.thumb), jpegThumbnail: await getBuffer(i.thumb), caption: `${linkye}` }, { quoted: m })
                              ZimBotInc.sendMessage(m.chat, {document: await getBuffer(i.link), mimetype: `application/vnd.android.package-archive`, fileName: `${i.title}`}, {quoted:m})  
                              }  
                              }).catch((err) => {
                                  reply(`*Failed When Downloading Media and Sending Files*`)
                              }) 
                            }
                              break
// https://hardianto.xyz/api/beta/hacker2?apikey=hardianto&pp=https://i.ibb.co/1s8T3sY/48f7ce63c7aa.jpg
  case 'ripmaker':
  if (!text) throw '*Enter a Link Query! Example: https://i.imgur.com/rANDwCP.jpeg*'
  var dripa = `https://hardianto.xyz/api/rip?image=${text}&apikey=hardianto` 
  dri = await getBuffer(dripa)
  ZimBotInc.sendMessage(m.chat, { image: dri,caption:'ZIM-BOT-V4' }, { quoted: m})

break// https://hardianto.xyz/api/beta/hacker2?apikey=hardianto&pp=https://i.ibb.co/1s8T3sY/48f7ce63c7aa.jpg
  case 'hackermaker':
  if (!text) throw '*Enter a Link Query! Example: https://i.imgur.com/rANDwCP.jpeg*'
  var dripa = `https://hardianto.xyz/api/beta/hacker2?apikey=hardianto&pp=${text}` 
  dri = await getBuffer(dripa)
  ZimBotInc.sendMessage(m.chat, { image: dri,caption:'ZIM-BOT-V4' }, { quoted: m})
break //https://hardianto.xyz/api/maker/carbon?code=const%20anto%20=%20require(%27pahala%27)&color=cyan&apikey=hardianto
 case 'codecolor':
    if (!text) throw '*Enter a text*'
    var dripa = `https://hardianto.xyz/api/maker/carbon?code=${text}&color=cyan&apikey=hardianto` 
    dri = await getBuffer(dripa)
    ZimBotInc.sendMessage(m.chat, { image: dri,caption:'ZIM-BOT-V4' }, { quoted: m})
  break 
case 'ipdomain':
    reply(mess.wait)
    const driphacker = {
      method: 'GET',
      url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
      qs: {ip: `${text}`, apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
      headers: {
        'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
        'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
        useQueryString: true
      }
    };
    let mhamha = require('request')
    mhamha(driphacker, function (error, response, body) {
      if (error) throw new Error(error);
       reply(body);
      console.log(body);
    });
    break
    case 'ip':
      reply(mess.wait)
      const dripsba = {
        method: 'GET',
        url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
        qs: {apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
        headers: {
          'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
          'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
          useQueryString: true
        }
      };
      let bhudhi = require('request')
      bhudhi(dripsba, function (error, response, body) {
        if (error) throw new Error(error);
        reply(body);
        console.log(body);
      });
break
case 'checknumber':
  reply(mess.wait)
  const dripska = {
    method: 'GET',
    url: 'https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp',
    qs: {number: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'phonenumbervalidatefree.p.rapidapi.com',
      useQueryString: true
    }
  };
  let dhidhi = require('request')
  dhidhi(dripska, function (error, response, body) {
    if (error) throw new Error(error);
    reply(body);
    console.log(body);
  });
break
case 'veriphone':
  reply(mess.wait)
  const dripdrop = {
    method: 'GET',
    url: 'https://veriphone.p.rapidapi.com/verify',
    qs: {phone: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'veriphone.p.rapidapi.com',
      useQueryString: true
    }
  };
  let mhati = require('request')
  mhati(dripdrop, function (error, response, body) {
    if (error) throw new Error(error);
    reply(body);
    console.log(body);
  });
  break
  
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
reply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
ZimBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break
case 'whois':
  reply(mess.wai)
  var ip = ''; // Leave blank to lookup current IP address
var XMLHttp = new XMLHttpRequest();
XMLHttp.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
		var ipwhois = JSON.parse(this.responseText);
		console.log(ipwhois.country + ' ' + ipwhois.flag.emoji); // Output: United States 🇺🇸
	}
};
XMLHttp.open('GET', 'https://ipwho.is/' + ip, true);
XMLHttp.send();
break
// Upload status
case 'upsw': case 'uploadstatus': {
if (!isCreator) return reply(global.owner)
 ZimBotInc.sendMessage("status@broadcast", { text: q })
 reply("*Uploaded Status*")
 }
 break
//----OTHERS---\\
case 'weather':
  if (!args[0]) throw " please provide place or location name"
  try {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
    )
    const res = await response
    const name = res.data.name
    const Country = res.data.sys.country
    const Weather = res.data.weather[0].description
    const Temperature = res.data.main.temp + "°C"
    const Minimum_Temperature = res.data.main.temp_min + "°C"
    const Maximum_Temperature = res.data.main.temp_max + "°C"
    const Humidity = res.data.main.humidity + "%"
    const Wind = res.data.wind.speed + "km/h"
    const wea = `*📍PLACE:* ${name}\n*COUNTRY:* ${Country}\n*WEATHER:* ${Weather}\n*TEMPERATURE:* ${Temperature}\nMINIMUM TEMPERATURE: ${Minimum_Temperature}\n*📛MAX TEMPERATURE:* ${Maximum_Temperature}\n*HUMIDITY:* ${Humidity}\n*WIND:* ${Wind}
  `

    reply(wea)
  } catch (e) {
    return "Error location not found!!!"
  }
break
case 'wiki':
  const { wikipedia } = require('@bochilteam/scraper')
  if (!text) throw `Exapmle: ${command} Minecraft`
  let json = await wikipedia(text)
  reply(`
🔎${r} Ressult from: *${text}*
🖼️${r} Image: ${json.img}
📖${r} Articles: 
${json.articles}
`.trim())

break
case 'ytcoment':
  if (!text) throw 'No Text'
ZimBotInc.sendMessage(m.chat, ('https://some-random-api.ml', '/canvas/youtube-comment', {
avatar: await ZimBotInc.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
comment: text,
username: ZimBotInc.getName(m.sender)
}), 'error.png', '*Nih Kak*', m)
break
case 'ssweb-hp': {
  if(args.length < 1) return reply(`Url link`)
  anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/ssweb-hp?url=${text}&apikey=IkyOgiwara`)
let buttons = [
                  {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
              ]
              let buttonMessage = {
                  image: anu ,
                  caption: `*SSWEB URL ( HP )* `,
                  footer: `Bot Created by ${global.pengguna}`,
                  buttons: buttons,
                  headerType: 4
              }
              ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
              }
break
case 'ssweb-pc': {
  if(args.length < 1) return reply(`Url link`)
  anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/ssweb-pc?url=${text}&apikey=IkyOgiwara`)
let buttons = [
                  {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
              ]
              let buttonMessage = {
                  image: anu ,
                  caption: `*SSWEB URL ( PC )* `,
                  footer: `Bot Created by ${global.pengguna}`,
                  buttons: buttons,
                  headerType: 4
              }
              ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
              }             
break
 // Send image or video from url
 case 'sendimage':
 ZimBotInc.sendMessage(m.chat, { image: { url: q }, fileLength: "5000000000"}, { m })
 break
 case 'sendvideo':
 ZimBotInc.sendMessage(m.chat, { video: { url: q }, fileLength: "5000000000" }, { m })

break
case 'shortlink': {
 reply(mess.wait)
 try {
 anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
 reply(`${anu.data}`)
 } catch (e) {//https://leyscoders-api.herokuapp.com/api/cuttly?url=https://google.com&apikey=Your_key
 emror = String(e)
 reply(`${e}`)
 }
}
break
case 'shortlinkcuttly': {
  reply(mess.wait)
  try {
  anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${text}&apikey=IkyOgiwara`)
  hoo = anu.result.title
  bhoo = anu.result.hasil

  reply(`*TITLE:* ${hoo}\n*RESULT:* ${bhoo}`)
  } catch (e) {//https://leyscoders-api.herokuapp.com/api/cuttly?url=https://google.com&apikey=Your_key
  emror = String(e)
  reply(`${e}`)
  }
 }
break
case 'shortlinkisgd': {
  reply(mess.wait)
  try {
  anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${text}&apikey=IkyOgiwara`)
  hoo = anu.result

  reply(`*RESULT:* ${hoo}`)
  } catch (e) {//https://leyscoders-api.herokuapp.com/api/cuttly?url=https://google.com&apikey=Your_key
  emror = String(e)
  reply(`${e}`)
  }
 }
break
case 'todocument': {
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
ZimBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${ZimBotInc.user.name}.mp3`}, { quoted : m })
}
break

case 'searchgroups':
if (!q) return reply(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break

 case 'wallpaper': {
   if (!text) throw '*give me text to search👀*'
let { wallpaper } = require('./lib/scraper')
   anu = await wallpaper(text)
   result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
  {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'NEXT'}, type: 1}
   ]
   let buttonMessage = {
  image: { url: result.image[0] },
  caption: `🔮𝗧𝗜𝗧𝗟𝗘 : ${result.title}\n🔮𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗬 : ${result.type}\n🔮𝗗𝗘𝗧𝗔𝗜𝗟 : ${result.source}\n🔮𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟 : ${result.image[2] || result.image[1] || result.image[0]}`,
  footer: ZimBotInc.user.name,
  buttons: buttons,
  headerType: 4
   }
   ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 break
 case 'wikimedia': {
   if (!text) throw '*give me text so search👀*'
let { wikimedia } = require('./lib/scraper')
   anu = await wikimedia(text)
   result = anu[Math.floor(Math.random() * anu.length)]
   let buttons = [
  {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
   ]
   let buttonMessage = {
  image: { url: result.image },
  caption: `🔮 𝗧𝗜𝗧𝗟𝗘 : ${result.title}\n🔮 𝗦𝗢𝗨𝗥𝗖𝗘 : ${result.source}\n🔮 𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟 : ${result.image}`,
  footer: ZimBotInc.user.name,
  buttons: buttons,
  headerType: 4
   }
   ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 
break


   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
   try {
   let set
   if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
   if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
   if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
   if (/earrape/.test(command)) set = '-af volume=12'
   if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
   if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
   if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
   if (/reverse/.test(command)) set = '-filter_complex "areverse"'
   if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
   if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
   if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
   if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
   if (/audio/.test(mime)) {
   replay(mess.wait)
   let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
   let ran = getRandom('.mp3')
   exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
   if (err) return reply(err)
   let buff = fs.readFileSync(ran)
   ZimBotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
   fs.unlinkSync(ran)
   })
   } else reply(`Reply to the audio you want to change with caption *${prefix + command}*`)
   } catch (e) {
   reply(e)
   }
   break
 case 'setcmd': {
   if (!m.quoted) throw 'Reply Message!'
   if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
   if (!text) throw `where is the command`
   let hash = m.quoted.fileSha256.toString('base64')
   if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
   global.db.sticker[hash] = {
  text,
  mentionedJid: m.mentionedJid,
  creator: m.sender,
  at: + new Date,
  locked: false,
   }
   reply(`Done!`)
 }
 break
 case 'delcmd': {
   let hash = m.quoted.fileSha256.toString('base64')
   if (!hash) throw `No hashes`
   if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command' 
   delete global.db.sticker[hash]
   reply(`Done!`)
 }
 break
 case 'listcmd': {
   let teks = `
*Hash List*
Info: *bold* hash is locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
   ZimBotInc.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
 }
 break
 case 'lockcmd': {
   if (!isCreator) throw global.owner
   if (!m.quoted) throw 'Reply Message!'
   if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
   let hash = m.quoted.fileSha256.toString('base64')
   if (!(hash in global.db.sticker)) throw 'Hash not found in database'
   global.db.sticker[hash].locked = !/^un/i.test(command)
   reply('Done!')
 }
 break
 case 'addmsg': {
   if (!m.quoted) throw 'Reply Message You Want To Save In Database'
   if (!text) throw `Example : ${prefix + command} message name`
   let msgs = global.db.database
   if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
   msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of message with ${prefix}listmsg`)
 }
 break
 case 'getmsg': {
   if (!text) throw `Example : ${prefix + command} msg name\n\nView message list with ${prefix}listmsg`
   let msgs = global.db.database
   if (!(text.toLowerCase() in msgs)) throw `'${text}' not registered in message list`
   ZimBotInc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
 }
 break
 case 'listmsg': {
   let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '❰ *LIST DATABASE* ❱\n\n'
for (let i of seplit) {
    teks += `🧸*𝗡𝗔𝗠𝗘 :* ${i.nama}\n🧸*𝗧𝗬𝗣𝗘 :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
reply(teks)
    }
    
break
  
  
 case 'delmsg': case 'deletemsg': {
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
delete msgs[text.toLowerCase()]
reply(`Successfully deleted '${text}' from the message list`)
 }
   
break

 case 'public': {
   if (!isCreator) throw global.owner
   ZimBotInc.public = true
   reply('𝗭𝗶𝗺 𝗯𝗼𝘁 𝗻𝗼𝘄 𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗮𝘀 𝗽𝘂𝗯𝗹𝗶𝗰')
 }// https://hardianto.xyz/api/rip?image=https://i.imgur.com/rANDwCP.jpeg&apikey=hardianto
 break
 case 'attp': {
  reply(mess.wait)
  if (!text) throw `*Example : ${prefix + command} drips hi*`
  await ZimBotInc.sendMedia(m.chat, `https://hardianto.xyz/api/maker/attp?text=${text}&apikey=hardianto`,'ZIM', 'BOT M D', m, {asSticker: true}).catch((err) => m.reply('*error while sending sticker*'))
            }
            break
/*case 'ripmaker':
  reply(mess.wait)
  try{
  ripdri = await axios(`https://hardianto.xyz/api/rip?image=https://i.imgur.com/rANDwCP.jpeg&apikey=hardianto`)
  stalloni = await getBuffer(ripdri)
  ZimBotInc.sendMessage(from, {image:stalloni},{quoted:m})
  } catch (e) {error("Error")}
    reply(mess.wait)*/
            
 case 'self': {
   if (!isCreator) throw global.owner
   ZimBotInc.public = false
   reply('𝗭𝗶𝗺 𝗯𝗼𝘁 𝗻𝗼𝘄 𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗮𝘀 𝗽𝗿𝗶𝘃𝗮𝘁𝗲')
 }
 break
 case 'ping': case 'botstatus': case 'statusbot': {
   const used = process.memoryUsage()
   const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
   })
   const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
   }, {
  speed: 0,
  total: 0,
  times: {
 user: 0,
 nice: 0,
 sys: 0,
 idle: 0,
 irq: 0
   }
   })
   let timestamp = speed()
   let latensi = speed() - timestamp
   neww = performance.now()
   oldd = performance.now()
   respon = `
*RESPONSE SPEED* ${latensi.toFixed(4)} *SECONDS \n ${oldd - neww} _miliseconds_\n\n*RUNTIME* : ${runtime(process.uptime())}

*OCEAN SERVERS*
*RAM:* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

*NODEJS SERVERS*
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
   `.trim()
   reply(respon)
 }
 break
 case 'owner': case 'creator': {
 ZimBotInc.sendContact(m.chat, global.pemilik, m)
const devsound = fs.readFileSync('./Zimbot/bot.mp3')
ZimBotInc.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: mudratunha})
 }
 
 break
 case 'beetunha':
const hahahe = {
  method: 'GET',
  url: 'https://anime-quotes1.p.rapidapi.com/api/available/anime',
  headers: {
    'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
    'X-RapidAPI-Host': 'anime-quotes1.p.rapidapi.com'
  }
};
let requestt = require('request')
requestt(hahahe, function (error, response, body) {
	if (error) throw new Error(error);
   reply(body);
	console.log(body);
});
break
case 'tes': case 'test': case 'alive': case 'bot': case 'robot': case 'zimbot': case 'drips': case 'menu': {
ram9000 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
timestampe = speed();
latensie = speed() - timestampe
  anu = `
*ᴜᴘᴛɪᴍᴇ :* ${runtime(process.uptime())}

┌───〔 *_ᴢɪᴍ ʙᴏᴛ ᴠ5_* 〕
┊ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───〔 _*◉ᴀʙᴏᴜᴛ◉*_ 〕
┊❗ɴᴀᴍᴇ :  ${pushname}
┊❕ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊❗ʀᴀᴍ : ${ram9000}
┊❗ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊❕ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●
└───────────●
`
const aliveer = fs.readFileSync('./Zimbot/alive.mp3')
ZimBotInc.sendMessage(m.chat, { audio: aliveer, mimetype: 'audio/mp4', ptt: true, quoted: mudratunha})
let buttoni = [
        {buttonId: `sc`, buttonText: {displayText: 'SOURCE CODE'}, type: 1},
        {buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
        {buttonId: `allmenu`, buttonText: {displayText: '©MENU'}, type: 1},
        ]
        let buttonMessage = {
        document: fs.readFileSync('./lib/tes.xlsx'),
        mimetype: dripsee,
        jpegThumbnail: fs.readFileSync('./drips.jpg'),
        fileName: `ᴢɪᴍ ʙᴏᴛ ɪɴᴄ`,
        fileLength: 99999999999999,
        caption: anu,
        footer: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
        buttons: buttoni,
        headerType: 4,
        contextInfo: { externalAdReply:{
        title:"ᴢɪᴍ ʙᴏᴛ ɪɴᴄ",
        body:"SUB DRIPS OFC",
        showAdAttribution: true,
        mediaType:2,
        thumbnail: fs.readFileSync('./drips.jpg'),
        mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
        sourceUrl: `https://youtu.be/KNu-gr2h7bo`,
        }}
        }
        ZimBotInc.sendMessage(m.chat, buttonMessage)
      
    }
break
  case 'bug': case 'report': {
  if(!text) throw `Enter The Bug Example\n\n${command} Menu Error `
  ZimBotInc.sendMessage(`447441437150@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`*Successfully reported to the owner\n\nPlease make sure the bug is valid, if you play with this, use this feature again and again for no reason, you will be banned for using zim bot*`)
  }
break 
case 'listmenu':             
  let sections = []   
  let listmenu = [`allmenu`,`animemenu`,`groupmenu`,`toolmenu`,`downloadmenu`,`searchmenu`,`photofiltermenu`,`textpromenu`,`photooxymenu`,`ownermenu`,`ephotomenu`,`convertmenu`,`databasemenu`,`rpgmenu`,`donasi`]
  let listmenuu = [`ALL MENU`,`ANIME MENU`,`GROUP MENU`,`TOOL MENU`,`DOWNLOAD MENU`,`SEARCH MENU`,`PHOTOFILTER MENU`,`TEXTPRO MENU`,`PHOTOOXY MENU`,`OWNER MENU`,`EPHOTO MENU`,`CONVERT MENU`,`DATABASE MENU`,`RPG MENU`,`DONATE`]
  
  let nombor = 1
  let startnum = 0
  
  for (let x of listmenu) {
  const list = {title: 'MENU NUMBER ' + nombor++,                                                                             //by drips
  rows: [
  {
  title: `${listmenuu[startnum++]}`,
  
  rowId: `${prefix}${x}`
  }, 
  ]
  }
  sections.push(list)   
  }
  const sendm =  ZimBotInc.sendMessage(
  m.chat, 
  {
  text: `
┌───〔 *_ᴢɪᴍ ʙᴏᴛ ᴠ5_* 〕
┊ᴡᴇʟᴄᴏᴍᴇ
└───────────●
┌───〔 *_◉ᴜsᴇʀ ɪɴғᴏ◉_* 〕
┊ *NAME:* ${pushname}
┊  ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊ *RANK:* ${role}
┊ *STATUS:* ${elit}
┊ *MONEY:* $${(getBalance(sender, balance))}
┊ *XP:* ${getLevelingXp(sender)}/${reqXp}
┊ *LEVEL:* ${getLevelingLevel(sender)}
┊ *MONEY:* $${(getBalance(sender, balance))}
┊ *GOLD:* ${getEmas(sender)}
┊ *IRON:* ${getBesi(sender)}
┊ *FISH:* ${getFish(sender)}
┊ *DIAMOND:* ${getDm(sender)}
┊ *ᴠᴇʀꜱɪᴏɴ:* ${os.version()}
┊ *ᴛᴏᴛᴀʟ ᴜsᴇʀs:* ${Object.keys(global.db.users).length}
└───────────●
`,
  footer: `ᴢɪᴍ ʙᴏᴛ ɪɴᴄ`,
  title: `*LIST MENU*`,
  jpegThumbnail: fs.readFileSync('./drips.jpg'),
  buttonText: "CLICK HERE",
  sections
  }, { quoted : m })
break
case 'setmenu': {
  if (!isCreator) throw mess.owner
  let setbot = db.settings[botNumber]
     if (args[0] === 'templateImage'){
      setbot.templateImage = true
      setbot.templateLocation = false
      setbot.templateGif = false
      setbot.templateMsg = false
      setbot.templateList = false
      setbot.templateDoc = false
      setbot.templateZimbot = false
      reply(mess.success)
      } else if (args[0] === 'templateLocation'){
      setbot.templateImage = false
      setbot.templateLocation = true
      setbot.templateGif = false
      setbot.templateMsg = false
      setbot.templateList = false
      setbot.templateDoc = false
      setbot.templateZimbot = false
      reply(mess.success)
      } else if (args[0] === 'templateGif'){
      setbot.templateImage = false
      setbot.templateLocation = false
      setbot.templateGif = true
      setbot.templateMsg = false
      setbot.templateList = false
      setbot.templateDoc = false
      setbot.templateZimbot = false
      reply(mess.success)
      } else if (args[0] === 'templateMessage'){
      setbot.templateImage = false
      setbot.templateLocation = false
      setbot.templateGif = false
      setbot.templateMsg = true
      setbot.templateList = false
      setbot.templateDoc = false
      setbot.templateZimbot = false
      reply(mess.success)
      } else if (args[0] === 'templateList'){
      setbot.templateImage = false
      setbot.templateLocation = false
      setbot.templateGif = false
      setbot.templateMsg = false
      setbot.templateList = true
      setbot.templateDoc = false
      setbot.templateZimbot = false
      reply(mess.success)
      } else if (args[0] === 'templateDoc'){
      setbot.templateImage = false
      setbot.templateLocation = false
      setbot.templateGif = false
      setbot.templateMsg = false
      setbot.templateList = false
      setbot.templateDoc = true
      setbot.templateZimbot = false
      reply(mess.success)
    } else if (args[0] === 'templateZimbot'){
      setbot.templateImage = false
      setbot.templateLocation = false
      setbot.templateGif = false
      setbot.templateMsg = false
      setbot.templateList = false
      setbot.templateDoc = false
      setbot.templateZimbot = true
      reply(mess.success)
      } else {
        let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
          listMessage :{
         title: ``,
         description:
 `
 *ᴜᴘᴛɪᴍᴇ :* ${runtime(process.uptime())}

 ┌───〔 *_◉ᴀʙᴏᴜᴛ◉_* 〕
 ┊ *❗ᴏꜱ ʀᴇʟᴇᴀꜱᴇ:* ${os.release()}
 ┊ *❕ᴏꜱ ᴛʏᴘᴇ:*   ${os.type()}
 ┊ *❗ᴅɪʀᴇᴄᴛᴏʀʏ:*  ${os.homedir()}
 ┊ *❕ꜱᴘᴇᴇᴅ :* ${latensie.toFixed(4)} Second
 ┊ *ʀᴀᴍᴜsᴀɢᴇ :* ${ram2}
 ┊ *❗ᴘʟᴀᴛʟғᴏʀᴍ :* ${os.platform()} 
 ┊ *❗ꜰʀᴇᴇ ᴍᴏᴍᴏʀʏ:* ${os.freemem()}
 ┊ *❕ᴛᴏᴛᴀʟ ᴍᴇᴍᴏʀʏ:* ${os.totalmem()}
 ┊ *❕ᴠᴇʀꜱɪᴏɴ:* ${os.version()}
 ┊ *❗ᴅᴇᴠɪᴄᴇ :* ${os.hostname()}
 ┊ *❕ᴛᴏᴛᴀʟ ᴜsᴇʀs :* ${Object.keys(global.db.users).length}
 └───────────●
        `,
         buttonText: "SET MENU",
         footerText: "ᴢɪᴍ ʙᴏᴛ ɪɴᴄ 4",
         listType: "SINGLE_SELECT",
         sections: [{
       "title": "ᴢɪᴍ ʙᴏᴛ ɪɴᴄ",
       "rows": [
       {
       "title": "TEMPLATE ZIM-BOT",
       
       "rowId": `${prefix}setmenu templateZimbot`
       }
       ]
       },
       {
       "title": "ᴢɪᴍ ʙᴏᴛ ᴠ5",
       "rows": [
       {
       "title": "TEMPLATE IMAGE",
       
       "rowId": `${prefix}setmenu templateImage`
       },
       {
       "title": "TEMPLATE MESSAGE",
       
       "rowId": `${prefix}setmenu templateMessage`
       },
       {
       "title": "TEMPLATE LIST",
       
       "rowId": `${prefix}setmenu templateList`
       },
       {
       "title": "TEMPLATE DOC",
       
       "rowId": `${prefix}setmenu templateDoc`
       },
       {
       "title": "TEMPLATE GIF",
       
       "rowId": `${prefix}setmenu templateGif`
       },
       {
       "title": "TEMPLATE LOCATION",
       
       "rowId": `${prefix}setmenu templateLocation`
       },
       {
       "title": "SOURCE CODE",
       
       "rowId": `${prefix}sc`
       },
       {
       "title": "CREDITS",
       
       "rowId": `${prefix}credits`
       }
       ]
       }
       ],
         listType: 1
          }
        }), {})
        ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
        }
      }
  break
  case 'allmenu': case 'zimbotmenu': {
ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
let datane = fs.readFileSync('./lib/random.js')
jsonData = JSON.parse(datane)
randIndex = Math.floor(Math.random() * jsonData.length)
randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
const { device_manufacturer } = require('os')
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
timestampe = speed();
latensie = speed() - timestampe
anu = `
*ᴜᴘᴛɪᴍᴇ :* ${runtime(process.uptime())}

┌───〔 *_ᴢɪᴍ ʙᴏᴛ ᴠ5_* 〕
┊ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───〔 _*◉ᴀʙᴏᴜᴛ◉*_ 〕
┊❗ɴᴀᴍᴇ :  ${pushname}
┊❕ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊❗ʀᴀᴍ : ${ram2}
┊❗ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊❕ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●
└───────────●

┌───〔 *_◉ᴍᴇɴᴜ◉_* 〕
┊🪨downloadmenu
┊🪨groupmenu
┊🪨animemenu
┊🪨searchmenu
┊🪨ownermenu
┊🪨databasemenu
┊🪨textpromenu
┊🪨ephotomenu
┊🪨toolsmenu
┊🪨convertmenu
└───────────●

┌───〔 *_ᴛᴏᴏʟᴍᴇɴᴜ_* 〕
┊🪨ip ->-
┊🪨ipdomain -domain name-
┊🪨codecolor -text-
┊🪨hackermaker -pic url-
┊🪨checknumber -number-
┊🪨veriphone -number-
┊🪨weather -place-
┊🪨attp -text-
┊🪨ssweb-hp -url-
┊🪨shortlink -url-
┊🪨ssweb-pc -url-
┊🪨shortlinkcuttly -url-
┊🪨shortlinkisgd -url-
┊🪨brainly -query-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕


┌───〔 *_◉ᴏᴡɴᴇʀᴍᴇɴᴜ◉_* 〕
┊🪨chatbot on/off
┊🪨setmenu -option-
┊🪨checkupdate 
┊🪨updatenow
┊🪨bc -text-
┊🪨bcall -text-
┊🪨bctext -text-
┊🪨bcvideo -media-
┊🪨bcaudio -media-
┊🪨bcimage -media-
┊🪨bcloc  -text-
┊🪨bcgc -text-
┊🪨lockcmd
┊🪨setstatus -text-
┊🪨setppbot -owner-
┊🪨block -owner-
┊🪨unblock -owner-
┊🪨join -owner-
┊🪨leave -owner-
┊🪨chat -owner-
┊🪨public
┊🪨self
┊🪨grouponly
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕


┌───〔 *_◉ɢʀᴏᴜᴘᴍᴇɴᴜ◉_* 〕
┊🪨add -admin-
┊🪨kick -admin-
┊🪨welcome on/off -admin-
┊🪨listpc 
┊🪨listgc
┊🪨groupinfo -admin-
┊🪨antivn -admin-
┊🪨antiphoto -admin-
┊🪨antisticker -admin-
┊🪨antivideo -admin-
┊🪨antilinkall -admin-
┊🪨antiinstagram -admin-
┊🪨antitelegram -admin-
┊🪨antilink -admin-
┊🪨antiyt -admin-
┊🪨antibule -admin-
┊🪨antitiktok -admin-
┊🪨antifacebook -admin-
┊🪨antivirus -admin-
┊🪨antibadword -admin-
┊🪨antiwame -admin-
┊🪨group -options-
┊🪨mute
┊🪨groupinfo
┊🪨truth 
┊🪨dare
┊🪨slot
┊🪨math
┊🪨vote
┊🪨devote
┊🪨cekvote
┊🪨deletevote
┊🪨upvote
┊🪨setsubject -admin-
┊🪨setdesc -admin-
┊🪨setppgroup -admin-
┊🪨tagall -admin-
┊🪨hidetag -admin-
┊🪨ephemeral
┊🪨demote -admin-
┊🪨promote -admin-
┊🪨editinfo -admin-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕


┌───〔 *_◉ᴛᴇxᴛᴘʀᴏᴍᴇɴᴜ◉_* 〕
┊🪨candy -text-
┊🪨christmas -text-
┊🪨3dchristmas -text-
┊🪨sparklechristmas -text-
┊🪨deepsea -text-
┊🪨scifi -text-
┊🪨rainbow2 -text-
┊🪨waterpipe -text-
┊🪨spooky -text-
┊🪨pencil -text-
┊🪨circuit -text-
┊🪨discovery -text-
┊🪨metalic -text-
┊🪨fiction -text-
┊🪨demon -text-
┊🪨transformer -text-
┊🪨berry -text-
┊🪨thunder -text-
┊🪨3dstone2 -text-
┊🪨neonlight -text-
┊🪨glitch -text-
┊🪨harrypotter -text-
┊🪨brokenglass -text-
┊🪨papercut -text-
┊🪨watercolor -text-
┊🪨multicolor -text-
┊🪨neondevil -text-
┊🪨underwater -text-
┊🪨graffitibike -text-
┊🪨snow -text-
┊🪨cloud -text-
┊🪨honey -text-
┊🪨ice -text-
┊🪨fruitjuice -text-
┊🪨biscuit -text-
┊🪨wood -text-
┊🪨chocolate -text-
┊🪨strawberry -text-
┊🪨matrix -text-
┊🪨blood -text-
┊🪨dropwater -text-
┊🪨toxic -text-
┊🪨lava -text-
┊🪨rock -text-
┊🪨bloodglass -text-
┊🪨halloween -text-
┊🪨darkgold -text-
┊🪨joker -text-
┊🪨wicker -text-
┊🪨firework -text-
┊🪨skeleton -text-
┊🪨blackpink -text-
┊🪨sand -text-
┊🪨glue -text-
┊🪨1917 -text-
┊🪨leaves -text-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕


┌───〔 *_ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ_* 〕
┊🪨ytmp3 -link-
┊🪨ytmp4 -link-
┊🪨audio  -link-
┊🪨play -query-
┊🪨song -query-
┊🪨play2 -query-
┊🪨mediafire -link-
┊🪨fb -link-
┊🪨fb2 -link-
┊🪨ytsvideo -query-
┊🪨getmusic -query-
┊🪨getvideo -query-
┊🪨savefrom -query-
┊🪨pindl -query-
┊🪨joox -query-
┊🪨tiktok -link-
┊🪨tiktok2 -link-
┊🪨twitter -link-
┊🪨twitter2 -link-
┊🪨tiktok3 -link-
┊🪨tiktok4 -link-
┊🪨ig -link-
┊🪨instagramstory -link-
┊🪨instagramstory2 -link-
┊🪨igimage -link-
┊🪨instagramreal -link-
┊🪨soundcloud -link-
┊🪨ytshorts -link-
┊🪨unma -link-
┊🪨twitteraudio -link-
┊🪨ytsaudio -query-
┊🪨ytsvideo -query-
┊🪨yts2 -query-
┊🪨fbdl -link-
┊🪨fbvideo -link-
┊🪨get -link-
┊🪨tiktok5 -link-
┊🪨titktok3 -link-
┊🪨tiktokmp3 -link-
┊🪨ttmp3 -link-
┊🪨ig2 -link-
┊🪨ig3 -link-
┊🪨igimage -link-
┊🪨igtv -link-
┊🪨fbmp3 -link-
┊🪨ytdl -link-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕


┌───〔 *_ᴘʜᴏᴛꜰɪʟᴛᴇʀᴍᴇɴᴜ_* 〕
┊🪨angie -photo-
┊🪨aria -photo-
┊🪨attic -photo-
┊🪨blackandwhite -photo-
┊🪨chorme1977 -photo-
┊🪨constrastbandw -photo-
┊🪨creamy -photo-
┊🪨duotone -photo-
┊🪨eva -photo-
┊🪨goldenhour -photo-
┊🪨hana -photo-
┊🪨lavander -photo-
┊🪨lemonande -photo-
┊🪨lightleak -photo-
┊🪨lisa -photo-
┊🪨lomo -photo-
┊🪨milk -photo-
┊🪨molly -photo-
┊🪨monochrome -photo-
┊🪨morning -photo-
┊🪨movie -photo-
┊🪨orton -photo-
┊🪨paretro -photo-
┊🪨perfectbandw -photo-
┊🪨plumy -photo-
┊🪨retrolga -photo-
┊🪨ruby -photo-
┊🪨sand -photo-
┊🪨sapphire -photo-
┊🪨sepia -photo-
┊🪨softsepia -photo-
┊🪨solarize -photo-
┊🪨sphinx -photo-
┊🪨venus -photo-
┊🪨japanese -photo-
┊🪨hdr -photo-
┊🪨viewfilter -photo-
┊🪨warmsunset -photo-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕


┌───〔 *_ɴꜱꜰᴡᴍᴇɴᴜ_* 〕
┊🪨masturbation
┊🪨jahy
┊🪨hentai
┊🪨glasses
┊🪨gangbang
┊🪨foot
┊🪨femdom
┊🪨cum
┊🪨ero
┊🪨cuckhold
┊🪨blowjob
┊🪨bdsm
┊🪨ahegao
┊🪨ass
┊🪨orgy
┊🪨panties
┊🪨pussy
┊🪨yuri
┊🪨thighs
┊🪨tentacles
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕


┌───〔 *_ᴀɴɪᴍᴇᴍᴇɴᴜ_* 〕
┊🪨cry
┊🪨kill
┊🪨hug
┊🪨pat
┊🪨lick
┊🪨kiss
┊🪨bite
┊🪨yeet
┊🪨neko
┊🪨bully
┊🪨bonk
┊🪨wink
┊🪨poke
┊🪨nom
┊🪨slap
┊🪨smile
┊🪨wave
┊🪨awoo
┊🪨blush
┊🪨smug
┊🪨glomp
┊🪨happy
┊🪨dance
┊🪨cringe
┊🪨cuddle
┊🪨highfive
┊🪨shinobu
┊🪨megumin
┊🪨handhold
┊🪨animeslap
┊🪨animepat
┊🪨animeneko
┊🪨animehug
┊🪨animekiss
┊🪨animewlp
┊🪨animespank
┊🪨shinobu2
┊🪨megumin2
┊🪨awoo2
┊🪨animewall2
┊🪨searchanime -query-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕


┌───〔 *_ꜱᴇᴀʀᴄʜᴍᴇɴᴜ_* 〕
┊🪨lyrics -query-
┊🪨linkwa -query-
┊🪨apk -query-
┊🪨happymod -query-
┊🪨apkupro -query-
┊🪨google -query-
┊🪨wiki -query-
┊🪨ytsearch -query-
┊🪨recipe -query-
┊🪨playstore -query-
┊🪨wikimedia -query-
┊🪨news -query-
┊🪨news2 -query-
┊🪨animee -query-
┊🪨anime -query-
┊🪨amino -query-
┊🪨googleimage -query-
┊🪨apkdone -query-
┊🪨githubsearch -query->
┊🪨igsearch -username-
┊🪨googlenews -query-
┊🪨gnews -query-
┊🪨wallpaper -query-
┊🪨searchgroups -query-
┊🪨qoutesanime -query-
┊🪨gmsarena -query-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕

┌───〔*_◉ᴇᴘʜᴏᴛᴏ-ᴍᴇɴᴜ◉_*〕
┊🪨3d-wood
┊🪨angels-wings
┊🪨snake-text
┊🪨redhot-metal2
┊🪨sandsummer-beach
┊🪨snow-text
┊🪨water-3d
┊🪨water-effect
┊🪨wet-glass
┊🪨status-mood2
┊🪨summerysand
└───────────●

┌───〔 *_ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ_* 〕
┊🪨toimg -quote sticker-
┊🪨togif -quote video-
┊🪨todocument -media-
┊🪨bass -audio-
┊🪨blown -audio-
┊🪨deep -audio-
┊🪨earape -audio-
┊🪨fast -audio-
┊🪨fat -audio-
┊🪨nightcore -audio-
┊🪨reverse -audio-
┊🪨robot -audio-
┊🪨slow -audio-
┊🪨smooth -audio-
┊🪨squirrel -audio-
┊🪨sticker -media-
┊🪨smeme -media-
┊🪨stickermeme -media-
┊🪨swm -sticker-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕

┌───〔 *_◉ᴅᴀᴛᴀʙᴀꜱᴇᴍᴇɴᴜ◉_* 〕
┊🪨addmsg -msg-
┊🪨delmsg -msg-
┊🪨listmsg -msg-
┊🪨getmsg -msg-
┊🪨setcmd -msg-
┊🪨delcmd -msg-
┊🪨listcmd -msg-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕

┌───〔 *_◉Photooxyᴍᴇɴᴜ◉_* 〕
┊🪨silk -text-
┊🪨3dnature -text-
┊🪨bevel -text-
┊🪨birthdaycake -text-
┊🪨burnpaper -text-
┊🪨coffee -text-
┊🪨coffee-heartcup -text-
┊🪨embroiderytext -text-
┊🪨flaming -text-
┊🪨flowertypo -text-
┊🪨funnycup -text-
┊🪨fur -text-
┊🪨gerbang -text-
┊🪨glowrainbow -text-
┊🪨gradientavatar -text-
┊🪨graffititext -text-
┊🪨harrypotter -text-
┊🪨lovemessage -text-
┊🪨neonlight -text-
┊🪨sweetcandy -text-
┊🪨summertext -text-
┊🪨woodheart -text-
┊🪨yellowroses -text-
┊🪨wolfmetal -text-
┊🪨underwaterocean -text-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕


┌───〔 *_◉ᴍᴇɴᴜ ʀᴘɢ◉_* 〕
┊🪨joinrpg
┊🪨quest 
┊🪨mining
┊🪨mancing
┊🪨luckyday
┊🪨luckytime
┊🪨adventure
┊🪨inventori
└───────────●

┌───〔 *_◉Fᴀʀᴍ ʀᴘɢ◉_* 〕
┊🪨killslime
┊🪨killgoblin
┊🪨killdevil
┊🪨killbehemoth
┊🪨killdemon
┊🪨killdemonking 
└───────────●

┌───〔 *_◉Tʀᴀᴅᴇ ʀᴘɢ◉_* 〕
┊🪨sellikan
┊🪨sellbesi
┊🪨sellemas
┊🪨selldiamond
└───────────●
%readmore` 
    var buttonReplyy = [
				{ urlButton: { displayText: `WEBSITE🍎`, url: `https://youtube.com/@zim-bot` } },
				{ urlButton: { displayText: `SOURCECODE🍏`, url: `http://dripsofc.tech` } },
				{ quickReplyButton: { displayText: `SPEED`, id: `${prefix}ping` } },
                { quickReplyButton: { displayText: `OWNER`, id: `${prefix}owner` } },
                { quickReplyButton: { displayText: `LIST`, id: `${prefix}listmenu` } }
			]
			tempButton1(from, anu, '', buttonReplyy)
			}
break
case 'ownermenu': {
ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
buffer = await getBuffer(picak+'OWNER MENU')
ram3 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
anu = `
┌───〔 *_ᴢɪᴍ ʙᴏᴛ ᴠ5_* 〕
┊ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───〔 _*◉ᴀʙᴏᴜᴛ◉*_ 〕
┊❗ɴᴀᴍᴇ :  ${pushname}
┊❕ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊❗ʀᴀᴍ : ${ram3}
┊❗ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊❕ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●

┌───〔 *_◉ᴏᴡɴᴇʀᴍᴇɴᴜ◉_* 〕
┊🪨chatbot on/off
┊🪨setmenu -option-
┊🪨checkupdate 
┊🪨updatenow
┊🪨bc -text-
┊🪨bcall -text-
┊🪨bctext -text-
┊🪨bcvideo -media-
┊🪨bcaudio -media-
┊🪨bcimage -media-
┊🪨bcloc  -text-
┊🪨bcgc -text-
┊🪨lockcmd
┊🪨setstatus -text-
┊🪨setppbot -owner-
┊🪨block -owner-
┊🪨unblock -owner-
┊🪨join -owner-
┊🪨leave -owner-
┊🪨chat -owner-
┊🪨public
┊🪨self
┊🪨grouponly
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕
`
let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })

 var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/447441437150` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://youtube.com/@zim-bot` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `http://dripsofc.tech` } }
			]
			tempButtons(from, anu, '', buttonReplyy)
			}
			
break
case 'databasemenu': {
ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
buffer = await getBuffer(picak+'DATABASE MENU')
ram4 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
anu = `
┌───〔 *_ᴢɪᴍ ʙᴏᴛ ᴠ5_* 〕
┊ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───〔 _*◉ᴀʙᴏᴜᴛ◉*_ 〕
┊❗ɴᴀᴍᴇ :  ${pushname}
┊❕ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊❗ʀᴀᴍ : ${ram4}
┊❗ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊❕ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────●

    
     *_ᴥᴅᴀᴛᴀʙᴀsᴇ ᴍᴇɴᴜᴥ_*
 ▪︎addmsg -msg-
 ▪︎delmsg -msg-
 ▪︎listmsg -msg-
 ▪︎getmsg -msg-
 ▪︎setcmd -msg-
 ▪︎delcmd -msg-
 ▪︎listcmd -msg-
 
    *_©ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_*
`
let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
 var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/447441437150` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://youtube.com/@zim-bot` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `http://dripsofc.tech` } }
			]
			tempButtoni(from, anu, '', buttonReplyy)
			}
break
case 'photooxymenu': {
  ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
  buffer = await getBuffer(picak+'PHOTOOXY MENU')
  ram5 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
  anu = `
┌───〔 *_ᴢɪᴍ ʙᴏᴛ ᴠ5_* 〕
┊ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───〔 _*◉ᴀʙᴏᴜᴛ◉*_ 〕
┊❗ɴᴀᴍᴇ :  ${pushname}
┊❕ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊❗ʀᴀᴍ : ${ram5}
┊❗ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊❕ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●

┌───〔 *_◉Photooxyᴍᴇɴᴜ◉_* 〕
┊🪨silk -text-
┊🪨3dnature -text-
┊🪨bevel -text-
┊🪨birthdaycake -text-
┊🪨burnpaper -text-
┊🪨coffee -text-
┊🪨coffee-heartcup -text-
┊🪨embroiderytext -text-
┊🪨flaming -text-
┊🪨flowertypo -text-
┊🪨funnycup -text-
┊🪨fur -text-
┊🪨gerbang -text-
┊🪨glowrainbow -text-
┊🪨gradientavatar -text-
┊🪨graffititext -text-
┊🪨harrypotter -text-
┊🪨lovemessage -text-
┊🪨neonlight -text-
┊🪨sweetcandy -text-
┊🪨summertext -text-
┊🪨woodheart -text-
┊🪨yellowroses -text-
┊🪨wolfmetal -text-
┊🪨underwaterocean -text-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕
  `
  let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
  var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/447441437150` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://youtube.com/@zim-bot` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `http://dripsofc.tech` } }
			]
			tempButtonie(from, anu, '', buttonReplyy)
			}
break
case 'groupmenu': {
ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
buffer = await getBuffer(picak+'GROUP MENU')
ram0 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
anu = `
┌───〔 *_ᴢɪᴍ ʙᴏᴛ ᴠ5_* 〕
┊ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───〔 _*◉ᴀʙᴏᴜᴛ◉*_ 〕
┊❗ɴᴀᴍᴇ :  ${pushname}
┊❕ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊❗ʀᴀᴍ : ${ram0}
┊❗ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊❕ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●

┌───〔 *_◉ɢʀᴏᴜᴘᴍᴇɴᴜ◉_* 〕
┊🪨add -admin-
┊🪨kick -admin-
┊🪨welcome on/off -admin-
┊🪨listpc 
┊🪨listgc
┊🪨groupinfo -admin-
┊🪨antivn -admin-
┊🪨antiphoto -admin-
┊🪨antisticker -admin-
┊🪨antivideo -admin-
┊🪨antilinkall -admin-
┊🪨antiinstagram -admin-
┊🪨antitelegram -admin-
┊🪨antilink -admin-
┊🪨antiyt -admin-
┊🪨antibule -admin-
┊🪨antitiktok -admin-
┊🪨antifacebook -admin-
┊🪨antivirus -admin-
┊🪨antibadword -admin-
┊🪨antiwame -admin-
┊🪨group -options-
┊🪨mute
┊🪨groupinfo
┊🪨truth 
┊🪨dare
┊🪨slot
┊🪨math
┊🪨vote
┊🪨devote
┊🪨cekvote
┊🪨deletevote
┊🪨upvote
┊🪨setsubject -admin-
┊🪨setdesc -admin-
┊🪨setppgroup -admin-
┊🪨tagall -admin-
┊🪨hidetag -admin-
┊🪨ephemeral
┊🪨demote -admin-
┊🪨promote -admin-
┊🪨editinfo -admin-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕
`
let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/447441437150` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://youtube.com/@zim-bot` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `http://dripsofc.tech` } }
			]
			tempButtono(from, anu, '', buttonReplyy)
			}
break
case 'textpromenu': {
ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
ram11 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
anu = `
┌───〔 *_ᴢɪᴍ ʙᴏᴛ ᴠ5_* 〕
┊ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───〔 _*◉ᴀʙᴏᴜᴛ◉*_ 〕
┊❗ɴᴀᴍᴇ :  ${pushname}
┊❕ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊❗ʀᴀᴍ : ${ram11}
┊❗ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊❕ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●

┌───〔 *_◉ᴛᴇxᴛᴘʀᴏᴍᴇɴᴜ◉_* 〕
┊🪨candy -text-
┊🪨christmas -text-
┊🪨3dchristmas -text-
┊🪨sparklechristmas -text-
┊🪨deepsea -text-
┊🪨scifi -text-
┊🪨rainbow2 -text-
┊🪨waterpipe -text-
┊🪨spooky -text-
┊🪨pencil -text-
┊🪨circuit -text-
┊🪨discovery -text-
┊🪨metalic -text-
┊🪨fiction -text-
┊🪨demon -text-
┊🪨transformer -text-
┊🪨berry -text-
┊🪨thunder -text-
┊🪨3dstone2 -text-
┊🪨neonlight -text-
┊🪨glitch -text-
┊🪨harrypotter -text-
┊🪨brokenglass -text-
┊🪨papercut -text-
┊🪨watercolor -text-
┊🪨multicolor -text-
┊🪨neondevil -text-
┊🪨underwater -text-
┊🪨graffitibike -text-
┊🪨snow -text-
┊🪨cloud -text-
┊🪨honey -text-
┊🪨ice -text-
┊🪨fruitjuice -text-
┊🪨biscuit -text-
┊🪨wood -text-
┊🪨chocolate -text-
┊🪨strawberry -text-
┊🪨matrix -text-
┊🪨blood -text-
┊🪨dropwater -text-
┊🪨toxic -text-
┊🪨lava -text-
┊🪨rock -text-
┊🪨bloodglass -text-
┊🪨halloween -text-
┊🪨darkgold -text-
┊🪨joker -text-
┊🪨wicker -text-
┊🪨firework -text-
┊🪨skeleton -text-
┊🪨blackpink -text-
┊🪨sand -text-
┊🪨glue -text-
┊🪨1917 -text-
┊🪨leaves -text-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕
`
const textpromenus = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'TEXTPROMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
var textpromenui = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/447441437150` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://youtube.com/@zim-bot` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `http://dripsofc.tech` } }
			]
			textpromenus(from, anu, '', textpromenui)
			}
break
case 'downloadmenu': {
ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
ram22 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
anu =`
┌───〔 *_ᴢɪᴍ ʙᴏᴛ ᴠ5_* 〕
┊ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───〔 _*◉ᴀʙᴏᴜᴛ◉*_ 〕
┊❗ɴᴀᴍᴇ :  ${pushname}
┊❕ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊❗ʀᴀᴍ : ${ram22}
┊❗ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊❕ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●

┌───〔 *_ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ_* 〕
┊🪨ytmp3 -link-
┊🪨ytmp4 -link-
┊🪨audio  -link-
┊🪨play -query-
┊🪨song -query-
┊🪨play2 -query-
┊🪨mediafire -link-
┊🪨fb -link-
┊🪨fb2 -link-
┊🪨ytsvideo -query-
┊🪨getmusic -query-
┊🪨getvideo -query-
┊🪨savefrom -query-
┊🪨pindl -query-
┊🪨joox -query-
┊🪨tiktok -link-
┊🪨tiktok2 -link-
┊🪨twitter -link-
┊🪨twitter2 -link-
┊🪨tiktok3 -link-
┊🪨tiktok4 -link-
┊🪨ig -link-
┊🪨instagramstory -link-
┊🪨instagramstory2 -link-
┊🪨igimage -link-
┊🪨instagramreal -link-
┊🪨soundcloud -link-
┊🪨ytshorts -link-
┊🪨unma -link-
┊🪨twitteraudio -link-
┊🪨ytsaudio -query-
┊🪨ytsvideo -query-
┊🪨yts2 -query-
┊🪨fbdl -link-
┊🪨fbvideo -link-
┊🪨get -link-
┊🪨tiktok5 -link-
┊🪨titktok3 -link-
┊🪨tiktokmp3 -link-
┊🪨ttmp3 -link-
┊🪨ig2 -link-
┊🪨git -link-
┊🪨ig3 -link-
┊🪨igimage -link-
┊🪨igtv -link-
┊🪨fbmp3 -link-
┊🪨ytdl -link-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕
`
const donlod = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'DOWNLOADMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};

var downloadmenui = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/447441437150` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://youtube.com/@zim-bot` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `http://dripsofc.tech` } }
			]
			donlod(from, anu, '', downloadmenui)
			}
break
case 'photofiltermenu':{
ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
ram30 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
anu =`
┌───〔 *_ᴢɪᴍ ʙᴏᴛ ᴠ5_* 〕
┊ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───〔 _*◉ᴀʙᴏᴜᴛ◉*_ 〕
┊❗ɴᴀᴍᴇ :  ${pushname}
┊❕ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊❗ʀᴀᴍ : ${ram30}
┊❗ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊❕ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●

  
┌───〔 *_ᴘʜᴏᴛꜰɪʟᴛᴇʀᴍᴇɴᴜ_* 〕
┊🪨angie -photo-
┊🪨aria -photo-
┊🪨attic -photo-
┊🪨blackandwhite -photo-
┊🪨chorme1977 -photo-
┊🪨constrastbandw -photo-
┊🪨creamy -photo-
┊🪨duotone -photo-
┊🪨eva -photo-
┊🪨goldenhour -photo-
┊🪨hana -photo-
┊🪨lavander -photo-
┊🪨lemonande -photo-
┊🪨lightleak -photo-
┊🪨lisa -photo-
┊🪨lomo -photo-
┊🪨milk -photo-
┊🪨molly -photo-
┊🪨monochrome -photo-
┊🪨morning -photo-
┊🪨movie -photo-
┊🪨orton -photo-
┊🪨paretro -photo-
┊🪨perfectbandw -photo-
┊🪨plumy -photo-
┊🪨retrolga -photo-
┊🪨ruby -photo-
┊🪨sand -photo-
┊🪨sapphire -photo-
┊🪨sepia -photo-
┊🪨softsepia -photo-
┊🪨solarize -photo-
┊🪨sphinx -photo-
┊🪨venus -photo-
┊🪨japanese -photo-
┊🪨hdr -photo-
┊🪨viewfilter -photo-
┊🪨warmsunset -photo-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕
`
const photofilter2 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'PHOTOFILTERMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/447441437150` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://youtube.com/@zim-bot` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `http://dripsofc.tech` } }
			]
			photofilter2(from, anu, '', buttonReplyy)
			}
break
case 'nsfwmenu':{
  ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
  buffer = await getBuffer(picak+'NSFW MENU')
  ram35 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
  anu =`
┌───〔 *_ᴢɪᴍ ʙᴏᴛ ᴠ5_* 〕
┊ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───〔 _*◉ᴀʙᴏᴜᴛ◉*_ 〕
┊❗ɴᴀᴍᴇ :  ${pushname}
┊❕ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊❗ʀᴀᴍ : ${ram35}
┊❗ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊❕ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●
  
    
┌───〔 *_ɴꜱꜰᴡᴍᴇɴᴜ_* 〕
┊🪨masturbation
┊🪨jahy
┊🪨hentai
┊🪨glasses
┊🪨gangbang
┊🪨foot
┊🪨femdom
┊🪨cum
┊🪨ero
┊🪨cuckhold
┊🪨blowjob
┊🪨bdsm
┊🪨ahegao
┊🪨ass
┊🪨orgy
┊🪨panties
┊🪨pussy
┊🪨yuri
┊🪨thighs
┊🪨tentacles
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕
  `
const nsfmenu = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'NSFMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/447441437150` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://youtube.com/@zim-bot` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `http://dripsofc.tech` } }
			]
			nsfmenu(from, anu, '', buttonReplyy)
			}
break
case 'animemenu':{
  ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
  ram40 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
  buffer = await getBuffer(picak+'ANIME MENU')
  anu =`
┌───〔 *_ᴢɪᴍ ʙᴏᴛ ᴠ5_* 〕
┊ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───〔 _*◉ᴀʙᴏᴜᴛ◉*_ 〕
┊❗ɴᴀᴍᴇ :  ${pushname}
┊❕ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊❗ʀᴀᴍ : ${ram40}
┊❗ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊❕ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●
  
    
┌───〔 *_ᴀɴɪᴍᴇᴍᴇɴᴜ_* 〕
┊🪨cry
┊🪨kill
┊🪨hug
┊🪨pat
┊🪨lick
┊🪨kiss
┊🪨bite
┊🪨yeet
┊🪨neko
┊🪨bully
┊🪨bonk
┊🪨wink
┊🪨poke
┊🪨nom
┊🪨slap
┊🪨smile
┊🪨wave
┊🪨awoo
┊🪨blush
┊🪨smug
┊🪨glomp
┊🪨happy
┊🪨dance
┊🪨cringe
┊🪨cuddle
┊🪨highfive
┊🪨shinobu
┊🪨megumin
┊🪨handhold
┊🪨animeslap
┊🪨animepat
┊🪨animeneko
┊🪨animehug
┊🪨animekiss
┊🪨animewlp
┊🪨animespank
┊🪨shinobu2
┊🪨megumin2
┊🪨awoo2
┊🪨animewall2
┊🪨searchanime -query-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕
  `
const animemenu1 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'ANIMEMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
                  };
  let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
  var buttonReplyy = [
          { urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/447441437150` } },
          { urlButton: { displayText: `SOURCECODE🥦`, url: `https://youtube.com/@zim-bot` } },
          { urlButton: { displayText: `WEBSITE🍎`, url: `http://dripsofc.tech` } }
        ]
        animemenu1(from, anu, '', buttonReplyy)
        }
break
case 'convertmenu': {
  ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
  ram70 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
  buffer = await getBuffer(picak+'CONVERT MENU')
  anu =`
┌───〔 *_ᴢɪᴍ ʙᴏᴛ ᴠ5_* 〕
┊ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───〔 _*◉ᴀʙᴏᴜᴛ◉*_ 〕
┊❗ɴᴀᴍᴇ :  ${pushname}
┊❕ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊❗ʀᴀᴍ : ${ram70}
┊❗ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊❕ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●
  
    
┌───〔 *_ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ_* 〕
┊🪨toimg -quote sticker-
┊🪨togif -quote video-
┊🪨todocument -media-
┊🪨bass -audio-
┊🪨blown -audio-
┊🪨deep -audio-
┊🪨earape -audio-
┊🪨fast -audio-
┊🪨fat -audio-
┊🪨nightcore -audio-
┊🪨reverse -audio-
┊🪨robot -audio-
┊🪨slow -audio-
┊🪨smooth -audio-
┊🪨squirrel -audio-
┊🪨sticker -media-
┊🪨smeme -media-
┊🪨stickermeme -media-
┊🪨swm -sticker-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕
   `
  const convertmenu1 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'CONVERTMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
  let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/447441437150` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://youtube.com/@zim-bot` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `http://dripsofc.tech` } }
			]
			convertmenu1(from, anu, '', buttonReplyy)
			}
break
case 'toolmenu': {
  ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
  buffer = await getBuffer(picak+'TOOL MENU')
  ram90 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
  anu =`
┌───〔 *_ᴢɪᴍ ʙᴏᴛ ᴠ5_* 〕
┊ᴡᴇʟᴄᴏᴍᴇ
└───────────●


┌───〔 _*◉ᴀʙᴏᴜᴛ◉*_ 〕
┊❗ɴᴀᴍᴇ :  ${pushname}
┊❕ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊❗ʀᴀᴍ : ${ram90}
┊❗ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊❕ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●
  
    
┌───〔 *_ᴛᴏᴏʟᴍᴇɴᴜ_* 〕
┊🪨ip ->-
┊🪨ipdomain -domain name-
┊🪨codecolor -text-
┊🪨hackermaker -pic url-
┊🪨checknumber -number-
┊🪨veriphone -number-
┊🪨weather -place-
┊🪨attp -text-
┊🪨ssweb-hp -url-
┊🪨shortlink -url-
┊🪨ssweb-pc -url-
┊🪨shortlinkcuttly -url-
┊🪨shortlinkisgd -url-
┊🪨brainly -query-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕
  `
const toolmenu1 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'TOOLMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
  let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/447441437150` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://youtube.com/@zim-bot` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `http://dripsofc.tech` } }
			]
			toolmenu1(from, anu, '', buttonReplyy)
			}
break
case 'searchmenu':{
  ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
  buffer = await getBuffer(picak+'SEARCH MENU')
  ram200 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
  anu =`
┌───〔 *_ᴢɪᴍ ʙᴏᴛ ᴠ5_* 〕
┊ᴡᴇʟᴄᴏᴍᴇ
└───────────●


┌───〔 _*◉ᴀʙᴏᴜᴛ◉*_ 〕
┊❗ɴᴀᴍᴇ :  ${pushname}
┊❕ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊❗ʀᴀᴍ : ${ram200}
┊❗ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊❕ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●

┌───〔 *_ꜱᴇᴀʀᴄʜᴍᴇɴᴜ_* 〕
┊🪨lyrics -query-
┊🪨linkwa -query-
┊🪨apk -query-
┊🪨happymod -query-
┊🪨apkupro -query-
┊🪨google -query-
┊🪨wiki -query-
┊🪨ytsearch -query-
┊🪨recipe -query-
┊🪨playstore -query-
┊🪨wikimedia -query-
┊🪨news -query-
┊🪨news2 -query-
┊🪨animee -query-
┊🪨anime -query-
┊🪨amino -query-
┊🪨googleimage -query-
┊🪨apkdone -query-
┊🪨githubsearch -query->
┊🪨igsearch -username-
┊🪨googlenews -query-
┊🪨gnews -query-
┊🪨wallpaper -query-
┊🪨searchgroups -query-
┊🪨qoutesanime -query-
┊🪨gmsarena -query-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕

  `
  const searchmenu11 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'SEARCHMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
  let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/447441437150` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://youtube.com/@zim-bot` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `http://dripsofc.tech` } }
			]
			saerchmenu11(from, anu, '', buttonReplyy)
			}
break
case 'ephotomenu': {
ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
buffer = await getBuffer(picak+'EPHOTO MENU')
ram250 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
anu =`
┌───〔 *_ᴢɪᴍ ʙᴏᴛ ᴠ5_* 〕
┊ᴡᴇʟᴄᴏᴍᴇ
└───────────●


┌───〔 _*◉ᴀʙᴏᴜᴛ◉*_ 〕
┊❗ɴᴀᴍᴇ :  ${pushname}
┊❕ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊❗ʀᴀᴍ : ${ram250}
┊❗ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊❕ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●

┌───〔*_◉ᴇᴘʜᴏᴛᴏ-ᴍᴇɴᴜ◉_*〕
┊🪨3d-wood
┊🪨angels-wings
┊🪨snake-text
┊🪨redhot-metal2
┊🪨sandsummer-beach
┊🪨snow-text
┊🪨water-3d
┊🪨water-effect
┊🪨wet-glass
┊🪨status-mood2
┊🪨summerysand
└───────────●
`
const ephotomenu11 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'EPHOTMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
                  };
let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/447441437150` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://youtube.com/@zim-bot` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `http://dripsofc.tech` } }
			]
			ephotomenu11(from, anu, '', buttonReplyy)
			}
break



 default:
   if (budy.startsWith('=>')) {
  if (!isCreator) return reply(global.owner)
  function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
  if (sat == undefined) {
 bang = util.format(sul)
  }
  return reply(bang)
  }
  try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
reply(String(e))
  }
   }

   if (budy.startsWith('>')) {
  if (!isCreator) return reply(global.owner)
  try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
  } catch (err) {
await reply(String(err))
  }
   }

   if (budy.startsWith('$')) {
  if (!isCreator) return reply(global.owner)
  exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
  })
   }

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
  this.anonymous = this.anonymous ? this.anonymous : {}
  let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
  if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
  contextInfo: {
 ...m.msg.contextInfo,
 forwardingScore: 0,
 isForwarded: true,
 participant: other
  }
} : {})
  }
  return !0
   }
   if (antiToxic)
   if (bad.includes(zimbotincv3)) {
   if (m.text) {
   zimbotv3 = `*▊▊▊ANTIBAD WORDS▊▊▊*\n\n*Lucky you, you are admin*`
   if (isAdmins) return reply(zimbotv3)
   if (m.key.fromMe) return reply(zimbotv3)
   if (isCreator) return reply(zimbotv3)
   kice = m.sender
   await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
   ZimBotInc.sendMessage(from, {text:`*▊▊▊ANTIBAD WORDS▊▊▊*\n\n@${kice.split("@")[0]} *was kicked because of being rude to others in this group*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})}
   }
if (isCmd && budy.toLowerCase() != undefined) {
    if (m.chat.endsWith('broadcast')) return
    if (m.isBaileys) return
    let msgs = global.db.database
    if (!(budy.toLowerCase() in msgs)) return
    ZimBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}


    } catch (err) {
m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
