let serviceArray = [];


function services(title, img, imgAlt, text, dollars) {
  this.title = title;
  this.img = img;
  this.imgAlt = imgAlt;
  this.text = text;
  this.dollars = dollars;
  serviceArray.push(this);
  console.log(`service ${title} created`);
}


let service02 = new services(
  "Charts for the Natal Stars",
  "assets/svgs/towel.svg",
  "woman",
  "A natal chart reading you can take home with you!",
  50.0
);
let service03 = new services(
  "Birth Chart Reading",
  "assets/svgs/frame2.svg",
  "woman",
  "A natal chart reading you can take home with you!",
  50.0
);


let service04 = new services(
    "Texas Holdem",
    "assets/svgs/peacock.svg",
    "woman",
    "A natal chart reading you can take home with you!",
    50.0
  );

  
let service05 = new services(
    "Uno Reverse",
    "assets/svgs/bugs.svg",
    "woman",
    "A natal chart reading you can take home with you!",
    50.0
  );

  let service07 = new services(
    "Nick Cannons Kids Deck",
    "assets/svgs/heroish.svg",
    "woman",
    "A natal chart reading you can take home with you!",
    50.0
  );

  
let service06 = new services(
    "Recipes for a fun weekend",
    "assets/svgs/wander.svg",
    "woman",
    "A natal chart reading you can take home with you!",
    50.0
  );
  let service10 = new services(
    "Uno Reverse",
    "assets/svgs/bugs.svg",
    "woman",
    "A natal chart reading you can take home with you!",
    50.0
  );

  let service08 = new services(
    "Nick Cannons Kids Deck",
    "assets/svgs/heroish.svg",
    "woman",
    "A natal chart reading you can take home with you!",
    50.0
  );

  
let service09 = new services(
    "Recipes for a fun weekend",
    "assets/svgs/wander.svg",
    "woman",
    "A natal chart reading you can take home with you!",
    50.0
  );