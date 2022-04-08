const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.on ('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
});


client.on ('messageCreate', (message) => {
    if (message.content === '!ping') {
        message.reply('pong!')
    }
})

client.on ('messageCreate', (message) => {
  if (message.author.bot) return;
    let arr = ["なんでぇ！？", "確証が欲しいの確証が！！", "らぁくしょうらぁくしょう！", "うるさいんですけどぉーーー", "さようなら", "よろしくおねがいまーth", "俺もだよ❤, "お前また授業中うるさくしただろ"];
    var random = Math.floor(Math.random() * arr.length);
    var result = arr[random];
    message.channel.send(result);
})

//　↑こんな感じで "文字1", "文字2" ってやってください
//　文字は"でくくって、文字と文字の間はカンマとスペースを忘れずに付けてください。


client.login ("OTU4MzExOTQ3Mzc0MzA5Mzc2.YkLfjA.hxnE4DRvIOLLaQReojj9LbwlQcc");
