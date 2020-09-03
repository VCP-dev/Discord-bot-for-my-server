module.exports = {
    name:'intro',
    who_can_use:'everyone',
    description:'A small intro about Duck bot',
    execute(message,args){
        message.channel.send("Quack !! I am a bot created by BadPiggy for this server\n\n Curently I don't do much and am still a WIP\n\nYou can get a list of all of my commands with []help")
    }
}