import {GameObjectType} from './GameObjectType';

export interface GameObjectConfig {
  type: GameObjectType;
  scene: Phaser.Scene;
  x: number;
  y: number;
  texture: string | Phaser.Textures.Texture;
  frame?: string | number;
}
