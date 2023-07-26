class Game {
  constructor() {
    this.messi = new Messi();
    this.minMessiY = 17;
    this.maxMessiY = 420;
    this.balones = [];
    
    //pogba
    //this.pogba=new Pogba()
    this.pogbaArr = [];
    //franceses
    //this.franceses=new Franceses()
    this.francesesArr = [];
    //portero
    this.portero = new Portero();

    //porteria
    this.porteria = new Porteria();
    this.separacionVertical = 100; // Separación vertical entre los jugadores
    this.maxJugadoresPorGrupo = 5; // Número máximo de objetos por grupo
    (this.time = 0), (this.totalTime = 40 * 60); //el 60 es x las actualizaciones por segundo. probando varios numeros hasta 120 es el mejor ha quedado
    this.frames = 0;
    this.isCreatingJugadores = true;
    setTimeout(() => this.aparecePortero(), 49000);
    setTimeout(() => this.aparecePorteria(), 51000);
    this.isGameOn=true
  }
  Victoria(){
    cancelAnimationFrame(this.gameLoop)
    this.isGameOn=false;
    gameScreenNode.style.display="none";
    finalvBtnNode.style.display="flex";
    finaldBtnNode.style.display="none";

  }

  Derrota(){
    cancelAnimationFrame(this.gameLoop)
    this.isGameOn=false;
    gameScreenNode.style.display="none";
    finalvBtnNode.style.display="none";
    finaldBtnNode.style.display="flex";

  }
 
 collisionBalonPorteria=()=>{
  this.balones.forEach((balon)=>{
  if (this.porteria.x < balon.x + balon.w &&
      this.porteria.x + this.porteria.w > balon.x &&
      this.porteria.y < balon.y + balon.h &&
      this.porteria.y + this.porteria.h > balon.y){
        this.Victoria()}
      
      })
 }

 collisionBalonPortero=()=>{
  this.balones.forEach((balon)=>{
    if (this.portero.x < balon.x + balon.w &&
        this.portero.x + this.portero.w > balon.x &&
        this.portero.y < balon.y + balon.h &&
        this.portero.y + this.portero.h > balon.y){
          this.Derrota()}
        })
        
 }

 collisionFrancesMessi=()=>{
  this.francesesArr.forEach((frances)=>{
    if (this.portero.x < frances.x + frances.w &&
        this.portero.x + this.portero.w > frances.x &&
        this.portero.y < frances.y + frances.h &&
        this.portero.y + this.portero.h > frances.y){
          this.Derrota()}
        })
 }

 collisionPogbaMessi=()=>{
  this.pogbaArr.forEach((pogba)=>{
  if (this.portero.x < pogba.x + pogba.w &&
    this.portero.x + this.portero.w > pogba.x &&
    this.portero.y < pogba.y + pogba.h &&
    this.portero.y + this.portero.h > pogba.y){
      this.Derrota()}
    })
 }

 collisionBalonesFranceses=()=>{
  this.balones.forEach((balon)=>{
    if (this. .x < balon.x + balon.w &&
        this. .x + this. .w > balon.x &&
        this. .y < balon.y + balon.h &&
        this. .y + this. .h > balon.y)})

   this.francesesArr.forEach((frances)=>{
    if (this. .x < frances.x + frances.w &&
        this. .x + this. .w > frances.x &&
        this. .y < frances.y + frances.h &&
        this. .y + this. .h > frances.y)
        
        this.Derrota()
              })


          
    
 this.Derrota()}

 collisionBalonesPogbas=()=>{

 }


  messiShoot() {
    const balon = new Balon(
      this.messi.x + this.messi.w,
      this.messi.y + this.messi.h / 2
    );
    this.balones.push(balon);
    console.log(balon);
  }

  moverBalones() {
    this.balones.forEach((balon) => {
      balon.move();
    });
  }

  checkMessiPosition() {
    // límites de Messi
    if (this.messi.y < this.minMessiY) {
      this.messi.y = this.minMessiY;
    } else if (this.messi.y > this.maxMessiY) {
      this.messi.y = this.maxMessiY;
    }
  }

  RandomYPosicion = () => {
    let distanciaTest = Math.floor(
      Math.random() * (gameBoxNode.offsetHeight - this.separacionVertical)
    );
    return distanciaTest;
  }; //ASI EVITO QUE EL JUGADOR SE QUEDE PARADO TODO EL DIA DISPARANDO HACIA ADELANTE

  crearJugadoresAleatorios = () => {
    if (this.time >= this.totalTime) {
      this.isCreatingJugadores = false; //creo la parada de creacion de jugadores
      return;
    }

    if (this.isCreatingJugadores && this.frames % 60 === 0) {
      //igualo la creacion de jugadores con los frames de distancia establecido entre las filas

      const jugadoresPorAparecer =
        Math.floor(Math.random() * this.maxJugadoresPorGrupo) + 1; // Número aleatorio entre 1 y 5
      const posiblesJugadores = ["Pogba", "Franceses"];
      const posY = this.RandomYPosicion();

      for (let i = 0; i < jugadoresPorAparecer; i++) {
        const randomJugador =
          posiblesJugadores[
            Math.floor(Math.random() * posiblesJugadores.length)
          ];

        if (randomJugador === "Pogba") {
          let nuevopogba = new Pogba();
          nuevopogba.y = posY + this.separacionVertical * i;
          if (nuevopogba.y < 440) {
            this.pogbaArr.push(nuevopogba);
            nuevopogba.node.style.top = `${nuevopogba.y}px`;
          }
        } else if (randomJugador === "Franceses") {
          let nuevofranceses = new Franceses();
          nuevofranceses.y = posY + this.separacionVertical * i;
          if (nuevofranceses.y < 440) {
            this.francesesArr.push(nuevofranceses);
            nuevofranceses.node.style.top = `${nuevofranceses.y}px`;
          }
        }
      }
    }
  };

  //pogbasAparecen=()=>{
  //al inicio del juego
  //cuando pasen 2 seg o ramdon
  //if(this.pogbaArr.length===0 || this.frames%80===0){
  // let nuevopogba=new Pogba()
  //this.pogbaArr.push(nuevopogba)
  //console.log("test pogba")
  // }}

  //francesesAparecen=()=>{
  //al inicio del juego
  //cuando pasen 2 seg o ramdon
  //if(this.francesesArr.length===0|| this.frames%80===0){
  //let nuevofranceses=new Franceses()
  //this.francesesArr.push(nuevofranceses)}

  francesesDesaparecen = () => {
    //quitamos los elementos del array cuando salgan del gamescreen
    if (this.francesesArr[0].x < -30) {
      this.francesesArr[0].node.remove(); //removerlo de dom
      this.francesesArr.shift(); //quitarlo de la arr
    }
  };

  pogbasDesaparecen = () => {
    //quitamos los elementos del array cuando salgan del gamescreen
    if (this.pogbaArr[0].x < -30) {
      this.pogbaArr[0].node.remove(); //removerlo de dom
      this.pogbaArr.shift(); //quitarlo de la arr
    }
  };

  aparecePortero() {
    const maxMovement = 300; // Máxima distancia que puede avanzar el portero
    let movedDistance = 0;
    const porteroInterval = setInterval(() => {
      this.portero.x -= 10; // Muevelo 10px hacia la izq x intervalo
      this.portero.node.style.left = `${this.portero.x}px`;
      movedDistance += 10; //hace que pare
      if (movedDistance >= maxMovement) {
        clearInterval(porteroInterval);
        this.portero.movimientoPortero();
      }
    }, 150);
  }

  aparecePorteria() {
    const maxMovement2 = 230;
    let movedDistance2 = 0;
    const porteriaInterval = setInterval(() => {
      this.porteria.x -= 10;
      this.porteria.node.style.left = `${this.porteria.x}px`;
      movedDistance2 += 10;
      if (movedDistance2 >= maxMovement2) {
        clearInterval(porteriaInterval);
      }
    }, 150);
  }

  //metodos
  gameLoop = () => {
    //console.log(this.balones)
    requestAnimationFrame(this.gameLoop);
    this.frames++;
    this.time++;
    this.timerPortero++;
    this.checkMessiPosition();
    //this.messiShoot();
    this.moverBalones();
    //this.messi.movementMessiUpdate();

    // this.franceses.automaticMovement();
    // this.pogba.automaticMovement();
    // this.portero.automaticMovement();
    this.crearJugadoresAleatorios();
    this.RandomYPosicion();
    this.pogbaArr.forEach((cadaPobga) => {
      cadaPobga.automaticMovement();
    });
    this.francesesArr.forEach((cadaFrances) => {
      cadaFrances.automaticMovement();
    });

    this.francesesDesaparecen();
    this.pogbasDesaparecen();
    collisionBalonPorteria()
  };
}
