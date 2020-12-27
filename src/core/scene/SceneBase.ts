import * as Phaser from 'phaser';
import {AssetManager} from '../asset/AssetManager';
import {GameObjectManager} from '../game_object/GameObjectManager';
import {SceneManager} from './SceneManager';

class SceneBase extends Phaser.Scene {
  private stage!: Phaser.GameObjects.Container;

  private assetManager!: AssetManager;
  private gameObjectManager!: GameObjectManager;
  private sceneManager!: SceneManager;

  protected create(): void {
    this.stage = this.add.container(0, 0, []);
  }

  protected addToStage(gameObject: Phaser.GameObjects.GameObject): void {
    this.stage.add(gameObject);
  }

  protected addGameObjectFromSceneSetting(sceneName: string): void {}

  public setAssetManager(manager: AssetManager): void {
    this.assetManager = manager;
  }

  public getAssetManager(): AssetManager {
    return this.assetManager;
  }

  public setGameObjectManager(manager: GameObjectManager): void {
    this.gameObjectManager = manager;
  }

  public getGameObjectManager(): GameObjectManager {
    return this.gameObjectManager;
  }

  public setSceneManager(manager: SceneManager): void {
    this.sceneManager = manager;
  }

  public getSceneManager(): SceneManager {
    return this.sceneManager;
  }
}

export {SceneBase};
