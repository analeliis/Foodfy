const express = require("express") //buscar o modulo express
const server = express() //executar o express

//CRIAR SERVIDOR
server.listen("3000", function(){
  console.log("Serving conecter")
})

//CRIAR ROTAS
server.get("/",function(req,res){
  return res.send("index.html")
})