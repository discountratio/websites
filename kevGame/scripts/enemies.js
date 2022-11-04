class Enemy {
  constructor(name, img, hp, xp) {
    this.name = name;
    this.img = img;
    this.hp = hp;
    this.xp = xp;


    const enemyInfo = 
    `
    *------------------*
    | Make Enemy
    |-------------------
    | name: ${name}
    | img:  ${img}
    | hp:   ${hp}
    | xp:   ${xp} 
    *------------------*`

    this.intro = function() {
        console.log(enemyInfo);
      }
  }
}

const enemyImgUrl = "/assets/enemy/";
//add new items to list
const enemyList = [
  { name: "shroom", img: `${enemyImgUrl}${this.name}.png`, hp: 99, xp: 10 },
];

