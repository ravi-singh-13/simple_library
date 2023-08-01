let myLibrary = [
  {
    title: "A Game of Thrones",
    img: "https://i.pinimg.com/564x/53/30/22/53302236792cc392a9cca445ba7c015d.jpg",
    author: "George R. R. Martin",
    pages: 694,
    read: false
  }
];

//dom input
const book_case = document.querySelector(".book-case");

const submitButton = document.querySelector("#book_submit")
const buttonRead = document.querySelectorAll(".buttonRead")
console.log(book_case)

// form input
const newTitle = document.querySelector("#title");
const newImg = document.querySelector("#img")
const newAuthor = document.querySelector("#author");
const newPages = document.querySelector("#pages");
const finised = document.querySelector("#yes");
const notFinished = document.querySelector("#no")

// reading status code
function bookStatus() {
  if (finised.checked) {
    return true;
  } else {
    return false;
  }
};

function book(title, img, author, pages, read) {
  this.title = title;
  this.img = img;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = newTitle.value;
  let img = newImg.value;
  let author = newAuthor.value;
  let pages = newPages.value;
  let read = bookStatus();

  let newBook = new book(title, img, author, pages, read);
  myLibrary.push(newBook);
}




function addBooktoDom() {
  let newDiv = document.createElement("div");
  let newH = document.createElement("h4");
  //img
  var newImg = document.createElement("IMG");
  newImg.setAttribute("width", "220");
  newImg.setAttribute("height", "228");
  newImg.setAttribute("alt", "Book cover");
  //
  let newp1 = document.createElement("p");
  let newp2 = document.createElement("p");
  let newp3 = document.createElement("p")
  let newButtonRead = document.createElement("BUTTON");
 
  newButtonRead.innerText= "change read status";

  let newButtonDelete =document.createElement("button");
  newButtonDelete.innerText= "delete";



  for (let x of myLibrary) {
    newH.innerText = x.title;
    //img
    let src = ""
    if (x.img) {
      src = x.img
    } else {
      src = "./img/img_not_found.png"
    }
    
    //
    newImg.setAttribute("src", src)
    newp1.innerText = x.author;
    newp2.innerText = x.pages;
   
    newDiv.classList.add('book');
    newDiv.setAttribute("id", myLibrary.indexOf(x))
    //read status
   
    if (x.read) {
      newp3.innerText = "Read"
    } else {
      newp3.innerText = "not read yet"
    };
    //button read
    newButtonRead.setAttribute('id',myLibrary.indexOf(x));
    newButtonRead.onclick = () => {
      // Change read status when the button is clicked
      x.read = !x.read;
      // Update the DOM to reflect the change
      if (x.read) {
        newp3.innerText = "Read"
      } else {
        newp3.innerText = "not read yet"
      };
     
     ;}
     //button delete
      newButtonDelete.setAttribute('id', myLibrary.indexOf(x));
      newButtonDelete.onclick = () => {

        myLibrary.splice(myLibrary.indexOf(x), 1);
        book_case.removeChild(newDiv);
      }
    newDiv.appendChild(newH);
    newDiv.appendChild(newImg)
    newDiv.appendChild(newp1);
    newDiv.appendChild(newp2);
    newDiv.appendChild(newp3);
    newDiv.appendChild(newButtonRead);
    newDiv.appendChild(newButtonDelete);
    book_case.appendChild(newDiv);
  }
};addBooktoDom();

function formClear(){
  newTitle.value = "";
 newImg.value = "";
 newAuthor.value = "";
 newPages.value = "";
 finised.value = "";
notFinished.value = "";
};

function cleanDom(){
  book_case.textContent=""
}

buttonRead.onclick=()=>{
  console.log("book_case")
}


submitButton.onclick = () => {
  event.preventDefault();
  addBookToLibrary();
  addBooktoDom();
  formClear();
  
};
