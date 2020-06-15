const express = require("express") //buscar o modulo express
const server = express() //executar o express
const nunjucks = require("nunjucks") //buscar o modulo nunjucks
const data = require("./data")




//CRIAR SERVIDOR
server.listen("3000", function(){
  console.log("Serving conecter")
})

//CRIAR ROTAS
server.get("/",function(req,res){
  return res.render("home",{
    itens:data
  })
})

server.get("/about",function(res,res){
  return res.render("about")
})

//Arquivos Estaticos
server.use(express.static("public"))



//CONFIGURAÇÃO NO NUNJUCKS
server.set("view engine","njk")
nunjucks.configure("src/views",{
  express:server,
  // autoescape: true
})

