const simplemessageembed = require('../commonstuff/simplemesgembed')

module.exports = {
    name:'google',
    who_can_use:'everyone',
    description:'bringing up google for peeps who need it. LOL',
    execute(message,args){
        message.channel.send(simplemessageembed.embed("Quack !! We don't know but https://www.google.com/ might"))
    }
}