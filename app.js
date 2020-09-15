const btn= document.querySelector(".myBtn");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const submit = document.querySelector(".btn-submit");
const list= document.querySelector(".section-list")
const close= document.querySelector(".close");


btn.addEventListener('click', displayForm);
submit.addEventListener('click', addBook);

function displayForm(){
    modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
//     let formDisplay= document.querySelector(".form");
//     if(formDisplay.style.display === "none"){
//         formDisplay.style.display= "block";
//     } 
//     else{
//         formDisplay.style.display= "none";
//     }  
// }



// Get the button that opens the modal
// const btn = document.querySelector(".myBtn");

// Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

function Book(addedBook){
// let items=

}


function addBook(e){
    e.preventDefault();
   let inputInfo= document.getElementsByTagName("input");
   let addedBook= [].map.call(inputInfo, function(input){//inputInfo is the current (array)element being processed
   
      return input.value;
    
   });
   
let item = document.createElement("div");
let listItem=  document.createElement('li');
listItem.innerText=addedBook;
listItem.classList.add("list-items");
item.appendChild(listItem);
list.appendChild(listItem);
// document.querySelector(".items").innerText=addedBook;
//    console.table(book);
// 
}