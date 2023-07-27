//variables totales
const startBtnNode = document.querySelector("#start");
const finalvBtnNode = document.querySelector("#finalv");
const finaldBtnNode = document.querySelector("#finald");
const viScreenNode = document.querySelector("#ventana_inicial");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
const vScreenNode= document.querySelector("#game-over-victoria")
const dScreenNode=document.querySelector("#game-over-derrota")
const Musica=document.querySelector("#muchachos")


let gameObj = null;

//state management functions
function empezarJugar() {
  viScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
muchachos.play()
  gameObj = new Game();
  gameObj.gameLoop();
}
function reempezar(){
  viScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
  vScreenNode.style.display = "none";
  dScreenNode.style.display = "none";
  gameBoxNode.innerHTML = "";
  muchachos.pause()
  gameObj = new Game();
  muchachos.play()
  gameObj.gameLoop();

}
//add event listeners
startBtnNode.addEventListener("click", empezarJugar);
finalvBtnNode.addEventListener("click", reempezar); 
finaldBtnNode.addEventListener("click", reempezar);

window.addEventListener("keydown", (event) => {
  gameObj.messi.movimientoMessi(event);
  if (event.key === " ") {
    gameObj.messiShoot();}});

window.addEventListener(empezarJugar, ()=>{
  muchachos.play()
})    
  
  

