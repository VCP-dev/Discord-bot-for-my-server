const fetch = require('node-fetch')
const simplemessageembed = require('../commonstuff/simplemesgembed')

module.exports = {
    name:'chnor',
    who_can_use:'everyone',
    description:'Some jokes about Chuck Norris',
    async execute(message,args){

       const { fetchedjoke } = await fetch('http://api.icndb.com/jokes/random').then(response => response.json()).then(fetchedjoke =>  console.log(fetchedjoke));      

    }
}