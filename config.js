const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_23_04_02_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDY4LFxuICAgICAgICAxOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDQyLFxuICAgICAgICA0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDcyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDUwLFxuICAgICAgICA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDk4LFxuICAgICAgICA1NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAxLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgODIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMixcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgODEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMixcbiAgICAgICAgMjExLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVmxFclppUkVObzRHSkI0MVd6Y1BuVDdTejBiY0J5RzFDR21wZWl6MHBkZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib3F2dy1FbmpScENMTmZQNWk4MGpkQVwiLFxuICBcInBob25lSWRcIjogXCJjYmRkZDUxMy1kMDQ2LTQ1OGQtOGJhOC1kZjBjYWNhNjhiNDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU0LFxuICAgICAgMTU3LFxuICAgICAgMTc0LFxuICAgICAgMjQ5LFxuICAgICAgMjIwLFxuICAgICAgMTc1LFxuICAgICAgMTI0LFxuICAgICAgODQsXG4gICAgICAxNzksXG4gICAgICAyLFxuICAgICAgNTMsXG4gICAgICA5NCxcbiAgICAgIDIxNSxcbiAgICAgIDQyLFxuICAgICAgOTUsXG4gICAgICAxNTYsXG4gICAgICAxMzgsXG4gICAgICA1MSxcbiAgICAgIDM1LFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg1LFxuICAgICAgMTU3LFxuICAgICAgMjI1LFxuICAgICAgMTMxLFxuICAgICAgMTgwLFxuICAgICAgMTE2LFxuICAgICAgMjUyLFxuICAgICAgMTgwLFxuICAgICAgMTI1LFxuICAgICAgNDIsXG4gICAgICAwLFxuICAgICAgMjIxLFxuICAgICAgMixcbiAgICAgIDEzNixcbiAgICAgIDExMixcbiAgICAgIDEzMyxcbiAgICAgIDIwOCxcbiAgICAgIDIyOCxcbiAgICAgIDE4MixcbiAgICAgIDEwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJURjhXMVo0VFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTMzMzk5NzY2OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjg0OTE3MjY4MzU3MzM6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjZnemVBQkVOQ3Y2YjBHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqRmE5M3ZFUkpLbTE0cXBBT0tMUFNDSnVoOEZEN280MEpMMXF4eXM4L2pnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFpVFQxaGE0QXZKZS9yRVZOQWkvVWZzRWdhR29zaFpESG5oS0RvVjg1eGZ5UXkxdTNqekpKdkJFV1Y5ZEdDSlM5M3E0ckFSNk96bVk3bU9VUjhTdkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxJUW1yUTF1dVFSclF3RFJaM0RBU21WSmtnMG1hVjRkZVg3dUFycEx6ZXdhK2FQT1RIbFZIaTJLS1B4TnVLV21WQys5Wmh2ZXNLTGFPTnpJTnJxUkJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUzMzM5OTc2NjoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQwMjY1NDMyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
