import { ExampleScene } from "./scenes/ExampleScene";
import { Game } from "phaser"

const config: Phaser.Types.Core.GameConfiguration = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: ExampleScene,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  }
};

const game = new Game(config);
