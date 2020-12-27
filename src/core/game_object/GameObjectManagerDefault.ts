import {Log} from '../util';
import {GameObjectSetting} from './GameObjectSetting';
import {GameObjectManager} from './GameObjectManager';

class GameObjectManagerDefault implements GameObjectManager {
  public static get instance(): GameObjectManagerDefault {
    if (!GameObjectManagerDefault.sInstance) {
      GameObjectManagerDefault.sInstance = new GameObjectManagerDefault();
    }
    return GameObjectManagerDefault.sInstance;
  }

  private static sInstance: GameObjectManagerDefault;

  private skinFullURL!: string;

  private gameObjectSettingList: GameObjectSetting[] = [];

  public setSkinFullURL(skinFullURL: string): void {
    this.skinFullURL = skinFullURL;
  }

  public getSkinFullURL(): string {
    return this.skinFullURL;
  }

  public async loadGameObjectSettingFile(lang = 'en'): Promise<boolean> {
    const url = `${this.getSkinFullURL()}setting/${lang}/game_object.json`;

    Log.info('loadGameObjectSettingFile', url);

    return await fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        Log.info(json);

        Object.assign(this.gameObjectSettingList, json as GameObjectSetting[]);

        Log.info(this.gameObjectSettingList);

        return true;
      })
      .catch(error => {
        Log.error(error);
        return false;
      });
  }
}
const instance = GameObjectManagerDefault.instance;

export {instance as GameObjectManagerDefault};
