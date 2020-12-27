import * as Phaser from 'phaser';
import {Game} from '../Game';

import {GameObjectConfig} from './GameObjectConfig';
import {GameObjectSimpleFactory} from './GameObjectSimpleFactory';
import {GameObjectType} from './GameObjectType';

class GameObjectSimpleFactoryDefault implements GameObjectSimpleFactory {
  public static get instance(): GameObjectSimpleFactoryDefault {
    if (!GameObjectSimpleFactoryDefault.sInstance) {
      GameObjectSimpleFactoryDefault.sInstance = new GameObjectSimpleFactoryDefault();
    }
    return GameObjectSimpleFactoryDefault.sInstance;
  }

  private static sInstance: GameObjectSimpleFactoryDefault;

  public create(
    config: GameObjectConfig
  ): Phaser.GameObjects.Image | Phaser.GameObjects.Sprite {
    let gameObject: Phaser.GameObjects.Image | Phaser.GameObjects.Sprite;

    switch (config.type) {
      case GameObjectType.Image:
        gameObject = new Phaser.GameObjects.Image(
          config.scene,
          config.x,
          config.y,
          config.texture,
          config.frame
        );

        break;

      case GameObjectType.Sprite:
        gameObject = new Phaser.GameObjects.Sprite(
          config.scene,
          config.x,
          config.y,
          config.texture,
          config.frame
        );

        break;
    }

    return gameObject;
  }
}

const instance = GameObjectSimpleFactoryDefault.instance;

export {instance as GameObjectSimpleFactoryDefault};
