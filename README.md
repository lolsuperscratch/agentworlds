# AgentWorlds
![Demo Image](https://i.imgur.com/7GWM0Io.png)
<br>
![Build Status](https://travis-ci.com/lolsuperscratch/agentworlds.svg)
[Demo](https://kindhearted-tulip.glitch.me/demo.html)



# Usage
Ping Pong Bot:
```js
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
```js
  var AgentWorlds = require('agentworlds')
  var agentclient = AgentWorlds.start("AGENT_NAME") // default agent name is F1 and inculde the room
  agentclient.socket.on('r_speak',function(msg,id) {
  // easy way to use agentclient.speak('ANYTHING') in the browser console. not node.js client
  // then echo to user
     agentclient.speak(msg)
     }
  })
```



