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
this.separacionVertical = 100; // Separación vertical entre los jugadores
this.maxJugadoresPorGrupo = 5; // Número máximo de objetos por grupo
this.time=0,
this.totalTime=40 * 60; //el 60 es x las actualizaciones por segundo. probando varios numeros hasta 120 es el mejor ha quedado
this.frames=0;

this.isCreatingJugadores = true;

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

  
  RandomYPosicion = () => {
    let distanciaTest= Math.floor(Math.random() * (gameBoxNode.offsetHeight - this.separacionVertical));
    console.log(distanciaTest)
    return distanciaTest
  };//ASI EVITO QUE EL JUGADOR SE QUEDE PARADO TODO EL DIA DISPARANDO HACIA ADELANTE

  crearJugadoresAleatorios = () => {
    if (this.time >= this.totalTime) {
      this.isCreatingJugadores = false; //creo la parada de creacion de jugadores
      return;
    }
    if (this.isCreatingJugadores && this.frames % 60=== 0) { //igualo la creacion de jugadores con los frames de distancia establecido entre las filas

    const jugadoresPorAparecer = Math.floor(Math.random() * this.maxJugadoresPorGrupo) + 1; // Número aleatorio entre 1 y 5
    const posiblesJugadores = ["Pogba", "Franceses"];
    const posY = this.RandomYPosicion();

    for (let i = 0; i < jugadoresPorAparecer; i++) {
      const randomJugador = posiblesJugadores[Math.floor(Math.random() * posiblesJugadores.length)];

          if (randomJugador === "Pogba") {
        let nuevopogba = new Pogba();
        this.pogbaArr.push(nuevopogba);
        //nuevopogba.y = posY + this.separacionVertical * i;
        nuevopogba.node.style.top = `${nuevopogba.y}px`;

      } else if (randomJugador === "Franceses") {
        let nuevofranceses = new Franceses();
        this.francesesArr.push(nuevofranceses);
        console.log(this.francesesArr.length)
        //nuevofranceses.y = posY + this.separacionVertical * i;
        nuevofranceses.node.style.top = `${nuevofranceses.y}px`;
      }
    }
    }
  };








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
    this.time++;

    

   // this.franceses.automaticMovement();
   // this.pogba.automaticMovement();
   // this.portero.automaticMovement();
   this.crearJugadoresAleatorios();
   this.RandomYPosicion()
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
