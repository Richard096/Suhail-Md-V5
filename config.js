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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_46_01_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA2NyxcbiAgICAgICAgNDksXG4gICAgICAgIDM0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDMzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOSxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDAsXG4gICAgICAgIDI4LFxuICAgICAgICAzNixcbiAgICAgICAgMTE3LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDk4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDksXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDcwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDQ1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDk1LFxuICAgICAgICA1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1MnFNNEZDZW5GY0dkOG85Zkl3bnV3c2x1WjhVdmlWNjA4RzVobzZCVURnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQU1RZS1dzdFM5aTRhMWdseGY5elNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgwNjU4NzJkLWRmOTYtNDk0OC1iMTIwLWI4NDNiZTkyYWVkMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICA4LFxuICAgICAgNTUsXG4gICAgICAyNTQsXG4gICAgICAyMzMsXG4gICAgICAxMTEsXG4gICAgICAzNixcbiAgICAgIDE3LFxuICAgICAgMTUwLFxuICAgICAgMTYwLFxuICAgICAgMjM1LFxuICAgICAgMjA0LFxuICAgICAgMTk3LFxuICAgICAgMTkxLFxuICAgICAgMjExLFxuICAgICAgMTMyLFxuICAgICAgMjA1LFxuICAgICAgODgsXG4gICAgICAxNjMsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQxLFxuICAgICAgMjMwLFxuICAgICAgMTgzLFxuICAgICAgNCxcbiAgICAgIDk5LFxuICAgICAgMjI0LFxuICAgICAgMTUxLFxuICAgICAgMTAyLFxuICAgICAgOCxcbiAgICAgIDIwOSxcbiAgICAgIDEyNSxcbiAgICAgIDI1NSxcbiAgICAgIDMyLFxuICAgICAgMTQ3LFxuICAgICAgMjUzLFxuICAgICAgNTAsXG4gICAgICAxMjEsXG4gICAgICAxMDksXG4gICAgICAyMjksXG4gICAgICAxNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjMyU0xLVkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjI3NDQ2MzY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmrPwnZqr8J2QkvCdmrvwnZq18J2aqiDwnZCK8J2asPCdkIvwnZCL8J2atfCdmqog8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr4oGpXCIsXG4gICAgXCJsaWRcIjogXCIzOTcxMTg1NDg3NDY3NToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09iYjRaWUNFSitpMnJ3R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNUNxRXJRamQyalllMi8vM1hUOE9XVXVob1h0ZDZtdFBZZ3NqRzBsYzBGYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEckozcDhtS1JJWFpKOFJQSEw3MDlqcEtLTVkxcDVTNENDU0VnU1ZQRGV2K2NITDIrZ1BVWGMxMjlHejZlWE43U2FHMEt6a3N2eXh6THRkbndnQitDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIveWVMS0gwWGt1MkhDRmdZSXhScUIxK1E0VFVmZEp3YlJKbE1Xcjk3YXZzT1RtQUxXR2hVSVpQaE5RcncvbFRFY2RkYko1ZzVJSXNzLy96eWFrUjZCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTYyNzQ0NjM2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNzkyMDgwNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZFU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkVTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSHJiVkVDakowZ1NCT2x0Z3l2UmRKU1Jva1FBVzdCUzRBVXdyNmdndFAycz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1ODQ2MDkyNTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNzkyMDgxMTcwMFwifSIKfQ=="  // PUT your SESSION_ID 


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
