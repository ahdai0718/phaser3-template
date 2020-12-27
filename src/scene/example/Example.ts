import {ConfigManagerDefault} from '../../core/config';
import {Scene} from '../../core/scene/Scene';
import {Log} from '../../core/util';
import {SceneBase} from '../../core/scene/SceneBase';

class Example extends SceneBase {
  public create(): void {
    const root = this.add.group();
    root.setOrigin(0.5, 0.5);

    const worldCenterX = ConfigManagerDefault.getConfig().Width / 2;
    const worldCenterY = ConfigManagerDefault.getConfig().Height / 2;

    this.add
      .text(worldCenterX, worldCenterY - 200, 'Android Permissions')
      .setOrigin(0.5)
      .setInteractive()
      .on('pointerup', () => {
        Log.info('Android Permissions pointer up');
        this.scene.stop();
        this.scene.start(Scene.ExampleDevice.toString(), {});
      });
  }
}

export {Example};
