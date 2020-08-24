const token = require('../token')
const Discord = require('discord.js')
const simplemessageembed = require('../commonstuff/simplemesgembed')


module.exports = {
    name:'kick',
    description:'to kick a member',
    execute(message,args){
        
        if(message.member.roles.cache.has(token.roleids.mod) && message.member.permissions.has("KICK_MEMBERS")){

            message.channel.send(simplemessageembed.embed("Quack !! You can kick a member"))           

        }
        else{    

            message.channel.send(simplemessageembed.embed("Quack !! You don't have permission to kick a member. Don't send this command !!"))      
            
        }
        
    }
}