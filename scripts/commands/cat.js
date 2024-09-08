const fs = require("fs");
module.exports.config = {
	name: "sad06",
    version: "1.1.1",
prefix: true,
	permssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	category: "no prefix",
    cooldowns: 5, 
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["হ্যা বলো আমি শুনছি😌","কি হয়েছে","বট বট করিস কেন"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "love u bot")) {
     return api.sendMessage("Hmm bhalo asi apni🙂🤖", threadID);
   };

    if ((event.body.toLowerCase() == "উমমা") || (event.body.toLowerCase() == "bot ummah")) {
     return api.sendMessage("লুচ্চা চুম্মা চুম্মি করোস কেন🥵", threadID);
   };
   
    if ((event.body.toLowerCase() == "i love u bot") || (event.body.toLowerCase() == "i love you bot")) {
     return api.sendMessage("আমাকে না আমার বস সাহেদ কে ভালোবাসো😻🥀", threadID);
   };

   if ((event.body.toLowerCase() == "Bot abl") || (event.body.toLowerCase() == "fuck bot")) {
     return api.sendMessage("কিরে আমাকে গালি দেস কেনো তোকে কিন্তু বেন করে দিমু😠", threadID);
   };
  
   if ((event.body.toLowerCase() == "kiss daw") || (event.body.toLowerCase() == "bot kiss me")) {
     return api.sendMessage("আমি ভালো তুমি পঁচা😌", threadID);
   };

   if ((event.body.toLowerCase() == "বট কোই") || (event.body.toLowerCase() == "bot koi")) {
     return api.sendMessage("এই তো আমি এখানে🙋‍♂️", threadID);
   };

  if ((event.body.toLowerCase() == "কি করেন") || (event.body.toLowerCase() == "কি করেন")) {
     return api.sendMessage("আপনার সাথে প্রেম করি 🤩", threadID);
   };

   if ((event.body.toLowerCase() == "খাইছেন") || (event.body.toLowerCase() == "bsvv nha mn")) {
     return api.sendMessage("আমি রোবট আমি খাই না! আপনি?❤️", threadID);
   };

   if ((event.body.toLowerCase() == "তোমার বাসা কোথায়") || (event.body.toLowerCase() == "btvv nha mng")) {
     return api.sendMessage("তোমার মনের বা'পাশে", threadID);
   };

   if ((event.body.toLowerCase() == "প্রেম করবা") || (event.body.toLowerCase() == "hi ae")) {
     return api.sendMessage("আসো চিপাই যাই ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hiii")) {
     return api.sendMessage("হাই না বলে i love u সাহেদ bolo 🤭 ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "🫦") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("omg ki dey এগুলো 🙂", threadID);
   };
   
   if ((event.body.toLowerCase() == "চলো") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("aso jai❤️", threadID);
   };
   
   if ((event.body.toLowerCase() == "মুরগি,তোর মারে চুদি,নবিন,বলদ,xudi") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("গালি দিলে মেরে ফেলবো🤬 ", threadID);
   };
   
   if ((event.body.toLowerCase() == "Asslamolikum ") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("ওয়ালাইকুমুস সালাম ❤️", threadID);
   };
   
   if ((event.body.toLowerCase() == "Out") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("কেন থাকলে কি তোর জ্বলে? ❤️", threadID);
   };
   
   if ((event.body.toLowerCase() == "abal") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("tui abal ❤️", threadID);
   };
   
   if ((event.body.toLowerCase() == "চলো যাই") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("colo cipay jy ❤️", threadID);
   };
   
   if ((event.body.toLowerCase() == "খানকির পোলা") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("তোর নাম নাকি? না সুন্দর আছে ❤️", threadID);
   };
   
   if ((event.body.toLowerCase() == "kiss de") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("ummmmah😘 ❤️", threadID);
   };


   if ((event.body.toLowerCase() == "Dudu") || (event.body.toLowerCase() == "tt go mng")) {
     return api.sendMessage("️কুত্তার টা মুখে নিয়ে বসে থাকো 💘, 🤢 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "Bot er admin ke") || (event.body.toLowerCase() == "let's go")) {
     return api.sendMessage("️আমি চাই আমার এডমিন তুমি হয়ে যাও, 🙃 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "Sex") || (event.body.toLowerCase() == "tt mng oi")) {
     return api.sendMessage("️Sex 💔 segs 💘, 🤔 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "good night, gd n8") || (event.body.toLowerCase() == "nn nha mng")) {
     return api.sendMessage("️Sleep well <3 Wish you all super nice dreams <3", threadID);
   };

   if ((event.body.toLowerCase() == "Good morning, gd m9") || (event.body.toLowerCase() == "tt go mn")) {
     return api.sendMessage("️good n8, 🥺 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop over")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
     return api.sendMessage("️ that's very commendable hihi :>", threadID);
   };
  
   if ((event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "dm bot")) {
     return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };
   
   if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
     return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
   };

   if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
     return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
  
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
