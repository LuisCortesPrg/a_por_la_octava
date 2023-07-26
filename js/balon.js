class Balon {
  constructor(x, y) {
    this.node = document.createElement("img");
    this.node.src = "./imagenes/SoccerBall_0.png";
    gameBoxNode.append(this.node);

    //propiedades de balon
    this.x = x;
    this.y = y;
    this.w = 25;
    this.h = 25;
    //ajuste y posicion inicial
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  move() {
    this.x += 5; //  velocidad
    this.node.style.left = `${this.x}px`;

    // Si el balón sale de la pantalla, lo eliminas
    if (this.x > gameBoxNode.offsetWidth) {
      this.remove();
    }
  }

  remove() {
    this.node.remove();
  }

 
}
