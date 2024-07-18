const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "prince7890@cluster0.f6igq4n.mongodb.net"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_26_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICA1MSxcbiAgICAgICAgMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOSxcbiAgICAgICAgNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzOCxcbiAgICAgICAgOSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNixcbiAgICAgICAgNzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjksXG4gICAgICAgIDM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTksXG4gICAgICAgIDk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDk1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDcxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2LFxuICAgICAgICAzMixcbiAgICAgICAgODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM1LFxuICAgICAgICA0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgODAsXG4gICAgICAgIDExMixcbiAgICAgICAgMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU2FiN09mOHIxS0ZvVVpJRkdnVTVBVmJocTZQdXZ0MnFKQlpBN0g5SFlMcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUlNjVnlVZm1RV2l0R29FZmhKc1lUUVwiLFxuICBcInBob25lSWRcIjogXCI0NjQxNDIxOS00NWI0LTQ4MmItYjY1OS04NmVlZDY3Y2JiZDRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICAxOTEsXG4gICAgICA0OCxcbiAgICAgIDE3NCxcbiAgICAgIDY1LFxuICAgICAgMTEzLFxuICAgICAgMSxcbiAgICAgIDE1NSxcbiAgICAgIDE0NCxcbiAgICAgIDcsXG4gICAgICAxNzQsXG4gICAgICAyMTYsXG4gICAgICAxODIsXG4gICAgICAxNCxcbiAgICAgIDk5LFxuICAgICAgMjI0LFxuICAgICAgMTY1LFxuICAgICAgMjM0LFxuICAgICAgMTQ2LFxuICAgICAgNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI4LFxuICAgICAgNDgsXG4gICAgICAyNSxcbiAgICAgIDE4NixcbiAgICAgIDM1LFxuICAgICAgNDIsXG4gICAgICAxMzcsXG4gICAgICAxOTUsXG4gICAgICA1NyxcbiAgICAgIDg4LFxuICAgICAgMjI3LFxuICAgICAgMjIxLFxuICAgICAgMjQwLFxuICAgICAgMjE3LFxuICAgICAgNzAsXG4gICAgICAxMjYsXG4gICAgICAxMTAsXG4gICAgICAxNTUsXG4gICAgICA2OSxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3WDdENEdTM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjU4NTMxOTcwOjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTQwMjczMDQ4ODIzNTk6NDRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFgraEY4UXlMemx0QVlZRENBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuc08yelBZZHFpQU1zVWUyOHRRelFWRHh3SVpYSEp2YWR2L2lWczJsNVNJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNlangxWDVpamNvVC8wQW1TUTZrc1pEeUNZcXRCRSsrSEVIV3J2aHJqVkJzTnFBNEp1dlFqWnVQTEdCaWF5ekRTQzBPRVVGbm93QlcyNWJvR1MwWkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjY1d255TEREZzhHWnQyYmMrSEYyQUZzTElFMmJvNXYyWHc0dzFHbU1SbXpZbTlid0VEc3R4OWw0NmMrd2xZN20xOTlreGhpRi9jZkt2bWt3RkRjTmdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI1ODUzMTk3MDo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzMjcxODAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUJBQUFCaEVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQkFBQUJoRS5qc29uIjogIntcImtleURhdGFcIjpcInk5Uk0zdStyYjdqZTdlTG5VSXFYanVqOG5uaWN4Q013NUNNYktneHl1aHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk5MzExMTU1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxNl19LFwidGltZXN0YW1wXCI6XCIxNzE2MzY4ODIxMTYyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
