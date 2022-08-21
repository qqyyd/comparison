class Overworld {
 constructor(config) {
   this.element = config.element;
   this.canvas = this.element.querySelector(".game-canvas");
   this.ctx = this.canvas.getContext("2d");
   this.map = null;
 }

  startGameLoop() {
    const step = () => {
      //Clear off the canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      //建立摄像机人物
      const cameraPerson = this.map.gameObjects.hero;
      
      //提前更新所有的事物
      Object.values(this.map.gameObjects).forEach(object => {
        object.update({
          arrow: this.directionInput.direction,
          map:this.map,
        })
      })
    

      //Draw Lower layer
      this.map.drawLowerImage(this.ctx,cameraPerson);

      //Draw Game Objects
      Object.values(this.map.gameObjects).forEach(object => {
        object.update({
          arrow: this.directionInput.direction
        })
        object.sprite.draw(this.ctx,cameraPerson);
      })

      //Draw Upper layer
      this.map.drawUpperImage(this.ctx,cameraPerson);
      
      requestAnimationFrame(() => {
        step();   
      })
    }
    step();
 }

 init() {
  this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
  this.map.mountObjects();

  this.directionInput = new DirectionInput();
  this.directionInput.init();

  this.startGameLoop();
 }
}