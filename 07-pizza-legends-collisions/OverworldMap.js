class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.walls = config.walls || {};

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx,cameraPerson) {
    ctx.drawImage(this.lowerImage, 
    utils.withGrid(5)-cameraPerson.x, 
    utils.withGrid(7)-cameraPerson.y
    )
  }

  drawUpperImage(ctx,cameraPerson) {
    ctx.drawImage(this.upperImage, 
      utils.withGrid(5)-cameraPerson.x, 
      utils.withGrid(7)-cameraPerson.y
      )
  } 

  isSpaceTaken(currentX, currentY, direction) {
    const {x,y} = utils.nextPosition(currentX, currentY, direction);
    return this.walls[`${x},${y}`] || false;
  }

  mountObjects() {
    Object.values(this.gameObjects).forEach(o => {

      //TODO: determine if this object should actually mount
      o.mount(this);

    })
  }

  addWall(x,y) {
    this.walls[`${x},${y}`] = true;
  }
  removeWall(x,y) {
    delete this.walls[`${x},${y}`]
  }
  moveWall(wasX, wasY, direction) {
    this.removeWall(wasX, wasY);
    const {x,y} = utils.nextPosition(wasX, wasY, direction);
    this.addWall(x,y);
  }
}

window.OverworldMaps = {
  DemoRoom: {
    lowerSrc: "./images/Lower.png",
    upperSrc: "./images/Upper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(1.5),
        y: utils.withGrid(7.5),
      }),
    },
    walls: {
      [utils.asGridCoord(0.5,7.5)] : true,
    }
  },
}