const token = require('../token')
const Discord = require('discord.js')
const simplemessageembed = require('../commonstuff/simplemesgembed')


module.exports = {
    name:'kick',
    description:'to kick a member',
    execute(message,args){
        
        if(message.member.roles.cache.has(token.roleids.mod) && message.member.permissions.has("KICK_MEMBERS"))
        {    
            
                //  if an actual user was mentioned
                const user = message.mentions.users.first()
                //console.log(user)
                
                if(user){
                    const member = message.guild.member(user)

                    if(member){
                        member.kick('You were kicked from the server').then(()=>{
                            message.reply(`Successfully kicked ${user.tag}`)
                            //message.reply(simplemessageembed.embed(`Successfully kicked ${user.tag}`))
                        }).catch(err => {
                            message.reply("Unable to kick memeber")
                            //message.reply(simplemessageembed.embed("Unable to kick member"))
                            console.log(err)
                        })
                    }
                    // if he's not in the server
                    else{
                        message.channel.send(simplemessageembed.embed("Quack !! That user isn't in the server"))
                    }
                }
                else{
                    message.channel.send(simplemessageembed.embed("Quack !! Mention the name of the user to kick"))
                }
            

        }
        else{    

            message.reply("Quack !! You don't have permission to kick a member. Don't send this command !!")      
            
        }
        
    }
}