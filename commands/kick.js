const token = require('../token')

module.exports = {
    name:'kick',
    description:'to kick a member',
    execute(message,args){
        if(message.member.roles.cache.has(token.roleids.mod) && message.member.permissions.has("KICK_MEMBERS")){
        message.channel.send("Quack !! You can kick a member")
        }
        else{
            message.channel.send("Quack !! You don't have permission to kick a member. Don't send this command !!")           
        }
    }
}