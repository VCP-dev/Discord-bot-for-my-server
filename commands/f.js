module.exports = {
    name:'f',
    who_can_use:'everyone',
    description:'Press F to pay respect',
    execute(message,args){            
      message.channel.send("<:F_:760855700116340807>")            
    }
}