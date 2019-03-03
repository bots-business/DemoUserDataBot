/*CMD
  command: /set_adress
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Type the address: street, house, apartment number
  keyboard: 
  aliases: 
CMD*/

User.setProperty("adress", data.message, "text");
Bot.runCommand('/profile');
Bot.runCommand('/confirm_contact');
