import {ConfigManagerDefault} from '../../core/config';
import {SceneBase} from '../../core/scene/SceneBase';
import {Log} from '../../core/util';

class ExampleVideo extends SceneBase {
  private video!: Phaser.GameObjects.Video;

  public preload(): void {
    this.load.video(
      'demo',
      'https://examples.phaser.io/assets/video/liquid2.mp4'
    );
  }

  public create(): void {
    const root = this.add.group();
    root.setOrigin(0.5, 0.5);

    const worldCenterX = ConfigManagerDefault.getConfig().Width / 2;
    const worldCenterY = ConfigManagerDefault.getConfig().Height / 2;

    this.video = this.add
      .video(worldCenterX, worldCenterY - 200, 'demo')
      .setOrigin(0.5);
  }
}

export {ExampleVideo};
