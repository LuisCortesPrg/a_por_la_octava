class Game {
  constructor() {
    this.messi = new Messi();

    //pogba
    //this.pogba=new Pogba()
this.pogbaArr=[];
    //franceses
    //this.franceses=new Franceses()
this.francesesArr=[];
    //portero
    //this.portero=new Portero()

  }
  pogbasAparecen=()=>{
//al inicio del juego
//cuando pasen 2 seg o ramdon
if(this.pogbaArr.length===0){
  let nuevopogba=new Pogba()
  this.pogbaArr.push(nuevopogba)
  console.log(this.pogbaArr)
  }}
francesesAparecen=()=>{
//al inicio del juego
//cuando pasen 2 seg o ramdon
if(this.francesesArr.length===0){
  let nuevofranceses=new Franceses()
  this.francesesArr.push(nuevofranceses)
  console.log(this.francesesArr)
}
}

  //metodos
  gameLoop = () => {
    requestAnimationFrame(this.gameLoop);
   // this.franceses.automaticMovement();
   // this.pogba.automaticMovement();
   // this.portero.automaticMovement();
   this.pogbasAparecen()
   this.francesesAparecen()
  };
}
