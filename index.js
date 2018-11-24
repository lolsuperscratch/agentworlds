var io = require('socket.io-client')
var AgentWorlds = {
    start:function(agent = "F1",roomid = "demo") {
       
       var socket = io('https://kindhearted-tulip.glitch.me/')
       socket.on('connect',function (){
          socket.emit('join',roomid,agent)
       })
       socket.on('room-ping',function (id,agentname) {
        socket.emit('room-pong',id,socket.id,agent)
       })
       return {
       socket:socket,
       speak:function (msg) {
         this.socket.emit('speak',msg)
         
       },
       move:function (x,y) {
         this.socket.emit('move',x,y)
         
       },
       pointat:function (x,y) {
         this.socket.emit('pointat',x,y)
         
       },
       animate:function (anim) {
         this.socket.emit('animate',anim)
         
       },
       
       disconnect:function (){
         
         socket.disconnect()
       },
       connect:function (){
         socket.connect()
       }
     }
    },
    tracker:function (callback) {
       if (!callback) throw new Error('You must use callback! for example, when person joins this link then you must do this!')
     var socket = io('https://kindhearted-tulip.glitch.me/roomtrack')
     socket.on('trackroom',function (id){
        callback(id)
     })
    },
    


    
}
module.exports = AgentWorlds
