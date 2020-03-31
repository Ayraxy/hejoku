const Discord =require("discord.js")
const Client = new Discord.Client()
const token = process.env.token;

let perfix = "hg/"

Client.on("ready", ()=> {
    console.log("HorizonGaming Bot: A bot sikeresen elindult...")
})
Client.on("message", message => {
    if(message.content.startsWith(prefix) + "kurvaanyad") {
        message.channel.send("Ez egy kurvanyad parancs!");
    }
})
Client.login("NjY5OTg5MjY1Mjc0NDM3NjQy.Xin2ZA.0ALXnpC5qCN2K8torlkhkmVNrcw")    