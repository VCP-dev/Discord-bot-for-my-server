const Discord = require('discord.js')

module.exports = {
    embed:(simplemessage)=>{
        const embed = new Discord.MessageEmbed()
        .setColor('#eaff00')
        .setDescription(simplemessage)
        return embed
    }
}