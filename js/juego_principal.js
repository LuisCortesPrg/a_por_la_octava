//variables totales
const startBtnNode = document.querySelector("#start");
const viScreenNode = document.querySelector("#ventana_inicial");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");

let gameObj = null;

//state management functions
function empezarJugar() {
  viScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObj = new Game();
  gameObj.gameLoop();
}

//add event listeners
startBtnNode.addEventListener("click", empezarJugar);
window.addEventListener("keydown", (event) => {
  gameObj.messi.movimientoMessi(event);    
  //console.log(event)
});
