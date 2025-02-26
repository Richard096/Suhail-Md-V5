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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_45_02_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU2LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMzksXG4gICAgICAgIDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MixcbiAgICAgICAgMjUzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDcwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNixcbiAgICAgICAgMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNixcbiAgICAgICAgMjI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDg1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMixcbiAgICAgICAgMTc3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjV0alBVcW52T3JzbzlSVEpzRzZrancvTUI0aU9xY3ozMkNhWlNZWFBDWTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdsYzZlWVRJUXRDYVFXaWtqRlZ5T1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDIzZTdlMmUtOGRhYS00YjNkLTgwNTMtZmVlOWMxOTczYTk1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MyxcbiAgICAgIDIxNyxcbiAgICAgIDM1LFxuICAgICAgMjE3LFxuICAgICAgMTA4LFxuICAgICAgMTA1LFxuICAgICAgMjIxLFxuICAgICAgOTMsXG4gICAgICA5MSxcbiAgICAgIDExMyxcbiAgICAgIDE4OSxcbiAgICAgIDIyOCxcbiAgICAgIDE5LFxuICAgICAgNzMsXG4gICAgICAxNDUsXG4gICAgICAyMjQsXG4gICAgICAyNTMsXG4gICAgICAzMixcbiAgICAgIDU1LFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ3LFxuICAgICAgMjE5LFxuICAgICAgMTU1LFxuICAgICAgMTk4LFxuICAgICAgNjIsXG4gICAgICAyMjUsXG4gICAgICAxNjcsXG4gICAgICAxNDMsXG4gICAgICA2NyxcbiAgICAgIDk5LFxuICAgICAgMjksXG4gICAgICAyMTMsXG4gICAgICAxODUsXG4gICAgICAxOTQsXG4gICAgICAyMTcsXG4gICAgICAxMjUsXG4gICAgICAxMDksXG4gICAgICAyMjQsXG4gICAgICAyMDUsXG4gICAgICAxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTUEZFUkJBSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxMzE1NTQ3NjozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM3MTQ3MTM5NDA0MDI0OjM1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lqRDlZRUVFSkdwKzcwR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ09mMWY1dTVPQ2E5YXIzeVhreThmS0RUdU51RWpGUFRUZXNaZ0FpVWRHaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRdUxJaGFPR1pyeW83ZXdkTDVyK0VsVW5YMjFUdW0xdURTN3pwbENRV3lRVWZpRzB6VXNzSVhQakhoemRqTHR6TWNaUlNPOXBncnFhYzEyazZJa0ZDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvMkM5OWllUFdNSTF0L3hWWmJvNFdzbW45aHkwSzYwTGRKWExIVXZ0ckN1aWhBRkxTdVFtVTg4RkJuZSsyaWhOL1B6SkMyWms3SnVzazJvWG5nOC9pdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDEzMTU1NDc2OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MDU1OTUxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhKRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSEpGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiengycTFBc25LQTMzUk53Nmw3bzl0d2h4N0xLdGZGNkxBVzlRSXF5bE1PQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDc3NzY0NDg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDA1NTc0OTkxNTFcIn0iCn0="  // PUT your SESSION_ID 


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
