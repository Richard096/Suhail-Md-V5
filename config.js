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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_57_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDczLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM5LFxuICAgICAgICA5NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTExLFxuICAgICAgICA4MyxcbiAgICAgICAgNzksXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDM1LFxuICAgICAgICA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDU5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg0LFxuICAgICAgICA5MixcbiAgICAgICAgNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0LFxuICAgICAgICA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNixcbiAgICAgICAgMjUzLFxuICAgICAgICA2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDcsXG4gICAgICAgIDc4LFxuICAgICAgICAzMixcbiAgICAgICAgMjM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgNTksXG4gICAgICAgIDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MixcbiAgICAgICAgMTEwLFxuICAgICAgICA1MixcbiAgICAgICAgODQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDg1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDgyLFxuICAgICAgICA0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAzLFxuICAgICAgICA5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzksXG4gICAgICAgIDExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICA0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgsXG4gICAgICAgIDYzLFxuICAgICAgICA4OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDc5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgODQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDUyLFxuICAgICAgICAzLFxuICAgICAgICAxOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDk2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1zMzc3K0VnUkRTbzZOTWhKTGp2dUVFWnZaNU96bmNxUm8rbjd1QllOOFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFvSllHREVpVGpleDZuYjFSUy1vTWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzgwMGY0NWItMDFkYy00ZDI0LWExZDUtYzY1YWEyM2YyYjE0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgMTgzLFxuICAgICAgMTQ1LFxuICAgICAgMjI0LFxuICAgICAgMTIxLFxuICAgICAgMjQ2LFxuICAgICAgNjMsXG4gICAgICAxNzgsXG4gICAgICAyMjIsXG4gICAgICAyMzcsXG4gICAgICAyNTIsXG4gICAgICAyMjIsXG4gICAgICAxMTksXG4gICAgICAxNzQsXG4gICAgICAxOTcsXG4gICAgICAxMSxcbiAgICAgIDE1NCxcbiAgICAgIDE5NCxcbiAgICAgIDE3MCxcbiAgICAgIDEwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OSxcbiAgICAgIDE1NCxcbiAgICAgIDEyMixcbiAgICAgIDEyMixcbiAgICAgIDcwLFxuICAgICAgMjIwLFxuICAgICAgNjUsXG4gICAgICAxODgsXG4gICAgICAyMTIsXG4gICAgICAxMzIsXG4gICAgICA0MSxcbiAgICAgIDEwNyxcbiAgICAgIDE0NCxcbiAgICAgIDUsXG4gICAgICAxMTAsXG4gICAgICA4NSxcbiAgICAgIDE1OCxcbiAgICAgIDY4LFxuICAgICAgNzAsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyTEFRQUNQQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxMzE1NTQ3NjoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM3MTQ3MTM5NDA0MDI0OjIxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lQRDlZRUVFTVBTMnJzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ09mMWY1dTVPQ2E5YXIzeVhreThmS0RUdU51RWpGUFRUZXNaZ0FpVWRHaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3UkdIcWxnSFUwYllkNlRZbWt0SzJIY3ZWT0RwR2JRVHlCd013RGdWNHVBTUw2M0I1Tm5yS3FrdVpBaXpxK0VHSW9teWxadnJGY3VZdHMxSjFwaUJDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSbmdKdHJ4YVR1OU9PN1dIcUhYUFJKV0R0alBaZVBCL2ZWZUFLNkxxY1NYTmJnUzQ3MGdDNzh6TXUrTE1rY2c5WGtSeWp0RkVwTlFuMXEyaXNIcU5EQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDEzMTU1NDc2OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTgyOTgzMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
