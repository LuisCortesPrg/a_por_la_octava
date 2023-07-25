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

  movimientoPortero() {
    setInterval(() => {
      this.y += 15; // Incrementa la posición en el eje Y (puedes ajustar la velocidad cambiando el valor 2)
      if (this.y > this.maxY) {
        this.y = this.minY; // Si alcanza la posición maxY, reinicia el movimiento desde minY
      }
      this.node.style.top = `${this.y}px`; // Actualiza la posición en el DOM
    }, 200); // Establece el intervalo de tiempo (puedes ajustar el valor para cambiar la velocidad del movimiento)
  }
}

