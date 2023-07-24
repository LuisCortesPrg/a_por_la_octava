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
//porteria
//this.porteria= new Porteria()
    
this.frames=0;
  }

  francesesDesaparecen =()=>{
    //quitamos los elementos del array cuando salgan del gamescreen
    if(this.francesesArr[0].x<-30){
      this.francesesArr[0].node.remove()//removerlo de dom
      this.francesesArr.shift()//quitarlo de la arr
    }
  }

  pogbasDesaparecen =()=>{
    //quitamos los elementos del array cuando salgan del gamescreen
    if(this.pogbaArr[0].x<-30){
      this.pogbaArr[0].node.remove()//removerlo de dom
      this.pogbaArr.shift()//quitarlo de la arr
    }
  }

  pogbasAparecen=()=>{
//al inicio del juego
//cuando pasen 2 seg o ramdon
if(this.pogbaArr.length===0 || this.frames%80===0){
  let nuevopogba=new Pogba()
  this.pogbaArr.push(nuevopogba)
 
  }}

francesesAparecen=()=>{
//al inicio del juego
//cuando pasen 2 seg o ramdon
if(this.francesesArr.length===0|| this.frames%80===0){
  let nuevofranceses=new Franceses()
  this.francesesArr.push(nuevofranceses)
  
}
}

  //metodos
  gameLoop = () => {
    requestAnimationFrame(this.gameLoop);
    this.frames++;
    
   // this.franceses.automaticMovement();
   // this.pogba.automaticMovement();
   // this.portero.automaticMovement();
   this.pogbasAparecen()
   this.francesesAparecen()
   this.pogbaArr.forEach((cadaPobga)=>{
cadaPobga.automaticMovement()
   })
   this.francesesArr.forEach((cadaFrances)=>{
    cadaFrances.automaticMovement()
   })
   this.francesesDesaparecen()
   this.pogbasDesaparecen()
  };
 
}
