/*CMD
  command: /set_last_name
  help: 
  need_reply: true
  auto_retry_time: 
  answer: What is your last name, <name>?
  keyboard: 
  aliases: 
CMD*/

User.setProperty("last_name", data.message, "string");
Bot.runCommand('/set_phone');
