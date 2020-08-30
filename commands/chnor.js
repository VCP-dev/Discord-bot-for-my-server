const fetch = require('node-fetch')
const simplemessageembed = require('../commonstuff/simplemesgembed')

module.exports = {
    name:'chnor',
    who_can_use:'everyone',
    description:'Some jokes about Chuck Norris',
    async execute(message,args){

       fetch('http://api.icndb.com/jokes/random')
            .then(response => response.json())
            .then(fetchedjoke => message.channel.send(fetchedjoke.value.joke).replace("&quot;",'"'));      

    }
}