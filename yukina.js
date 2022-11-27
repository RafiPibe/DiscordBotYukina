//build 1.1.0

const Discord = require("discord.js");
const bot = new Discord.Client();


const token = '';
bot.login(token);


bot.on('ready', () =>{
    console.log('Botnya online cog, user ' + bot.user.tag)

    bot.user.setActivity("Anime", {type : "WATCHING"})

    bot.guilds.cache.forEach((guild) => {
        console.log(guild.name)
        guild.channels.cache.forEach(channel => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
        
    })

})

bot.on('message', (receivedMessage) =>{
    if (receivedMessage.author == bot.user) {
        return;
    }

    if (receivedMessage.content.startsWith("yk.")) {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(3)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)

    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)

    } else if (primaryCommand == "info") {
        infoCommand(arguments, receivedMessage)
    
    } else {
        receivedMessage.channel.send("Ehhh? Maaf kk aku nggak ngerti maksud kk >.< Coba `*yk.help*` deh kak")
    }
}

function helpCommand(arguments, receivedMessage) {
    if (arguments.length > 0) {
      receivedMessage.channel.send("Ehhh? Maaf kk aku nggak ngerti maksud kk >.< Coba `*yk.help*` deh kak")

    } else {
        receivedMessage.channel.send({ embed: {
            title: "Help :D",
            color: "#FD0067",
            fields: [{
                name: "Chats",
                value: "",
              },
            ],
            image:{"url":"https://media.discordapp.net/attachments/359770377158787072/874985285715374160/Picture1.png?width=893&height=907"},
            footer:{"text":"Made by Pibe#4750"},
          }
        })
    }
}

function infoCommand(arguments, receivedMessage) {
    if (arguments.length > 0) {
        receivedMessage.channel.send("Ehhh? Maaf kk aku nggak ngerti maksud kk >.< Coba `*yk.help*` deh kak")
    } else {
        receivedMessage.channel.send({ embed: {
            title: "Yukina's Info",
            color: "#FD0067",
            fields: [{
                name: "Test 1",
                value: "menggokil",
              },
            ],
            image:{"url":"https://media.discordapp.net/attachments/359770377158787072/874985285715374160/Picture1.png?width=893&height=907"},
            footer:{"text":"Made by Pibe#4750"},
          }
        })
    }
}

//music

// const PREFIXMUSIC = 'yk!'
// var servers = {};
// const ytdl = require("ytdl-core");

// bot.on('message', message =>{
    
//     let args = message.content.substring(PREFIXMUSIC.length).split(" ");

//     switch (args[0]) {
//         case 'play':

//             function play(connection, message){
//                 var server = servers[message.guild.id];

//                 server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter:'audioonly'}));

//                 server.queue.shift();

//                 server.dispatcher.on("end", function(){
//                     if(server.queue[0]){
//                         play(connection, message);
//                     } else {
//                         connection.disconnect();
//                     }
//                 })
//             }


//             if(!args[1]){
//                 message.channel.send("Linknya mana?? >//<");
//                 return;
//             }

//             if(!message.member.voiceChannel){
//                 message.channel.send("Kok kamu di vc nggak ada? Kamu harus di vc kalo mau main musik")
//                 return;
//             }

//             if(!servers[message.guild.id]) servers[message.guild.id] = {
//                 queue: []
//             }

//             var server = servers[message.guild.id];

//             server.queue.push(args[1]);


//             if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
//                 play(connection, message);

//             })

//         break;
//     }

// })

//responses

bot.on('message', (message) =>{

    msg = message.content.toLowerCase();

    if(msg.startsWith('halo')){
       let replies = ["Halo!", "Halo kk", "Ohayou", "Apa kabar?"];
       let result = Math.floor((Math.random() * replies.length));
       message.reply(replies[result])
    }
})

bot.on('message', (message) =>{

    msg = message.content.toLowerCase();

    if(msg.startsWith('hai')){
       let replies = ["Halo!", "Halo kk", "Ohayou", "Apa kabar?"];
       let result = Math.floor((Math.random() * replies.length));
       message.reply(replies[result])
    }
})

bot.on('message', (message) =>{

    msg = message.content.toLowerCase();

    if(msg.startsWith('( ͡° ͜ʖ ͡° )')){
        let replies = ["ih kamu mesum >////<", "Ih mukanya mesum", "Gasuka ah kalo begitu", "Pikirannya kotor ih! >////<"];
        let result = Math.floor((Math.random() * replies.length));
        message.reply(replies[result])
    }
})

bot.on('message', (message) =>{

    msg = message.content.toLowerCase();

    if(msg.startsWith('yukina')){
        let replies = ["ada apa kk?", "Kok manggil?", "kenapa deh?", "Apa kabar?"];
        let result = Math.floor((Math.random() * replies.length));
        message.reply(replies[result])
    }
})

bot.on('message', (message) =>{

    msg = message.content.toLowerCase();

    if(msg.startsWith('suka deh')){
        let replies = ["b..baka >///<", "EHHHHH???", "m..maksudmu apa????", "k...kamu boongan kan?? >///<"];
        let result = Math.floor((Math.random() * replies.length));
        message.reply(replies[result])
    }
})

bot.on('message', (message) =>{

    msg = message.content.toLowerCase();

    if(msg.startsWith('sini sama om')){
        let replies = ["gamau ah! om jelek (°△°|||)", "Kalo dikasih permen mau deh (*ﾟ∀ﾟ*)", "maunya sama papa aja, omnya cabul ╥﹏╥"];
        let result = Math.floor((Math.random() * replies.length));
        message.reply(replies[result])
    }
})

bot.on('message', (message) =>{

    msg = message.content.toLowerCase()

    if(msg.startsWith('mantap')){
        let replies = ["mantap mantap enak kayaknya (/ε＼*)", "siapa dulu yang ngoding", "woiyadong"];
        let result = Math.floor((Math.random() * replies.length));
        message.reply(replies[result])
    }
})

bot.on('message', (message) =>{

    msg = message.content.toLowerCase()

    if(msg.startsWith('makasih')){
        let replies = ["apapun untuk kk (✿╹◡╹)", "b..b..bukan karena aku pengen lho, t..tapi makasih >//<"];
        let result = Math.floor((Math.random() * replies.length));
        message.reply(replies[result])
    }
})

bot.on('message', (message) =>{

    msg = message.content.toLowerCase()

    if(msg.startsWith('anjay')){
        let replies = ["mabar"];
        let result = Math.floor((Math.random() * replies.length));
        message.reply(replies[result])
    }
})

//limited response

//Picture

bot.on('message', (message) =>{

    msg = message.content.toLowerCase()

    if(msg.startsWith('steve')){
        let replies = ["https://cdn.discordapp.com/attachments/345659033971326996/367200478993580042/Steve1.png https://cdn.discordapp.com/attachments/345659033971326996/367200480276905994/Steve2.png https://cdn.discordapp.com/attachments/345659033971326996/367200481589854211/Steve3.png https://cdn.discordapp.com/attachments/345659033971326996/367200483426697216/Steve4.png"];
        let result = Math.floor((Math.random() * replies.length));
        message.channel.send(replies[result])
    }
})