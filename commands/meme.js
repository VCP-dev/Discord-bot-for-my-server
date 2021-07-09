const randomPuppy = require('random-puppy');
const simplemessageembed = require('../commonstuff/simplemesgembed')

module.exports = {
    name:'meme',
    who_can_use:'everyone',
    description:'Fetch a meme',
    async execute(message,args){

      message.channel.send("Quack !! Fetching a meme...")

      let reddit = [        
        "wholesomememes"        
      ]

      let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

      message.channel.startTyping();

      randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'meme.png'
                }]
            }).then(() => message.channel.stopTyping());
      }).catch(err => {
            message.channel.send("Quack !! Could not fetch meme")
            console.error(err)
            message.channel.stopTyping();
      });       

    }
}