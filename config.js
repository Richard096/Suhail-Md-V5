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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_17_01_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA0LFxuICAgICAgICAzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODksXG4gICAgICAgIDE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDExNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkwLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTExLFxuICAgICAgICA4MixcbiAgICAgICAgMjExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDg2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NSxcbiAgICAgICAgNyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICA5OSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0LFxuICAgICAgICA0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg0LFxuICAgICAgICA4NixcbiAgICAgICAgMjA2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDc0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg3LFxuICAgICAgICA3MixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXTXp6Wk1MTEZtVjdkWVRncUNYVDY0aHl3MlNPL0JVaUpZQkpGSW5EVWU4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEQk1mMEIzeFFSeXQxejQ4N010WTFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU1M2UyODAwLTQwMjAtNGQ4MC05ZDI1LTE3Mjk3ODUzN2NjN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICAxODEsXG4gICAgICAxNDMsXG4gICAgICAxNDQsXG4gICAgICA2MyxcbiAgICAgIDExMixcbiAgICAgIDE4NixcbiAgICAgIDQwLFxuICAgICAgMjQ1LFxuICAgICAgODgsXG4gICAgICAxOSxcbiAgICAgIDQsXG4gICAgICAyMDEsXG4gICAgICAxOTYsXG4gICAgICA1NCxcbiAgICAgIDE4OCxcbiAgICAgIDEwMyxcbiAgICAgIDIxLFxuICAgICAgMjAyLFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc5LFxuICAgICAgMjM1LFxuICAgICAgNjgsXG4gICAgICA2MCxcbiAgICAgIDU4LFxuICAgICAgMTQ0LFxuICAgICAgNzksXG4gICAgICAyMTYsXG4gICAgICAxMDksXG4gICAgICAxNzQsXG4gICAgICAyNDYsXG4gICAgICA1NyxcbiAgICAgIDEyMyxcbiAgICAgIDE0NixcbiAgICAgIDQwLFxuICAgICAgMTc4LFxuICAgICAgMTYzLFxuICAgICAgMjEwLFxuICAgICAgMTM4LFxuICAgICAgMTM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJRQ0EzOTNRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDEzMTU1NDc2OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzcxNDcxMzk0MDQwMjQ6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVhEOVlFRUVLeVd6N3dHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDT2YxZjV1NU9DYTlhcjN5WGt5OGZLRFR1TnVFakZQVFRlc1pnQWlVZEdrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZRU1I0Ri9yb21hRTVwT0RjS3c5MVZBcWNlT2FYcDhhYmsxU0FVd3MycjRKQ2tUV0V5bkZ3NzYweGdmR1hnOVd1S3poNFVwZW1iUjZGeGt1T0ZsZkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFGWm1iN25zQWVDZnc1UStpN2h4QUE3MG9ZWjlkMVhobUJOSWwxUVRrRTY5OHNMbjNOemhIRWI0b2JGNmk3VDRwakFtc1lRYS9TVTBraUtLTStLNUR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTMxNTU0NzY6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM3NzM5MDU3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
