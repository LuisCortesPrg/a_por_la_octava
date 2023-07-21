class Game {
  constructor() {
    this.messi = new Messi();
  }

  //metodos
  gameLoop = () => {
    requestAnimationFrame(this.gameLoop);
  };
}
