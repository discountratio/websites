const addBookButton = document.getElementById("header-add-book");
const loginButton = document.getElementById("header-login");
const booksGrid = document.getElementById("book-grid");
const newBookScreen = document.getElementById("input-book-screen");
const newBookAdd = document.getElementById("input-book-menu-add");
const newBookRead = document.getElementById("input-book-menu-read");
const removeBook = [...document.querySelectorAll('new-book-remove')];


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
  console.log(`${x}: ${x.value}`);
  return x.value;
}



newBookRead.addEventListener('click', ()=>{
  toggleButton(newBookRead);
  console.log('ppooop')

})

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

// ---------------------------------------------
  read.addEventListener('click', ()=>{
    toggleButton(read);
    read.value == 'ON' ? read.textContent = `read ✔` : read.textContent = "read X";
  })


  newBookRead.value == 'ON' ? read.value = 'ON' : read.value = 'OFF'; 
  newBookRead.value == 'ON' ? read.textContent = 'read ✔' : newBookRead.textContent = 'read X';
  remove.textContent = 'X';

  //book creation
  book.classList.add("new-book");
  title.classList.add("new-book-title");
  author.classList.add("new-book-author");
  pages.classList.add("new-book-pages");
  read.classList.add("new-book-read", "book-button");
  remove.classList.add("new-book-remove", "book-button");

  book.append(title, author, pages, read, remove);
  booksGrid.appendChild(book);

  remove.addEventListener('click', (e)=>{
    console.log('remove');
    //add delete funcitonality menu
    const deletePrompt = prompt(`Enter 'yes' to delete`);
    deletePrompt === 'yes' ? book.remove() : console.log('nope');
  })

 
  newBookForm.reset();
  toggleNewBookMenu();
});



