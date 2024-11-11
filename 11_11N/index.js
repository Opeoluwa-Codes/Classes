const http = require("http")
const PORT = 3000

const serverApp = http.createServer((req, res)=>{

    res.write("Our server is up and running")
    res.end()

})


serverApp.listen(PORT, ()=>{

    console.log("Server is running")

})