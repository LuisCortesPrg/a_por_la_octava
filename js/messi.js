class Messi {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./imagenes/delantero(2).png";
    gameBoxNode.append(this.node);
    //propiedades de messi
    this.x = 20;
    this.y = 150;
    this.w = 60;
    this.h = 60;
    //ajuste y posicion inicial
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  //metodos de messi
posicionUpdate1=()=>{
//messi se mueve arriba y abajo
this.node.style.top = `${this.y}px`
}

}
