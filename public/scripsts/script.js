const modalOverlay = document.querySelector('.modal-overlay'); //selecinar apenas o modal
const cards = document.querySelectorAll('.card'); //selecionar todos os cards no documento

for(let card of cards){
  card.addEventListener("click", function(){
    modalOverlay.classList.add('active')
  })
  
}

document.querySelector('.modal-rodape').addEventListener("click", function(){
  modalOverlay.classList.remove('active');
})


/*for(let card of cards){
}Repetição*/