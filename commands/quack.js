const simplemessageembed = require('../commonstuff/simplemesgembed')

module.exports = {
    name:'quack',
    who_can_use:'everyone',
    description:'just a ping command',
    execute(message,args){
        message.channel.send(simplemessageembed.embed("Quack quack !!"))
    }
}