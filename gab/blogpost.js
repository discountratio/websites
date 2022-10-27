let blogArray = [];


function blogPost(date, title, img, imgAlt, text) {
  this.date = date;
  this.title = title;
  this.img = img;
  this.imgAlt = imgAlt;
  this.text = text;
blogArray.push(this)
  serviceArray.push(this);
  console.log(`blog ${title} created`);
}

let blogpost01 = new blogPost(
  "Jan 23 1989",
  "A day at the races",
  "assets/svgs/towel.svg",
  "woman",
  "What a lovely day to watch the races. Vroom vroom go the fast cars. Oh my gosh Max Verstappen is not that dreamy but boy oh boy can he drive that RedBull Racing f1 car!",
);