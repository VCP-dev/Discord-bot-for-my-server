const Discord = require('discord.js')
const fs = require('fs')
const token = require('./token')


// currently for duck bot


const client = new Discord.Client()

const prefix='!'



client.commands = new Discord.Collection();

// to read only JS files for commands
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){

   command = require(`./commands/${file}`)

   client.commands.set(command.name,command)
}



client.once('ready',()=>{
    console.log("Quack quack. Duck bot is ready")
})

client.on('message',(message)=>{
    // if the message does not start with the prefix '!' or if the author of the message is the bot
    if(!message.content.startsWith(prefix) || message.author.bot){

    }    
    else{
       
        const args = message.content.slice(prefix.length).split(/ +/)
        const command = args.shift().toLowerCase()

        switch(command){
            case 'quack':   
                client.commands.get('quack').execute(message,args)
                break;
            case 'moregames':
                client.commands.get('moregames').execute(message,args)
                break;
            case 'gitrepo':
                client.commands.get('gitrepo').execute(message,args)
                break; 
            case 'kick':
                client.commands.get('kick').execute(message,args)
                break;    
            default:
                message.channel.send("Quack ?")
                break;    
        }

    }
})


client.login(token.tokenvalue)