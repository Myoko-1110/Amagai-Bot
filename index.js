const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.on ('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});
var Switch = 0; //関数"Switch"に0を設定

client.on ('messageCreate', (message) => {
    if (message.content === '!ping') {
        message.reply('pong!'); //メッセージが"!ping"だったら返信
    }
})

client.on ('messageCreate', (message) => {
    if (message.author.bot) return;
    if (Switch === 1) return; //関数"Switch"が1だったら返信をしない
    if (message.content === 'a!on') return; //メッセージが"a!on"だったら返信をしない
    if (message.content === 'a!off') return; //メッセージが"a!off"だったら返信をしない
    if (message.content === '!ping') return; //メッセージが"!ping"だったら返信をしない
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
            message.reply('すでにオンです。'); //関数"Switch"が0だったら"すでにオンです。"を返信
        }
        else {
            Switch = 0;
            message.reply('メッセージ返信をオンにしました。'); //該当しない場合は関数"Switch"を"0"に設定
        }
    }
});

client.on ('messageCreate', (message) => {
    if (message.content === 'a!off') {
        if (Switch === 1) {
            message.reply('すでにオフです。'); //関数"Switch"が"1"だったら"すでにオンです。"を返信
        }
        else {
            Switch = 1;
            message.reply('メッセージ返信をオフにしました。'); //該当しない場合は関数"Switch"を"1"に設定
        }
    }
});


client.login ("OTU4MzExOTQ3Mzc0MzA5Mzc2.YkLfjA.hxnE4DRvIOLLaQReojj9LbwlQcc");
