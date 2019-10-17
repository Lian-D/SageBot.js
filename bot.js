const Discord = require('discord.js');
const responses = require('./commands/responses.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ game: { name: 'Let my armies be the rocks, and the trees, and the birds in the sky', type: 0 } });
});

 
client.on('message', message => {
    if (message.content == "dab"){
        message.channel.send(" ", { files: ["./resources/dab2.png"] });
    }
    else if (message.content == "our lord and savior"){
        message.channel.send(" ", { files: ["./resources/lord.png"] });
    }
    else if (message.content == "kaj"){
        message.channel.send(" ", { files: ["./resources/tenor.gif"] });
    }
    else if (message.content == "epic"){
        message.channel.send("Le epic win", { files: ["./resources/based.gif"] });
    }
    else if (message.content == "Fortnite"){
        message.channel.send(" ", { files: ["./resources/27lrwk.jpg"] });
    }
    else if (message.content == "walter"){
        message.channel.send("libtard destroyed", { files: ["./resources/libtard.png"] });
    }
    else if (message.content == "Fortnite"){
        message.channel.send(" ", { files: ["./resources/27lrwk.jpg"] });
    }
   else if (message.content == "gondola"){
        var randomNumber2 = (Math.floor(Math.random() * 2) + 1);
       
        if (randomNumber2 == 1){
            message.channel.send("Enjoy the ride https://gondola.stravers.net/random-raw", { files: ["./resources/gondola.webm"] });
        }
        else {
            message.channel.send("Enjoy the ride https://gondola.stravers.net/random-raw", { files: ["./resources/gondola2.webm"] });
        }
    }
    else if (message.content == "minion"){
        var randomNumber2 = (Math.floor(Math.random() * 9) + 1);
        
        if (randomNumber2 == 1){
            message.channel.send("GOD I FUCKING LOVE MINIONS", { files: ["./BLARTMINION.png"] });
        }
        if (randomNumber2 == 2){
            message.channel.send("GOD I FUCKING LOVE MINIONS", { files: ["./MINION LOVER1.5.png"] });
        }
        if (randomNumber2 == 3){
            message.channel.send("GOD I FUCKING LOVE MINIONS", { files: ["./MINION LOVER2.5.png"] });
        }        
        if (randomNumber2 == 4){
            message.channel.send("GOD I FUCKING LOVE MINIONS", { files: ["./MINION LOVER3.png"] });
        }
        if (randomNumber2 == 5){
            message.channel.send("GOD I FUCKING LOVE MINIONS", { files: ["./MINION SNIPER.png"] });
        }
        if (randomNumber2 == 6){
            message.channel.send("GOD I FUCKING LOVE MINIONS", { files: ["./RED MINION.png"] });
        }
        if (randomNumber2 == 7){
            message.channel.send("GOD I FUCKING LOVE MINIONS", { files: ["./SCHINDLERS MINION.png"] });
        }
        if (randomNumber2 == 8){
            message.channel.send("GOD I FUCKING LOVE MINIONS", { files: ["./minion_guitar.png"] });
        }
        if (randomNumber2 == 9){
            message.channel.send("GOD I FUCKING LOVE MINIONS", { files: ["./whydoeshewearthemask.png"] });
        }        
        
    }
    var response = responses.response(message.content);
    if (response != null){
        message.channel.send(response);
    }

});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
