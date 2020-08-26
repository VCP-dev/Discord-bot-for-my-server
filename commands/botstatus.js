const token = require('../token')
const Discord = require('discord.js')
const simplemessageembed = require('../commonstuff/simplemesgembed')

module.exports = {
    name:'botstatus',
    description:'to change status of bot',
    execute(client,message,args){
        
        if(message.member.roles.cache.has(token.roleids.mod) && message.member.permissions.has("ADMINISTRATOR")){

               const content = message.content.replace("!botstatus ",'')
               client.user.setPresence({
                   activity:{
                       name:content,
                       type:0
                   }
               })

               message.channel.send(simplemessageembed.embed("Quack !! My status is now '"+content+"'"))

        }
        else{    

            message.reply("Quack !! You don't have permission to set my status. Don't send this command !!")
            
        }
        
    }
}