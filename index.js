const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
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

        if((sentence.search("ducks")>0 || sentence.search("duck")>0 && sentence.search(":")<0) || (sentence==="duck")){
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
        let commandlist=""
        switch(command){
            case 'help':                  
                if(args.length<1){                    
                    commandlist+=("[]help everyone"+"\n"+"```"+"Commands which everyone can use"+"```"+"\n")
                    commandlist+=("[]help admin"+"\n"+"```"+"Commands only for admins"+"```"+"\n")
                } 
                else{
                    commandlist="Prefix the following with []\n\n\n"  
                    switch(args[0]){    
                        case "everyone":
                            const commandsforeveryone = commandFiles.filter(comm => require(`./commands/${comm}`).who_can_use==="everyone")
                            commandlist+="Commands for everyone:\n\n"
                            for(const file of commandsforeveryone){
                               let cmd = require(`./commands/${file}`)                    
                               commandlist+=(cmd.name+"\n"+"```"+cmd.description+"```"+"\n")         
                            }
                            break;
                        case "admin":
                            const commandsforadmins = commandFiles.filter(comm => require(`./commands/${comm}`).who_can_use==="admin_only")
                            commandlist+="Commands only for admins:\n\n"
                            for(const file of commandsforadmins){
                                let cmd = require(`./commands/${file}`)                    
                                commandlist+=(cmd.name+"\n"+"```"+cmd.description+"```"+"\n")         
                            }
                            break;    
                        default:
                            commandlist="";
                            commandlist+=`Quack !! ${args} is not a registered type of command`    
                    }
                }
               /* const commandsforeveryone = commandFiles.filter(comm => require(`./commands/${comm}`).who_can_use==="everyone")         
                const commandsforadmins = commandFiles.filter(comm => require(`./commands/${comm}`).who_can_use==="admin_only")  
                //for(const file of commandFiles){
                //    let cmd = require(`./commands/${file}`)                    
                //    commandlist+=(cmd.name+"\n"+"```"+cmd.description+"```"+"\n")                                      
               // }
                commandlist+="Commands for everyone:\n\n"
                for(const file of commandsforeveryone){
                    let cmd = require(`./commands/${file}`)                    
                    commandlist+=(cmd.name+"\n"+"```"+cmd.description+"```"+"\n")         
                }
                
                commandlist+="\n\n\nCommands only for admins:\n\n"
                for(const file of commandsforadmins){
                    let cmd = require(`./commands/${file}`)                    
                    commandlist+=(cmd.name+"\n"+"```"+cmd.description+"```"+"\n")         
                }
                */

                message.channel.send(simplemessageembed.embed(commandlist))
                break; 
            case 'intro':
                client.commands.get('intro').execute(message,args)
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
            case 'github':
                client.commands.get('github').execute(message,args)
                break;    
            case 'chnor':
                client.commands.get('chnor').execute(message,args)
                break; 
            case 'meme':
                client.commands.get('meme').execute(message,args)
                break;   
            case 'serverinfo':
                client.commands.get('serverinfo').execute(message,args)
                break;    
            case 'progjoke':
                client.commands.get('progjoke').execute(message,args)
                break;          
            default:
                message.channel.send("Quack ? That command does not exist")
                break;    
        }

    }
})


// Token present in environment file
client.login(process.env.DISCORD_TOKEN);