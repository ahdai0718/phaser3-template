import * as Phaser from 'phaser';
import {ScrollCamera} from '../../core/scene/ScrollCamera';
import {ConfigManagerDefault} from '../../core/config';
import {Log} from '../../core/util';

class GameMain extends ScrollCamera {
  public preload(): void {}

  public create(): void {
    super.create();

    const root = this.add.group();
    root.setOrigin(0.5, 0.5);

    const worldCenterX = ConfigManagerDefault.getConfig().Width / 2;
    const worldCenterY = ConfigManagerDefault.getConfig().Height / 2;

    const space = new Phaser.GameObjects.Image(
      this,
      worldCenterX,
      worldCenterY,
      'space'
    );
    space.setOrigin(0.5, 0.5);

    root.add(space, true);

    const particles = this.add.particles('particle');

    const emitter = particles.createEmitter({
      speed: 100,
      scale: {start: 1, end: 0},
      blendMode: 'ADD',
    });

    const logo = new Phaser.Physics.Arcade.Image(
      this,
      worldCenterX,
      worldCenterY - 200,
      'phaser3-logo'
    );
    // logo.setOrigin(0.5, 0.5);

    root.add(logo, true);

    // logo.setVelocity(100, 200);
    // logo.setBounce(1, 1);
    // logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);

    const dragon = this.add.spine(
      worldCenterX,
      worldCenterY + 100,
      'dragon',
      'flying',
      true
    );

    root.add(dragon);

    this.cameras.main.setBounds(-640, 0, 1920, 1136, true);

    Log.warn(JSON.stringify(this.cameras.main));
  }
}

export {GameMain};
