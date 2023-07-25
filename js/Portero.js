class Portero {
  constructor() {
    //propiedades
    this.node = document.createElement("img");
    this.node.src = "./imagenes/portero.png";
    gameBoxNode.append(this.node);

    //posicion y dimensiones
    this.x = gameBoxNode.offsetWidth; //ancho de la juego;
    this.y = 200;
    this.h = 60;
    this.w = 60;
    this.inicialX = this.x; //guardo la posicion inicial
    this.minY = 112;
    this.maxY = 320;
    


    //ajuste y posicion inicial
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  //metodos
  automaticMovement = () => {
    this.y -= 2;
    this.positionUpdate4();
  };
  positionUpdate4 = () => {
    this.node.style.top = `${this.y}px`;
  };

 
}
