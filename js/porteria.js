class Porteria {
  constructor() {
    //propiedades
    this.node = document.createElement("img");
    this.node.src = "./imagenes/porteria.png";
    gameBoxNode.append(this.node);

    //posicion y dimensiones
    this.x = gameBoxNode.offsetWidth; //ancho de la juego;
    this.y = 112;
    this.h = 280;
    this.w = 120;

    //ajuste y posicion inicial
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }
  //metodos

  
}
