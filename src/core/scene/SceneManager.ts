import * as Phaser from 'phaser';

export interface SceneManager {
  setPhaserSceneManager(manager: Phaser.Scenes.SceneManager): void;
  initAllScene(): void;
  boot(): void;
  loadSceneSettingFile(): Promise<boolean>;
  asignAllManagerToScene(): void;
}
