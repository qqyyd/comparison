class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx) {
    ctx.drawImage(this.lowerImage, utils.withGrid(0), utils.withGrid(-1))
  }

  drawUpperImage(ctx) {
    ctx.drawImage(this.upperImage, utils.withGrid(0), utils.withGrid(-1))
  } 
}

window.OverworldMaps = {
  DemoRoom: {
    lowerSrc: "./images2/Lower.png",
    upperSrc: "./images2/Upper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(7),
      }),
      // npc1: new Person({
      //   x: utils.withGrid(7),
      //   y: utils.withGrid(9),
      //   src: "/images/characters/people/npc1.png"
      // })
    }
  },
  // Kitchen: {
  //   lowerSrc: "/images/maps/KitchenLower.png",
  //   upperSrc: "/images/maps/KitchenUpper.png",
  //   gameObjects: {
  //     hero: new GameObject({
  //       x: 3,
  //       y: 5,
  //     }),
  //     npcA: new GameObject({
  //       x: 9,
  //       y: 6,
  //       src: "/images/characters/people/npc2.png"
  //     }),
  //     npcB: new GameObject({
  //       x: 10,
  //       y: 8,
  //       src: "/images/characters/people/npc3.png"
  //     })
  //   }
  // },
}