const simplemessageembed = require('../commonstuff/simplemesgembed')

module.exports = {
    name:'assignrole',
    who_can_use:'admin_only',
    description:'to assign roles to peeps',
    execute(message,args){
        if(message.member.roles.cache.has(token.roleids.mod) && message.member.permissions.has("MANAGE_ROLES"))
        {    
            //  if an actual user was mentioned
            const user = message.members.mentions.first()

            if(!user){
                message.channel.send(simplemessageembed.embed("Quack !! Please specify the user you would like to give a role to"))
            }
            else{
                const role = message.guild.roles.find(r => r.name === args.slice(1).join(" "))
                if(!role){
                    message.channel.send(simplemessageembed.embed("Quack !! Please enter an actual role for the user"))
                }
                else{
                    user.addRole(role.id)
                    message.channel.send(simplemessageembed.embed(`${user} now has the ${role} role`))
                }
            }
        }
        else
        {
            message.reply("Quack !! You don't have permission to assign roles. Don't send this command !!")             
        }
    }
}