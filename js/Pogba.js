class Pogba{
    constructor(){
    //propiedades
this.node=document.createElement("img");
this.node.src="./imagenes/S.jugador.png";
gameBoxNode.append(this.node)

//posicion y dimensiones
this.x=gameBoxNode.offsetWidth; //ancho de la juego;
this.y=320;
this.h=60;
this.w=60;

 //ajuste y posicion inicial
 this.node.style.width = `${this.w}px`;
 this.node.style.height = `${this.h}px`;
 this.node.style.position = "absolute";
 this.node.style.top = `${this.y}px`;
 this.node.style.left = `${this.x}px`;



}


//metodos
automaticMovement=()=>{
    this.x -=2
    this.positionUpdate3()
}
positionUpdate3=()=>{
    this.node.style.left = `${this.x}px`;  
}

}