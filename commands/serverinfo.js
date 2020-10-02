const Discord = require('discord.js')
const fetch = require('node-fetch')
const simplemessageembed = require('../commonstuff/simplemesgembed')

module.exports = {
    name:'serverinfo',
    who_can_use:'everyone',
    description:"The server's status",
    async execute(message,args){

            let embed = new Discord.MessageEmbed()
            .setColor("#f79393")
            .setTitle("Server Info")            
            .setDescription(`Information about ${message.guild}`)
            .setThumbnail(message.guild.iconURL())
            .addField("Owner", `The Big Pig of this server is ${message.guild.owner}`)
            .addField("Member Count", `This server has ${message.guild.memberCount} pigs`)  
            .addField("BadPiggy's stuff",`See the progress of BadPiggy's games in <#749576413178363906>\n Give suggestions in <#749575870464917506>`)    
            .addField("Show your stuff",`Show us what you're working on in <#748098666803363850>\n share your promotional links in <#748098723950624778>`)      
            .setFooter('BadPiggy Productions', message.guild.iconURL());

        message.channel.send(embed)
            .catch(console.error);

    }
}