import {Device} from '@ionic-native/device/ngx';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';
import {Log} from '../util';
import {Native} from './Native';

class NativeDefault implements Native {
  private device!: Device;
  private androidPermissions!: AndroidPermissions;

  constructor() {
    this.device = new Device();
    this.androidPermissions = new AndroidPermissions();
  }

  public uuid(): string {
    return this.device.uuid;
  }

  public checkThenRequestPermission(permission: string): void {
    if (!__NATIVE_APP__) return;

    this.androidPermissions.checkPermission(permission).then(
      result => {
        Log.info(`Has permission ( ${permission} )?`, result.hasPermission);
        if (!result.hasPermission) {
          this.androidPermissions.requestPermission(permission);
        }
      },
      err => {
        Log.error(err);
        this.androidPermissions.requestPermission(permission);
      }
    );
  }
}

export {NativeDefault};
