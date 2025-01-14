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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_37_01_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc4LFxuICAgICAgICA3MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDczLFxuICAgICAgICA0NixcbiAgICAgICAgNjksXG4gICAgICAgIDkyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDc1LFxuICAgICAgICA3MCxcbiAgICAgICAgNTksXG4gICAgICAgIDk0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNixcbiAgICAgICAgMjE0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzksXG4gICAgICAgIDEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyOSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU0LFxuICAgICAgICA5NixcbiAgICAgICAgMTc3LFxuICAgICAgICA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgsXG4gICAgICAgIDI4LFxuICAgICAgICAyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDUzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMCxcbiAgICAgICAgMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNixcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImUwVWp6emtITFZic2tmemNOY2h1K3VlZVMyQnA5VTBxUVh3YXpaMUxTTEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldsUnItbExDUXV5NGFqOEp6VERMVGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWVlOGU2YmYtMWNmOS00ZGNkLTkzMjQtNTBlNGJiYTkyYWQ2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY1LFxuICAgICAgMjIxLFxuICAgICAgMTE5LFxuICAgICAgMTkyLFxuICAgICAgMTQzLFxuICAgICAgNzYsXG4gICAgICAxMzIsXG4gICAgICAxMTcsXG4gICAgICAyNDYsXG4gICAgICAyNDgsXG4gICAgICAyNDAsXG4gICAgICAxMTIsXG4gICAgICA4NCxcbiAgICAgIDg4LFxuICAgICAgMjEyLFxuICAgICAgNjUsXG4gICAgICAxMTIsXG4gICAgICAyMTAsXG4gICAgICA3MyxcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OSxcbiAgICAgIDE0MixcbiAgICAgIDE3MSxcbiAgICAgIDE4MCxcbiAgICAgIDIzOCxcbiAgICAgIDE3OSxcbiAgICAgIDE0MixcbiAgICAgIDQ1LFxuICAgICAgNjQsXG4gICAgICAyNDUsXG4gICAgICAxODksXG4gICAgICAxMjYsXG4gICAgICA3NixcbiAgICAgIDE2LFxuICAgICAgMjUzLFxuICAgICAgMjM3LFxuICAgICAgMTgyLFxuICAgICAgODIsXG4gICAgICAxOTIsXG4gICAgICAxNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkpWU0ZLNlBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTMxNTU0NzY6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNzE0NzEzOTQwNDAyNDoyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJVEQ5WUVFRUs3T203d0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNPZjFmNXU1T0NhOWFyM3lYa3k4ZktEVHVOdUVqRlBUVGVzWmdBaVVkR2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNmx0czBxTktjWk1ob1JEa3hHbmZFU0Z6VUp4SWpueDM1cUFTYWwwdHVoeGpRRlpMcFUyYmtQVzBGNmpmUzNuYnZUeHZkeW9PQkNUQUJmMlY2NE00QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTTY3aitqWVIwWGlsVW5RMm5qZEpwQmdtbzEvU2t2MmNtd3B6dzJHaDh0U0VYTFJQaFJ0Nzc2NUx2ZEtmUkxaSEVKTXFRNWxTc2pvajloK05LTEFBQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxMzE1NTQ3NjoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzY4OTQyNThcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
