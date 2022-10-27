
  const consultationsGrid = document.getElementById("consultations-grid");
  const allCards = [...document.querySelectorAll('consultation-card')];

  allCards.forEach((card)=> {
    console.log('123' + card.title.style);
    card.title.stlye.backgroundColor = 'red';
  });
  
function addCard(title, img, imgAlt, text, dollars) {
  const consultationsGrid = document.getElementById("consultations-grid");
  
  const card = {
    title: "title",
    img: "img",
    text: "hi",
    price: "99",
  };

  this.title = title;
  this.img = img;
  this.imgAlt = imgAlt;
  this.text = text;
  this.dollars = dollars;

  const newCard = document.createElement("div");
  const newInner = document.createElement("div");
  const newTitle = document.createElement("h3");
  const newImg = document.createElement("img");
  const newText = document.createElement("p");
  const newPrice = document.createElement("div");
  const newDollars = document.createElement("span");

  newCard.className += "consultation-card";
  newInner.className += "consultation-inner";
  newTitle.className += "consultation-title";
  newImg.className += "consultation-img";
  newText.className += "consultation-text";
  newPrice.className += "consultation-price";
  newDollars.className += "consultation -dollars";

  //set title
  newTitle.innerHTML = `${title}`;

  //img settings
  newImg.src = `${img}`;
  newImg.alt = `${imgAlt}`;

  //text blurb
  newText.innerHTML = `${text}`;

  //price settings
  newPrice.textContent = "$";
  newDollars.innerHTML = dollars;

  newPrice.appendChild(newDollars);
  newInner.appendChild(newTitle);
  newInner.appendChild(newImg);
  newInner.appendChild(newText);
  newInner.appendChild(newPrice);
  newCard.appendChild(newInner);

  consultationsGrid.appendChild(newCard);
  console.log(`Added card ${title} `);
}


function cardTurn(){

}
function renderServices() {
  serviceArray.forEach((service) => {
    console.log(service.title);
    addCard(
      service.title,
      service.img,
      service.imgAlt,
      service.text,
      service.dollars
    );
  });
}
renderServices();

function postBlog() {
  blogPost.forEach((post) => {
    console.log(post.title);
  });
}
