const token = require('../token')

module.exports = {
    name:'moregames',
    who_can_use:'everyone',
    description:"Link to BadPiggy's itch.io page",
    execute(message,args){
        if(message.member.roles.cache.has(token.roleids.fellow_pig)){
        message.channel.send("Quack !! Here are more games by BadPiggy\nhttps://badpiggy.itch.io/")
        }
        else{
            message.channel.send("Quack !!  You aren't a fellow pig yet. We shall make you one !!!")
            message.member.roles.add(token.roleids.fellow_pig).catch(console.error)

            message.channel.send("Quack !! Here are more games by BadPiggy\nhttps://badpiggy.itch.io/")
        }
    }
}