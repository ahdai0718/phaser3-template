import {NativeDefault} from './NativeDefault';

class NativeManager extends NativeDefault {
  public static get instance(): NativeManager {
    if (!NativeManager.sInstance) {
      NativeManager.sInstance = new NativeManager();
    }
    return NativeManager.sInstance;
  }

  private static sInstance: NativeManager;
}

const nativeManager = NativeManager.instance;

export {nativeManager as NativeManager};
