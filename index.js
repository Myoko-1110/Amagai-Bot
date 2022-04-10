const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.on ('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});
var Switch = 0;

client.on ('messageCreate', (message) => {
    if (message.content === '!ping') {
        message.reply('pong!');
    }
})

client.on ('messageCreate', (message) => {
    if (message.author.bot) return;
    if (Switch === 1) return;
    if (message.content === 'a!on') return;
    if (message.content === 'a!off') return;
    if (message.content === '!ping') return;
    let arr = ["なんでぇ！？", "確証が欲しいの確証が！！", "らぁくしょうらぁくしょう！", "うるさいんですけどぉーーー", "さようなら", "よろしくおねがいまーth", "俺もだよ❤", "お前また授業中うるさくしただろ", "天谷ですけどぉぉぉ！！！！！wwwwwwwwwww"];
    var random = Math.floor(Math.random() * arr.length);
    var result = arr[random];
    message.channel.send(result);
});

//　↑こんな感じで "文字1", "文字2" ってやってください
//　文字は"でくくって、文字と文字の間はカンマとスペースを忘れずに付けてください。

client.on ('messageCreate', (message) => {
    if (message.content === 'a!on') {
        if (Switch === 0) {
            message.reply('すでにオンです。');
        }
        else {
            Switch = 0;
            message.reply('メッセージ返信をオンにしました。');
        }
    }
});

client.on ('messageCreate', (message) => {
    if (message.content === 'a!off') {
        if (Switch === 1) {
            message.reply('すでにオフです。');
        }
        else {
            Switch = 1;
            message.reply('メッセージ返信をオフにしました。');
        }
    }
});


client.login ("OTU4MzExOTQ3Mzc0MzA5Mzc2.YkLfjA.hxnE4DRvIOLLaQReojj9LbwlQcc");