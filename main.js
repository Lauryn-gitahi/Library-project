let library=[];

// function Book(){

// }

// function addBookToLibrary(){
//     do{
//         let newBook=prompt("Enter book title");
//         library.push(newBook);
//         console.log(library);
//     }
//     while(library.length<5);
// }
// //     let i=0;
// //         for(i; i<library.length;i++)
// //         let newBook=prompt("Enter book title");

// //         while(library.length <=5){
// //         library.push(newBook);
// //         console.log(library);
// //     }
// // }
//     // newBook=prompt("Enter title of Book"); 
//         // library.push(newBook);
//         // console.log(library);


// function displayBook(){
//     for(i of library){
//         alert(i);
//         // document.getElementById("demo").innerText= items;
//     };
   
// }

// displayBook();
// addBookToLibrary();

const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.querySelector(".myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
