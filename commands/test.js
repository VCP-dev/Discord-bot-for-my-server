module.exports = {
    name:'test',
    description:'test command',
    execute(message,args){        
        message.reply(message.author.displayAvatarURL());       
    }
}