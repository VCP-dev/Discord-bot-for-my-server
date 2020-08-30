const fetch = require('node-fetch')
const simplemessageembed = require('../commonstuff/simplemesgembed')

module.exports = {
    name:'chnor',
    who_can_use:'everyone',
    description:'Some jokes about Chuck Norris',
    async execute(message,args){

       fetch('http://api.icndb.com/jokes/random')
            .then(response => response.json())
            .then(fetchedjoke => this.checkforquote(fetchedjoke.value.joke));      

    },
    checkforquote(joke){
        joke.replace("&quot;",'"')
        message.channel.send(joke)
    }
}