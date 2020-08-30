const fetch = require('node-fetch')
const simplemessageembed = require('../commonstuff/simplemesgembed')

module.exports = {
    name:'chnor',
    who_can_use:'everyone',
    description:'Some jokes about Chuck Norris',
    execute(message,args){

       const { fetchedjoke } = fetch('http://api.icndb.com/jokes/random').then(response => response.json());

       if(fetchedjoke.type=="success"){
           message.channel.send(fetchedjoke.value.joke)
       }else{
         message.channel.send(simplemessageembed.embed("Quack !! There was an issue in fetching a joke"))
       }

    }
}