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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_33_02_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDgyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICA0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEwLFxuICAgICAgICA1MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg0LFxuICAgICAgICA3NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc5LFxuICAgICAgICA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwLFxuICAgICAgICA5OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgODksXG4gICAgICAgIDEwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI3LFxuICAgICAgICA3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTksXG4gICAgICAgIDU3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk4LFxuICAgICAgICA2OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDc5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMixcbiAgICAgICAgMTYxLFxuICAgICAgICA0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDk1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnODRDd1doOUpyelBwUUZUWU1aRTM3TU5CdmxGZlNCSTBZT0pxU2RlUDJFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWT2lZQU9keFFyeUtNZ3VGTnJURE5BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE0YmM1OGIyLTVkYjQtNDdlMi1hMzEwLTgwZmRiYWU2NDJjMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MSxcbiAgICAgIDQsXG4gICAgICA0MixcbiAgICAgIDU3LFxuICAgICAgNDIsXG4gICAgICAxMjEsXG4gICAgICAyMjQsXG4gICAgICAxNzUsXG4gICAgICAyMDEsXG4gICAgICAxMTksXG4gICAgICAxNjEsXG4gICAgICAxNjcsXG4gICAgICA4MyxcbiAgICAgIDgwLFxuICAgICAgODIsXG4gICAgICAxMDYsXG4gICAgICAyMDIsXG4gICAgICAxMjgsXG4gICAgICAzNSxcbiAgICAgIDU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NSxcbiAgICAgIDI0MCxcbiAgICAgIDE2MSxcbiAgICAgIDE0NCxcbiAgICAgIDI0LFxuICAgICAgMTM4LFxuICAgICAgMjQ2LFxuICAgICAgNzAsXG4gICAgICA4MixcbiAgICAgIDQ2LFxuICAgICAgMjE0LFxuICAgICAgNzksXG4gICAgICAyMTIsXG4gICAgICAxMjMsXG4gICAgICA2NixcbiAgICAgIDExNCxcbiAgICAgIDI4LFxuICAgICAgMTk0LFxuICAgICAgNjAsXG4gICAgICAyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGVFhWSjY2RVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxMzE1NTQ3NjozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM3MTQ3MTM5NDA0MDI0OjMwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0liRDlZRUVFTHZPajcwR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ09mMWY1dTVPQ2E5YXIzeVhreThmS0RUdU51RWpGUFRUZXNaZ0FpVWRHaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuaEFMSkxBVTFBSVpuWTNNRGR1R1FCdTB3Y3dwYmlDZDFZbzJQYk55bVdkV2Vod1lsSG5acmpBQ1Y1Z2FoTVphTXZHWjlFUGt4dGRFbzBXeW9zRFFEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqNDJGQ3RFSU4zUTNIcFc3L3BMWW9uTEl3WXI1Qzl4SzlFNThsd252NU43ajBhYXI2dER0YllmYU4rcG5ReXJaUENSTWxOMDhTQWU0RElhbUwrK1NBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDEzMTU1NDc2OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczODc5NDgxNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
