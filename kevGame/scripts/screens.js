// const fightScreen = document.getElementById("fight-screen");

function makeScreens() {
  screens.forEach((screen) => {
    screen.id = screen.classList[0];
  });

}


const hero ={
    heroImg : '/assets/hero/hero.gif',
    heroName: 'Kevin',
}




makeScreens();

function fightScreen(){
    const getFightScreen = document.querySelector('.fight-screen');

    const getFightScreenPlayer = document.querySelector('.fight-screen-player');
    const getFightScreenPlayerImg = document.querySelector('.fight-screen-player-img');
    const getFightScreenPlayerInfo = document.querySelector('.fight-screen-player-info');

    const getFightScreenEnemy = document.querySelector('.fight-screen-enemy');
    const getFightScreenEnemyImg = document.querySelector('.fight-screen-enemy-img');
    const getFightScreenEnemyInfo = document.querySelector('.fight-screen-enemy-info');

    
    const newEnemy = new Enemy(
        enemyList[0].name,
        enemyList[0].img,
        enemyList[0].hp,
        enemyList[0].xp
      );
      
      
    newEnemy.intro();
    getFightScreenPlayerImg.src = hero.heroImg;
    getFightScreenEnemyImg.src = newEnemy.img;

    const displayEnemyName =  document.createElement('div');
    const displayEnemyHp =  document.createElement('div');
    const displayEnemyXp =  document.createElement('div');

    displayEnemyName.textContent =  `${newEnemy.name}`;
    displayEnemyHp.textContent = `HP: ${newEnemy.hp}`;
    displayEnemyXp.textContent = `XP: ${newEnemy.xp}`;

    getFightScreenEnemyInfo.append(displayEnemyName, displayEnemyHp, displayEnemyXp)
}


fightScreen();