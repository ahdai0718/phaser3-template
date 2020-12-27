import {Scene} from '../core/scene/Scene';
import {ConfigManagerDefault} from '../core/config';
import {Log} from '../core/util';
import {LoaderBar} from '../core/util/LoaderBar';
import {SceneBase} from '../core/scene/SceneBase';
import {timer} from 'rxjs';

class Splash extends SceneBase {
  public preload(): void {
    const skinFullURL = this.getAssetManager().getSkinFullURL();
    LoaderBar.loadAsset(this.load, skinFullURL);
  }

  public create(): void {
    super.create();

    if (__NATIVE_APP__) {
      const config = ConfigManagerDefault.getConfig();
      Log.info(window.location.href);
      Log.info(JSON.stringify(config));
    }

    timer(1000).subscribe(() => {
      this.switchToNextScene();
    });
  }

  private switchToNextScene(): void {
    this.scene.stop();
    this.scene.start(Scene.Loading.toString());
  }
}

export {Splash};
