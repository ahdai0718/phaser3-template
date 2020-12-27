import {Config} from './Config';

export interface ConfigManager {
  loadWebConfigFile(url: string): Promise<boolean>;

  getConfig(): Config;
}
