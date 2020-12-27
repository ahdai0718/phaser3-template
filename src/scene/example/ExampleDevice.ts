import {Log} from '../../core/util';
import {NativeManager} from '../../core/native/NativeManager';
import {SceneBase} from '../../core/scene/SceneBase';

class ExampleDevice extends SceneBase {
  public create(): void {
    Log.info('ExampleDevice');
    if (__NATIVE_APP__) {
      Log.info(NativeManager.uuid());
    }
  }
}

export {ExampleDevice};
