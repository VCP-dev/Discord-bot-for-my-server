module.exports = {
    name:'quack',
    who_can_use:'everyone',
    description:'just a ping command',
    execute(message,args){
        message.channel.send("Quack quack !!!")
    }
}