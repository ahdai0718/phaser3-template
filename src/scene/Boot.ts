import {Scene} from '../core/scene/Scene';
import {timer} from 'rxjs';
import {SceneBase} from '../core/scene/SceneBase';

class Boot extends SceneBase {
  public init(): void {}

  public preload(): void {}

  public create(): void {
    timer(1000).subscribe(() => {
      this.switchToNextScene();
    });
  }

  private switchToNextScene(): void {
    this.scene.stop();
    this.scene.start(Scene.Splash.toString());
  }
}

export {Boot};
