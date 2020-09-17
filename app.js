const btn= document.querySelector(".myBtn");
const modal = document.getElementById("myModal");
const submit = document.querySelector(".btn-submit");
const list= document.querySelector(".section-list");
const span= document.querySelector(".close");



btn.addEventListener('click', displayForm);
span.addEventListener("click",close);
submit.addEventListener('submit', addBook);
list.addEventListener("click", delBook);

function displayForm(){
    modal.style.display = "block";
}

    function close(){
  modal.style.display = "none";
}


// function Book(addedBook){


// }


function addBook(e){
    e.preventDefault();
    // let addedBook=[];
//    let inputInfo= document.getElementsByTagName("input");
//    if(inputInfo === "" || inputInfo === null || inputInfo === !isFinite){
    // addedBook.push(+inputInfo);
    // return addedBook.value;
// //    }
//    let addedBook= [].map.call(inputInfo, function(input){//inputInfo is the current (array)element being processed
   
//       return input.value;
    
//    });
   
let item = document.createElement("div");
item.classList.add("item-list")
let listItem=  document.createElement('li');
listItem.classList.add("list-items");
// listItem.textContent= e.target.elements.booktitle.value + " \n" + e.target.elements.auth.value + "\n " + e.target.elements.nopages.value + "\n " + e.target.elements.status.value;
listItem.textContent= `${e.target.elements.booktitle.value} 

${e.target.elements.auth.value} 

${e.target.elements.nopages.value} 


${e.target.elements.status.value}`;

   listItem.style.fontSize='25px';
//    listItem.style.lineHeight='45px';

item.appendChild(listItem);

let deleteBook= document.createElement("button");
deleteBook.classList.add("delBtn");
deleteBook.innerHTML='<i class="fas fa-trash"></i>';
item.appendChild(deleteBook);

list.appendChild(item);

}

function delBook(e){
    let tagItem = e.target;
    // console.log(tagItem);
    if(tagItem.classList === "delBtn");
    const item=tagItem.parentElement;
    item.remove();

}

