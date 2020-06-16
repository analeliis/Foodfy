const express = require("express") //buscar o modulo express
const server = express() //executar o express
const nunjucks = require("nunjucks") //buscar o modulo nunjucks
const data = require("./data")




//CRIAR SERVIDOR
server.listen("3000", function () {
  console.log("Serving conecter")
})

//CRIAR ROTAS
server.get("/", function (req, res) {
  return res.render("home", {
    itens: data
  })
})

server.get("/about", function (req, res) {
  return res.render("about")
})

server.get("/listRecipes", function (req, res) {
  return res.render("listRecipes", {
    itens: data
  })
})




server.get("/recipes/:index", function(req,res){
  const recipes = data
  const recipeIndex = req.params.index //pega as informações ataves da url no caso seria o id

  if(!recipes[recipeIndex]){
    return res.render("not-found");
  }

  return res.render("recipes",{
    recipes:recipes[recipeIndex]
  })
})



//Arquivos Estaticos
server.use(express.static("public"))

server.use(function (req, res) {
  res.status(404).render("not-found");
})


//CONFIGURAÇÃO NO NUNJUCKS
server.set("view engine", "njk")
nunjucks.configure("src/views", {
  express: server,
  // autoescape: true
})

