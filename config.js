//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348084644182";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0tJMlI3TTQxWmVUYlRpOGFyOXZIWTQyNUx4dkQ1eHVoTUZvdnVmdFhWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2IyMXg1YnVEVGF5UnhXSjFQZmZxZ1JmQXhxa0ZDa3pRZUdtQVZWMUtHWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRDl0RkxaOVVMRGFBWkJKS3F4QVVjclUyaEZUNVpUM3lQQXdGS2hwVFhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKNkV3TktFV3pmckNubzJCc1M5bWpjMkMwell6NitNTkhNR01GZVFDYUdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFDOU1Vd0dhZUFrK1M0UEhNY01CdjRaQmR1dzJrTVE4Tk5kbWJ1RHBQRTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZXWm01dFdlSkpJdjVlbmI4c3B5Y0ZTeitIUTZSRDZIWVBxQit2Y2NvREk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUhPT3VsTU96NjRORXhRb05aRUY3aG9EYVdmWWpJTDRwN3ZXUnNyRWxVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnNoVUZ0Z0xxdXRzRnlBZ210L0NmMFR6QUorWUEzZ1ZWNU5vZFdhbzJ4RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVWWFVOcjVSdUJlUUJEOWI2TmZNUEZEOWJDcGZvaFAzQmpuSDVRWTBGMEp6TGN0NVB6VXhVbmNQcEUvdDBFbkFpbUoxbVQvOHN3KzN0bTk5b0xLTkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiIzQkJYZno1NytSQWE2T0ZRellXa2tSWEhpdW9IbXpoMFlTN1g0Uy9EZ25vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHTjMtaGN6NFNlU3kzSWNxSlpSTkhnIiwicGhvbmVJZCI6IjQ0NTZkMWIyLTA2NTItNGIyMy1iZWEwLTMwOGQxODUyZDI4OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvMWV2VSsxbVhCTGc1UzUxZ0pKVWhidmtMdTQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEo3ZE5WUjE4YVNSQXdLNHhyakdURGp6RGZnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVCQ0ZYQ1QxIiwibWUiOnsiaWQiOiIyMzQ4MDg0NjQ0MTgyOjM3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Is2y1bDSvSDWhdWy0r0gxIXSjdaF0bXSvSDEhdOA04AifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01INXVPVUJFUHJSbWJnR0dCY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldKZGtTeWVvTGl1YzZ3S0I4QUFOUGlyeU9YWnkwdkhLeHJ0VXArWDdGRDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkRFUmU2THhDZGJLVStHN1U5d2JOR2F4Qit6NWdBby9RWmFMbWp1d2NOZE94ZVdwajI5Q3ZBM3RaZ1JCQURkM3kyVHVGaVVpYWs0U3hXeWhka3BEeUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQa01tYUlSSGJJd2czd2lnTXNNTWlhQWFqNml3STNnQVd3eHR6d083ZVFmWjJ1VG80ZE9YdGRrdlk2R09LQ09SOXRnVjVUdDhIaDRhVVN2ZFI5K0RCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwODQ2NDQxODI6MzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmlYWkVzbnFDNHJuT3NDZ2ZBQURUNHE4amwyY3RMeHlzYTdWS2ZsK3hROSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODQ3MzM1MX0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "0",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
