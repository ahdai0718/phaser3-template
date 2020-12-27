import * as Phaser from 'phaser';
import {GameObjectConfig} from './GameObjectConfig';

export interface GameObjectSimpleFactory {
  create(
    config: GameObjectConfig
  ): Phaser.GameObjects.Image | Phaser.GameObjects.Sprite;
}
