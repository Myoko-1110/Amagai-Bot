const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on ('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

const prefix = "a!"; //prefixを設定
let Switch = "on"; //関数"Switch"に"on"を設定


client.on ('messageCreate', (message) => {
    if (message.content === `${prefix}ping`) {
        message.reply('pong!'); //メッセージが"!ping"だったら返信
    }

    if (message.content === `${prefix}off`) {
        if (Switch === "off") {
            message.reply('メッセージ返信機能はすでにオフです。'); //関数"Switch"が"off"だったら"すでにオフです。"を返信
        }
        else {
            Switch = "off";
            message.reply('メッセージ返信機能をオフにしました。'); //該当しない場合は関数"Switch"を"off"に設定
        }
    }

    if (message.content === `${prefix}on`) {
        if (Switch === "on") {
            message.reply('メッセージ返信機能はすでにオンです。'); //関数"Switch"が"on"だったら"すでにオンです。"を返信
        }
        else {
            Switch = "on";
            message.reply('メッセージ返信機能をオンにしました。'); //該当しない場合は関数"Switch"を"on"に設定
        }
    }
    if (massage.content === `${prefix}exit`) {
        if (member.roles.cache.has !== '940508135846727791') {
            massage.replay('あなたにはこのBotを再起動する権限がありません')
        }
        else {
            massage.replay('Botを停止します。少々お待ちください…')
            await process.exit();
        }
    }
    if (message.author.bot) return;
    if (Switch === "off") return; //関数"Switch"が1だったら返信をしない
    if (message.content === `${prefix}on`) return;
    if (message.content === `${prefix}off`) return;
    if (message.content === `${prefix}ping`) return;
    let arr = [
        //ここからランダムで送るメッセージ

        "なんでぇ！？",
        "確証が欲しいの確証が！！",
        "らぁくしょうらぁくしょう！",
        "うるさいんですけどぉーーー",
        "さようなら",
        "よろしくおねがいまーth",
        "俺もだよ❤",
        "お前また授業中うるさくしただろ",
        "天谷ですけどぉぉぉ！！！！！wwwwwwwwwww",
        "それ本当に実行できんの？",
        "お前常習犯だろ？",
        "チッ",
        "家に忘れたじゃないよ！",
        "このクラスの平均点が一番低いの!",
        "いったかんな、いいな？いいな？",
        "みんな聞いたかんな？",
        "な～いすぅ",
        "もう！ほんとに！",
        "一回だけ言うからな？",
        "もうフルボッコよ",
        "やばくねえ!?",
        "動物園へお帰り下さい",
        "飼育員さんのもとへお戻りください",
        "気持ち切り替えて",
        "ほんとに頼むよぉ…",
        "社会に出たらもうそれ通用しないよ？",
        "いつだすの？",
        "それ本当に実行できんの？",
        "ええっ!?",
        "次のテストでは70以上とれよ？いいな？",
        "はい、じゃあ授業やりまーす",
        "おしりペンペンタイムね",
        "もうっ……w",
        "おい！うるさい！",
        "もうしらないぞ？",
        "もう一回言ってくださいといわれてももういわないかんな？",
        "はい、じゃあ初めまして",
        "ちょっとそれやめようか",
        "多分じゃないんだよ、確証が欲しいんだよ確証が！！",
        "あななたち頭おかしいからね！？",
        "なあいす！！！！",
        {files: ['voice/なんでぇ？.mp3']},
        {files: ['voice/うるさいんですけどー.mp3']},
        {files: ['voice/らくしょうらくしょう.mp3']},
        {files: ['voice/動物園うるせぇ.mp3']},
        {files: ['voice/いったかんな？.mp3']},
        {files: ['voice/確証がほしいの確証が.mp3']}

        //ここで終わり
    ];
    let random = Math.floor(Math.random() * arr.length);
    let result = arr[random];
    message.channel.send(result);
})

//　↑こんな感じで "文字1", "文字2" ってやってください
//　文字は"でくくって、文字と文字の間はカンマとスペースを忘れずに付けてください。






client.login("OTU4MzExOTQ3Mzc0MzA5Mzc2.YkLfjA.hxnE4DRvIOLLaQReojj9LbwlQcc");

//client.login("OTYwODgwNTk4MzY3NDczNzQ3.Ykw3yg.sA8wyrHYtncwSq6E-cBa3Ylw4Os");
