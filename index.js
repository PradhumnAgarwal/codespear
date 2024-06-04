const app =  require('express')();
const server =  require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
    cors:{
        origin: "*",
        methods : ["GET", "POST"]
    }
})

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res)=>{
    res.send(`Server is running on PORT:${PORT}.`);
})

app.get("/ques/:id", async(req, res)=>{
    const id = req.params.id;
    let query= `query Problems {
        problem(where: {prob_id: ${id}}) {
          prob_id
          prob_title
          difficulty
          problemStatement
          inputFormat
          outputFormat
          constraints
          testcases {
            tc_id
            tc_input
            tc_output
            tc_explanation
            image
            isHidden
          }
        }
      }
       `
  
    let response = await fetch(`https://api-ap-south-1.hygraph.com/v2/clx0g9rkn04qv07w8t1mdf12x/master?query=${query}`, { 
    method: "GET",
});

    const data = await response.json();
    if(!data.data.problem) {
        res.status(404).send("Problem not found")
        return;
    }
    res.send(data.data.problem);
})

io.on('connection', (socket)=>{
    socket.emit('me', socket.id);

    socket.on('disconnect', ()=>{
        socket.broadcast.emit("callended");
    })

    socket.on('calluser', ({userToCall, signalData, from, name})=>{
        io.to(userToCall).emit("calluser", {signal: signalData, from, name});
    })

    socket.on('answercall', (data)=>{
        io.to(data.to).emit("callaccepted", data.signal)
    })
})



server.listen(PORT, ()=> console.log(`Server listening on PORT:${PORT}`))