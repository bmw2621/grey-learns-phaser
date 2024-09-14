import { Game, Types } from "phaser";
import { Level1 } from "./scenes/level1";

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: Level1,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 200 },
    },
  },
};

const game = new Game(config);
