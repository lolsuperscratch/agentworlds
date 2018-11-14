# AgentWorlds
![Demo Image](https://i.imgur.com/7GWM0Io.png)
<br>
![Build Status](https://travis-ci.com/lolsuperscratch/agentworlds.svg)
[Demo](https://kindhearted-tulip.glitch.me/demo.html)



# Usage
Ping Pong Bot:
```node
  var AgentWorlds = require('agentworlds')
  var agentclient = AgentWorlds.start("AGENT_NAME") // default agent name is F1 and inculde the room
  agentclient.socket.on('r_speak',function(msg,id) {
  // easy way to use agentclient.speak('ping') in the browser console. not node.js client
     if (msg == "ping") {
     // reply to pong.
     agentclient.speak('pong!')
     }
  })
```
Echo Bot:
```node
  var AgentWorlds = require('agentworlds')
  var agentclient = AgentWorlds.start("AGENT_NAME") // default agent name is F1 and inculde the room
  agentclient.socket.on('r_speak',function(msg,id) {
  // easy way to use agentclient.speak('ANYTHING') in the browser console. not node.js client
  // then echo to user
     agentclient.speak(msg)
     }
  })
```

# Why this keep making error?
Because you dont have socket.io-client added. Add 'socket.io-client' module to avoid this error.
if you have module added but this will make error.

