/*CMD
  command: /register
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Please enter your details. What is your name?
  keyboard: 
  aliases: /change
CMD*/

User.setProperty("name", data.message, "string"); 
Bot.runCommand('/set_last_name');
