const Discord = require('discord.js')
const fs = require('fs')
const token = require('./token')
const simplemessageembed = require('./commonstuff/simplemesgembed')


// currently for duck bot


const client = new Discord.Client()

const prefix='[]'



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
    // if the author of the message is the bot
    if(message.author.bot){
        return
    }
    // for a normal message typed by a user
    else if(!message.author.bot && !message.content.startsWith(prefix)){

        const sentence = message.content.toLowerCase()

        if((sentence.search("ducks")>0 || sentence.search("duck")>0) || (sentence==="duck")){
            message.channel.send("Quack. You talking to me ?")
        }   
        else{
            return;
        }
    }
    // if the message was a command
    else{
       
        const args = message.content.slice(prefix.length).split(/ +/)
        const command = args.shift().toLowerCase()

        switch(command){
            case 'allcommands':
                let commandlist="Prefix the following with []\n\n\n"     
                const commandsforeveryone = commandFiles.filter(comm => require(`./commands/${comm}`).who_can_use==="everyone")         
                const commandsforadmins = commandFiles.filter(comm => require(`./commands/${comm}`).who_can_use==="admin_only")  
                /*for(const file of commandFiles){
                    let cmd = require(`./commands/${file}`)                    
                    commandlist+=(cmd.name+"\n"+"```"+cmd.description+"```"+"\n")                                      
                }*/
                commandlist+="Commands for everyone:\n\n"
                for(const file of commandsforeveryone){
                    let cmd = require(`./commands/${file}`)                    
                    commandlist+=(cmd.name+"\n"+"```"+cmd.description+"```"+"\n")         
                }
                
                commandlist+="\nCommands only for admins:\n\n"
                for(const file of commandsforadmins){
                    let cmd = require(`./commands/${file}`)                    
                    commandlist+=(cmd.name+"\n"+"```"+cmd.description+"```"+"\n")         
                }
                

                message.channel.send(simplemessageembed.embed(commandlist))
                break; 
            case 'quack':   
                client.commands.get('quack').execute(message,args)
                break;
            case 'moregames':
                client.commands.get('moregames').execute(message,args)
                break;           
            case 'kick':
                client.commands.get('kick').execute(message,args)
                break;  
            case 'ban':
                client.commands.get('ban').execute(message,args)
                break;
            case 'google':
                client.commands.get('google').execute(message,args)
                break;          
            case 'clearchannel':
                client.commands.get('clearchannel').execute(message,args)
                break;  
            case 'assignrole':
                client.commands.get('assignrole').execute(message,args)
                break;       
            case 'botstatus':
                client.commands.get('botstatus').execute(client,message,args)
                break;  
            case 'f':
                client.commands.get('f').execute(message,args)
                break;
            case 'chnor':
                client.commands.get('chnor').execute(message,args)
                break;           
            default:
                message.channel.send("Quack ? That command does not exist")
                break;    
        }

    }
})



client.login(token.tokenvalue)