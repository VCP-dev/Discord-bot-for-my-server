const token = require('../token')
const Discord = require('discord.js')
const simplemessageembed = require('../commonstuff/simplemesgembed')

module.exports = {
    name:'clearchannel',
    who_can_use:'admin_only',
    description:'to clear all messages in a channel',
    execute(message,args){
        
        if(message.member.roles.cache.has(token.roleids.mod) && message.member.permissions.has("ADMINISTRATOR")){

            message.channel.messages.fetch().then((messages)=>{                
                message.channel.bulkDelete(messages)
            })   


            message.channel.send(simplemessageembed.embed("Quack !! This channel has been cleared"))      

        }
        else{    

            message.channel.send(simplemessageembed.embed("Quack !! You don't have permission to clear messages in a channel. Don't send this command !!"))      
            
        }
        
    }
}