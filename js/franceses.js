class Franceses{
    constructor(){
    //propiedades
this.node=document.createElement("img");
this.node.src="./imagenes/defensa2.png"
gameBoxNode.append(this.node)

//posicion y dimensiones
this.x=gameBoxNode.offsetWidth; //ancho de la juego
this.y=250;
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
        this.positionUpdate2()
    }
    positionUpdate2=()=>{
        this.node.style.left = `${this.x}px`;  
    }
}