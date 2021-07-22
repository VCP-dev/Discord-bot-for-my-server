module.exports = {
    name:'bonk',
    who_can_use:'everyone',
    description:'Bonk',
    execute(message,args){  
      try
      {      
    		  message.channel.send("<a:Bonk:862608442178142249>")   
      }
      catch(err)
      {
        message.channel.send("QUACK !!! Error, could not bonk")
        console.log(err.message)        
      }    
                  
    }
}