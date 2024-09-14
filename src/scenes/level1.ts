import { Scene } from "phaser";

export class Level1 extends Scene {
  preload() {
    this.load.image("sky", "public/sky.png");
    this.load.image("platform", "public/platform.png");
    this.load.image("bomb", "public/bomb.png");
    this.load.image("star", "public/star.png");
  }

  create() {
    this.add.image(400, 300, "sky");
    this.add.image(400, 400, "star");
    this.add.image(400, 600, "platform").setScale(2, 1);
    this.add.image(400, 580, "bomb");
  }
}
