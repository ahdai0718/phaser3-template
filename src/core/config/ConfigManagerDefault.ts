import {Log} from '../util';
import {Config} from './Config';
import {ConfigManager} from './ConfigManager';

class ConfigManagerDefault implements ConfigManager {
  public static get instance(): ConfigManagerDefault {
    if (!ConfigManagerDefault.sInstance) {
      ConfigManagerDefault.sInstance = new ConfigManagerDefault();
    }
    return ConfigManagerDefault.sInstance;
  }

  private static sInstance: ConfigManagerDefault;

  private config!: Config;

  public async loadWebConfigFile(url: string): Promise<boolean> {
    return await fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        Log.info(json);
        this.config = Object.assign({}, json as Config);
        return true;
      })
      .catch(error => {
        Log.error(error);
        return false;
      });
  }

  public getConfig(): Config {
    return this.config;
  }
}

const instance = ConfigManagerDefault.instance;

export {instance as ConfigManagerDefault};
