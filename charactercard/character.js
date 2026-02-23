const character = {
  name: "Snortleblat",
  class: "Swap Beast Diplomat",
  level: 1,
  health: 100,
  image: "images/snortleblat.webp",
  attacked() {
    this.health -= 20;

    if (this.health <= 0) {
        this.health = 0;
        alert(`${this.name} has died!`);
        }
    },      
  levelUp() {
    this.level += 1;
    }
    };

function renderCharacter () {
document.getElementById("charImage").src = character.image;
document.getElementById("charName").textContent = character.name;
document.getElementById("charClass").textContent = character.class;
document.getElementById("charLevel").textContent = character.level;
document.getElementById("charHealth").textContent = character.health;
}

renderCharacter();

document.getElementById("attackBtn").addEventListener("click", () => {
    character.attacked();
    renderCharacter();
});
document.getElementById("levelBtn").addEventListener("click", () => {
    character.levelUp();
    renderCharacter();
});
