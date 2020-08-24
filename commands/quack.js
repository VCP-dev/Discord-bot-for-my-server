module.exports = {
    name:'quack',
    description:'just a ping command',
    execute(message,args){
        message.channel.send("Quack quack !!!")
    }
}