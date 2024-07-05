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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_18_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAzNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MixcbiAgICAgICAgODIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM1LFxuICAgICAgICA3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNixcbiAgICAgICAgMjE0LFxuICAgICAgICAzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NixcbiAgICAgICAgNjAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDc5LFxuICAgICAgICA4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDkwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NCxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMixcbiAgICAgICAgNzYsXG4gICAgICAgIDI3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc4LFxuICAgICAgICA2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMSxcbiAgICAgICAgNSxcbiAgICAgICAgODcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5LFxuICAgICAgICAxLFxuICAgICAgICA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNixcbiAgICAgICAgMjIxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE4LFxuICAgICAgICA3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NixcbiAgICAgICAgMTA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVxV2RNSUx0ZlJUTFdORytRV2dBc0RlMjBWWm5BUVQzRjZvRExEWFErYnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInE0U3FwOEdHU2tlUG1FZk91eWJKdHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTc0YWM0OTctYzViYy00YWFkLWE5MTAtODE2NDVkNDc1ZTA5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OSxcbiAgICAgIDgzLFxuICAgICAgNzcsXG4gICAgICAxMTQsXG4gICAgICAyNTIsXG4gICAgICAyMDAsXG4gICAgICAyMDUsXG4gICAgICAyNDcsXG4gICAgICAxMDYsXG4gICAgICAyMTksXG4gICAgICAxODIsXG4gICAgICAzMSxcbiAgICAgIDI0OCxcbiAgICAgIDE1NixcbiAgICAgIDg4LFxuICAgICAgMjQ0LFxuICAgICAgMTIzLFxuICAgICAgMjA0LFxuICAgICAgMTk0LFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgOCxcbiAgICAgIDM3LFxuICAgICAgNzksXG4gICAgICA0LFxuICAgICAgMjE2LFxuICAgICAgMTksXG4gICAgICAxNjQsXG4gICAgICA1OSxcbiAgICAgIDExOCxcbiAgICAgIDIyMyxcbiAgICAgIDIwMCxcbiAgICAgIDI0OSxcbiAgICAgIDEsXG4gICAgICA3NCxcbiAgICAgIDEyMCxcbiAgICAgIDE1MSxcbiAgICAgIDE3MyxcbiAgICAgIDQxLFxuICAgICAgMTY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxDUlREUUM3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNTg1MzE5NzA6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNDAyNzMwNDg4MjM1OTo0MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMWCtoRjhRMHZTZXRBWVlDQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5zTzJ6UFlkcWlBTXNVZTI4dFF6UVZEeHdJWlhISnZhZHYvaVZzMmw1U0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZDZvNXJOZ0ppbVZITTlmUzVKdS9XU3FDdGw3TU5YeHhsUzBzTmt1SE5JVnl1M2NoSWYxVjZ4SDgyOE9hTFk4bEJ6QXFLQURWeko2ZngrVW1BMDR6QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMWhlT0xVMklHRytTTDFvZXpyalZMRWg3ZkNjR3BJTFhrdWttQnFOTW9RQlR6N3hVZ2hXVS9VZVlTMEVxQkFNTU5RL1Q3bC9MaDZEdGJQSUJNN3djQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjU4NTMxOTcwOjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE3MTA5MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQkFBQUJoRVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFCQUFBQmhFLmpzb24iOiAie1wia2V5RGF0YVwiOlwieTlSTTN1K3JiN2plN2VMblVJcVhqdWo4bm5pY3hDTXc1Q01iS2d4eXVodz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTkzMTExNTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDE2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYzNjg4MjExNjJcIn0iCn0="  // PUT your SESSION_ID 


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
