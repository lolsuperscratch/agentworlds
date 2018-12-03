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
       },
       put:function (fn) {
           var fn2 = fn(this,false)
           if (!fn2.agentworlds) throw new Error('This is not a agentworlds plugin. '+
                                                'PLUGIN WIKI: https://github.com/lolsuperscratch/agentworlds/wiki/Plugins')
           if (!fn2.github_url) throw new Error('Must use github repo to make users to create issue '+
                                               'PLUGIN WIKI: https://github.com/lolsuperscratch/agentworlds/wiki/Plugins')
           if (fn2.github_url == "https://github.com/user/repo") throw new Error('Must use github repo to make users to create issue but do not make same! '+
                                                                                'PLUGIN WIKI: https://github.com/lolsuperscratch/agentworlds/wiki/Plugins')
           try {
           fn(this,true)
           } catch(e) {
               throw new Error(e.message+' not you as plugin owner? create issue at '+fn2.github_url+'/issues')
           }
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
    server:{
       start:function(agent = "F1",roomid = "demo",server) {
       if (!server) throw new Error('Please put agentworlds server to be used as client. SERVER WIKI: https://github.com/lolsuperscratch/agentworlds/wiki/Servers')
       var socket = io(server)
       var banned = false;
       socket.on('connect',function (){
          socket.emit('join',roomid,agent)
       })
       socket.on('room-ping',function (id,agentname) {
        socket.emit('room-pong',id,socket.id,agent)
       })
       socket.on('banned',function (reason){
           banned = true;
        socket.disconnect()
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
         if (banned) return;
         socket.disconnect()
       },
       connect:function (){
           if (banned) return;
         socket.connect()
       },
       put:function (fn) {
           var fn2 = fn(this,false)
           if (!fn2.agentworlds) throw new Error('This is not a agentworlds plugin. '+
                                                'PLUGIN WIKI: https://github.com/lolsuperscratch/agentworlds/wiki/Plugins')
           if (!fn2.github_url) throw new Error('Must use github repo to make users to create issue '+
                                               'PLUGIN WIKI: https://github.com/lolsuperscratch/agentworlds/wiki/Plugins')
           if (fn2.github_url == "https://github.com/user/repo") throw new Error('Must use github repo to make users to create issue but do not make same! '+
                                                                                'PLUGIN WIKI: https://github.com/lolsuperscratch/agentworlds/wiki/Plugins')
           try {
           fn(this,true)
           } catch(e) {
               throw new Error(e.message+' not you as plugin owner? create issue at '+fn2.github_url+'/issues')
           }
       }
     }
    },
        tracker:function (server,callback) {
            if (!server) throw new Error('Please put agentworlds server to be used as room tracker. SERVER WIKI: https://github.com/lolsuperscratch/agentworlds/wiki/Servers')
       if (!callback) throw new Error('You must use callback! for example, when person joins this link then you must do this!')
     var socket = io('https://kindhearted-tulip.glitch.me/roomtrack')
     socket.on('trackroom',function (id){
        callback(id)
     })
    }
    }


    
}
module.exports = AgentWorlds
