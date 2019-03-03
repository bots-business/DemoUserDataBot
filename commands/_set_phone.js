/*CMD
  command: /set_phone
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Your phone number, <name>?
  keyboard: 
  aliases: 
CMD*/

User.setProperty("phone", data.message, "string");
Bot.runCommand('/set_adress');
