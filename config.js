const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ogemdidavid1@gmail.com"
global.location="Imo, Nigeria"


global.mongodb= process.env.MONGODB_URI || "null"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "`Hail Amy you sluts`" 


global.devs = "2347025836462" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347040694847";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2347040694847";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2347040694847";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347040694847,2347040694847";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_45_02_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk1LFxuICAgICAgICA5MyxcbiAgICAgICAgODQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDMyLFxuICAgICAgICAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTMsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg2LFxuICAgICAgICA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjExLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2LFxuICAgICAgICA0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgNzksXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQzLFxuICAgICAgICA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI4LFxuICAgICAgICAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDg5LFxuICAgICAgICAzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MixcbiAgICAgICAgMTc0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MixcbiAgICAgICAgODEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDgzLFxuICAgICAgICA2MixcbiAgICAgICAgMTAxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWjg1Wk84SU5EaU1MNFI1a3lEVXphWlFuOG8waGxxMjdDTElOSno0YVA5UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY1VUbThVZTJTYVNVZDJOSXM0eEU5QVwiLFxuICBcInBob25lSWRcIjogXCI3MWQ0YjFmNS1iNzczLTRkMDctODg5My1hMTc0YmVmYTM2Y2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMixcbiAgICAgIDIwNyxcbiAgICAgIDIxNyxcbiAgICAgIDEzMyxcbiAgICAgIDAsXG4gICAgICAxMjUsXG4gICAgICA5OCxcbiAgICAgIDIyMSxcbiAgICAgIDg4LFxuICAgICAgMTczLFxuICAgICAgMTQ0LFxuICAgICAgMTE1LFxuICAgICAgMTA2LFxuICAgICAgMjMwLFxuICAgICAgMixcbiAgICAgIDI0NixcbiAgICAgIDUwLFxuICAgICAgMTU2LFxuICAgICAgMjU1LFxuICAgICAgMTA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNCxcbiAgICAgIDEyNCxcbiAgICAgIDM1LFxuICAgICAgMjQsXG4gICAgICA2NixcbiAgICAgIDE4LFxuICAgICAgNzEsXG4gICAgICAxNTIsXG4gICAgICAxNzYsXG4gICAgICAyNSxcbiAgICAgIDEyOCxcbiAgICAgIDg3LFxuICAgICAgMTQwLFxuICAgICAgMTYwLFxuICAgICAgNjcsXG4gICAgICAyMzMsXG4gICAgICAxOTEsXG4gICAgICA2NixcbiAgICAgIDE0MyxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjQ4MVdLTVdWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDEzMTU1NDc2OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzcxNDcxMzk0MDQwMjQ6MzFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZEOVlFRUVNYWp6cjBHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDT2YxZjV1NU9DYTlhcjN5WGt5OGZLRFR1TnVFakZQVFRlc1pnQWlVZEdrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1SZTFiOXRkelFZR3pBVCtrZDdvWDdwMFlHSnlMMlJkdmVMNk5vZXhaTWxxUFVxU1gzcEFhQUhuMTA3L1dQb3pXY0hJaU9ldDBubVpkRVRjMkhGMkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZyRE5LZjVuS1hvK05Yd2puR0ZpTERJNXhkRTM0cEdybEpFcWd2dEMvMFhLTXI0cTZEeDhMbUE4SG0raDNXVTYvUmNReVpDZFRJNFZ6NzVmVFdPK2p3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTMxNTU0NzY6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM5ODIxNTE2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 POWERED BY BLESSED-MD 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • BLESSED TECH』*\n youtube.com/hailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "٭*AMY𖤐",
  packname: process.env.PACK_NAME || "HAIL AMY SLUTS",
  botname : process.env.BOT_NAME  || "`HAIL AMY SLUTS`",
  ownername:process.env.OWNER_NAME|| "`SEXY AMY`",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "BLESSED"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
