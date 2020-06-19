// const modalOverlay = document.querySelector('.modal-overlay'); //selecinar apenas o modal
const recipesList = document.querySelectorAll('.card'); //selecionar todos os cards no documento //array de elementos
const hide = document.querySelectorAll(".hide");
const info = document.querySelectorAll(".info"); 


//Criar um array com todos os elementos que tem a classe .card    route params
for (let i = 0, len = recipesList.length; i < len; i++) { //renderizados  0,1
  //id é a var 'i' dentro do for
  //essa função está entre parentesis porque está usando a sí mesmo 
  (function (index) { //quando clicar vai ser redirecionada para a rota 
    recipesList[i].onclick = function () {
      window.location.href = `/recipes/${index}`; //id corresponde a posição dos elementos que estão no arquivo data

    };
    //aqui eu digo que o var 'i' é parametro da função e dentro dela conseguimos
    //utilizá-lo como o parâmetro  id 
  })(i);  //
}


//Script pra mostrar o mostrar e esconder

for (let i = 0; i < hide.length; i++) {
  hide[i].addEventListener("click", function() {
    if (hide[i].textContent == "ESCONDER") { //Hide 1 == ao conteudo o texto esconder 
      hide[i].textContent = "MOSTRAR";//se apertar no mostrar 
      info[i].classList.add("off"); //add off classe que esconde 
    }
    else {
      hide[i].textContent = "ESCONDER";  //se apertar no esconder 
      info[i].classList.remove("off"); //remover a class off esconder o conteudo
    }
  })
}





/*
for(let card of cards){
  card.addEventListener("click", function(){
    modalOverlay.classList.add('active')
  })

}

document.querySelector('.modal-rodape').addEventListener("click", function(){
  modalOverlay.classList.remove('active');
})
*/

/*for(let card of cards){
}Repetição*/