const token = require('../token')
const Discord = require('discord.js')
const simplemessageembed = require('../commonstuff/simplemesgembed')

module.exports = {
    name:'ban',
    description:'TO BAN A MEMBER',
    execute(message,args){        
        if(message.member.roles.cache.has(token.roleids.mod) && message.member.permissions.has("BAN_MEMBERS"))
        {    
            
                //  if an actual user was mentioned
                const user = message.mentions.users.first()
                //console.log(user)
                
                if(user){
                    const member = message.guild.member(user)

                    if(member){
                        member.ban({reason:"You violated the rules or displayed any other form of misconduct"}).then(()=>{
                            message.reply(`${user.tag} has been cooked into bacon   (i.e)   HAS BEEN BANNED !!!`)
                        })
                    }
                    // if he's not in the server
                    else{
                        message.channel.send(simplemessageembed.embed("Quack !! That user isn't in the server"))
                    }
                }
                else{
                    message.channel.send(simplemessageembed.embed("Quack !! Mention the name of the user to ban"))
                }   

        }
        else{    

            message.reply("Quack !! You don't have permission to ban a member. Don't send this command !!")      
            
        }       
    }
}