const simplemessageembed = require('../commonstuff/simplemesgembed')

module.exports = {
    name:'gitrepo',
    who_can_use:'everyone',
    description:'Link to the git repo of this bot',
    execute(message,args){        
        message.channel.send("Quack !! Here's the git repo for my code\nhttps://github.com/VCP-dev/Discord-bot")        
    }
}