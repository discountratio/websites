

const addBookButton = document.getElementById("header-add-book");
const loginButton = document.getElementById("header-login");
const booksGrid = document.getElementById("book-grid");
const newBookScreen = document.getElementById("input-book-screen");
const newBookAdd = document.getElementById("input-book-menu-add");
const newBookRead = document.getElementById("input-book-menu-read");
const removeBook = [...document.querySelectorAll('new-book-remove')];




const bookCovers = [
 'https://images.unsplash.com/photo-1636542645091-719c5d3dd3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
 'https://images.unsplash.com/photo-1482189349482-3defd547e0e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
 'https://images.unsplash.com/photo-1522681179166-dabb0c8bf805?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=940&q=80',
 'https://images.unsplash.com/photo-1642289805782-1c30f6a9e3a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  'https://images.unsplash.com/photo-1610599083971-83a1abb23a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  'https://images.unsplash.com/photo-1557018250-c58928b114a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
];

//----Works!
//Toggles the new book menu from displaying
//newBookMenu takes up entire screen
let newBookMenuToggle = false;
function toggleNewBookMenu() {
  if (!newBookMenuToggle) {
    newBookMenuToggle = true;
    newBookScreen.classList.add("input-book-screen", "input-book-display-on");
    newBookScreen.style["display"] = "flex";
    newBookScreen.style["z-index"] = "999";
  } else {
    newBookMenuToggle = false;
    newBookScreen.classList.remove("input-book-screen", "input-book-display-on");
    newBookScreen.style["display"] = "none";
    newBookScreen.style["z-index"] = "-1";
  }
}

// generate random number in range
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//-----Works!
//Toggles button clicked on / off
function toggleButton(x) { 
  if (x.value == "OFF") {
    x.classList.remove('button-off');
    x.classList.add('button-on')
    x.value = "ON";
  } else {
    x.classList.remove('button-on');
    x.classList.add('button-off')
    x.value = "OFF";
  }
  return x.value;
}

//-----Works!
newBookRead.addEventListener("click", () => {
  toggleButton(newBookRead);
});

//only makes the popup for the add new book menu
addBookButton.addEventListener("click", () => {
  toggleNewBookMenu();
});




newBookAdd.addEventListener("click", (e) => {
  const newBookForm = document.getElementById("input-book-form");
  const forms = new FormData(newBookForm);
  const formTitle = forms.get("input-book-menu-title");
  const formAuthor = forms.get("input-book-menu-author");
  const formPages = forms.get("input-book-menu-pages");

  const book = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const read = document.createElement("button");
  const remove = document.createElement("button");

 

  title.textContent = `${formTitle}` || `Default Title`;
  author.textContent = `${formAuthor}` || `Default Author`;
  pages.textContent = `${formPages} pages` || 9999;
  read.textContent = "read";
  remove.textContent = "remove";


  // Images

  const randomNum = random(bookCovers.length, 0);
  const randomImg = bookCovers[randomNum];
// console.log(`
// bookcover.length: ${bookCovers.length}
// randomNum:        ${randomNum}
// randomImg:        ${randomImg}

// `)

  
const img = document.createElement('img');
img.src = randomImg;

  
// ---------------------------------------------


  read.addEventListener('click', ()=>{
    toggleButton(read);
  })

 

  //book creation
  book.classList.add("new-book");
  title.classList.add("new-book-title");
  author.classList.add("new-book-author");
  pages.classList.add("new-book-pages");
  read.classList.add("new-book-read", "book-button");
  remove.classList.add("new-book-remove", "book-button");
  img.classList.add('new-book-img');


  // book.style.background = `url(${img.src})`

  book.append(title, img, author, pages, read, remove);
  booksGrid.appendChild(book);



  remove.addEventListener('click', (e)=>{
    // toggleButton(remove);
    console.log('remove');
    //add delete funcitonality menu
    const deletePrompt = prompt('Delete? y/n');
    deletePrompt === 'y' ? book.remove() : console.log('nope');
  })

 
  newBookForm.reset();
  toggleNewBookMenu();

});



