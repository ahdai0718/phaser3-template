import * as Phaser from 'phaser';

class AvatarIcon extends Phaser.GameObjects.Container {
  private background!: Phaser.GameObjects.Image;

  public constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    children: Phaser.GameObjects.GameObject[]
  ) {
    super(scene, x, y, children);

    this.initDisplayObject();
  }

  private initDisplayObject(): void {
    this.initBackground();
    this.initAvatar();
  }

  private initBackground(): void {
    this.background = new Phaser.GameObjects.Image(
      this.scene,
      0,
      0,
      'avatar_background'
    );

    this.add(this.background);
  }

  private initAvatar(): void {}
}

export {AvatarIcon};
