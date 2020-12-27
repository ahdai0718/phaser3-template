import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';
import {Log} from '../../core/util';
import {SceneBase} from '../../core/scene/SceneBase';

class ExampleAndroidPermission extends SceneBase {
  public create(): void {
    if (__NATIVE_APP__) {
      const androidPermissions = new AndroidPermissions();
      androidPermissions
        .checkPermission(androidPermissions.PERMISSION.CAMERA)
        .then(
          result => {
            Log.info('Has permission?', result.hasPermission);
            if (!result.hasPermission) {
              androidPermissions.requestPermission(
                androidPermissions.PERMISSION.CAMERA
              );
            }
          },
          err => {
            Log.error(err);
            androidPermissions.requestPermission(
              androidPermissions.PERMISSION.CAMERA
            );
          }
        );
    }
  }
}

export {ExampleAndroidPermission};
