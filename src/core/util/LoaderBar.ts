import * as Phaser from 'phaser';
import {ConfigManagerDefault} from '../config';

enum LoaderBarAssetKey {
  BG = 'loader_bar_bg',
  Center = 'loader_bar_center',
  Complete = 'loader_bar_complete',
  Left = 'loader_bar_left',
  Right = 'loader_bar_right',
}

class LoaderBar {
  private static scene: Phaser.Scene;
  private static stage: Phaser.GameObjects.Container;
  private static loaderBarBG: Phaser.GameObjects.Image;
  private static loaderBarLeft: Phaser.GameObjects.Image;
  private static loaderBarCenter: Phaser.GameObjects.Image;
  private static loaderBarRight: Phaser.GameObjects.Image;
  private static progressLength = 0;
  private static loaderBarPadding = 4;

  public static loadAsset(
    loader: Phaser.Loader.LoaderPlugin,
    skinFullURL: string
  ): void {
    if (loader) {
      const loaderBarAssetList = [
        LoaderBarAssetKey.BG,
        LoaderBarAssetKey.Center,
        LoaderBarAssetKey.Complete,
        LoaderBarAssetKey.Left,
        LoaderBarAssetKey.Right,
      ];

      for (const loaderBarAssetKey of loaderBarAssetList) {
        loader.image(
          loaderBarAssetKey,
          `${skinFullURL}image/${loaderBarAssetKey}.png`
        );
      }
    }
  }

  public static initContent(scene: Phaser.Scene): void {
    this.scene = scene;
    this.initStage();
    this.initLoaderBarBG();
    this.initLoaderBarLeft();
    this.initLoaderBarCenter();
    this.initLoaderBarRight();
    this.calculateProgressLength();
  }

  public static progress(percentage: number): void {
    if (this.loaderBarCenter) {
      this.loaderBarCenter.scaleX =
        percentage * (this.progressLength / this.loaderBarCenter.width);
      this.updateLoaderBarRightX();
    }
  }

  private static initStage(): void {
    const config = ConfigManagerDefault.getConfig();
    const centerX = config.Width / 2;
    const centerY = config.Height / 2;
    this.stage = this.scene.add.container(centerX, centerY);
  }

  private static initLoaderBarBG(): void {
    this.loaderBarBG = this.scene.add.image(0, 0, 'loader_bar_bg');
    this.loaderBarBG.setOrigin(0.5, 0.5);
    this.stage.add(this.loaderBarBG);
  }

  private static initLoaderBarLeft(): void {
    this.loaderBarLeft = this.scene.add.image(0, 0, 'loader_bar_left');
    this.loaderBarLeft.setOrigin(0, 0.5);
    this.stage.add(this.loaderBarLeft);

    this.loaderBarLeft.y = this.loaderBarBG.y;

    const loaderBarBGLeft = this.loaderBarBG.getLeftCenter().x;
    const LoaderBarLeftX = loaderBarBGLeft + this.loaderBarPadding;
    this.loaderBarLeft.x = LoaderBarLeftX;
  }

  private static initLoaderBarCenter(): void {
    this.loaderBarCenter = this.scene.add.image(0, 0, 'loader_bar_center');
    this.loaderBarCenter.setOrigin(0, 0.5);
    this.stage.add(this.loaderBarCenter);

    this.loaderBarCenter.y = this.loaderBarBG.y;
    this.loaderBarCenter.x = this.loaderBarLeft.getRightCenter().x;
  }

  private static initLoaderBarRight(): void {
    this.loaderBarRight = this.scene.add.image(0, 0, 'loader_bar_complete');
    this.loaderBarRight.setOrigin(0, 0.5);
    this.stage.add(this.loaderBarRight);

    this.loaderBarRight.y = this.loaderBarBG.y;
    this.loaderBarRight.x = this.loaderBarCenter.getRightCenter().x;
  }

  private static calculateProgressLength(): void {
    this.progressLength =
      this.loaderBarBG.width -
      (this.loaderBarPadding * 2 +
        this.loaderBarLeft.width +
        this.loaderBarCenter.width +
        this.loaderBarRight.width);
  }

  private static updateLoaderBarRightX(): void {
    this.loaderBarRight.x = this.loaderBarCenter.getRightCenter().x - 1;
  }
}

export {LoaderBar, LoaderBarAssetKey};
