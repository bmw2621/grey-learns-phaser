import { Scene } from "phaser";

export class Level1 extends Scene {
  preload() {
    this.load.image("sky", "/sky.png");
    this.load.image("ground", "/platform.png");
    this.load.image("bomb", "/bomb.png");
    this.load.image("star", "/star.png");
  }

  create() {
    this.add.image(400, 300, "sky");

    const platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, "ground").setScale(2).refreshBody();

    platforms.create(600, 400, "ground");
    platforms.create(50, 250, "ground");
    platforms.create(750, 220, "ground");
  }
}
