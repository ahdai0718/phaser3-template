import {AssetSetting} from './AssetSetting';
import {AssetType} from './AssetType';

export interface AssetManager {
  setBaseURL(baseURL: string): void;

  getBaseURL(): string;

  setBasePath(basePath: string): void;

  getBasePath(): string;

  setSkin(skin: string): void;

  getSkin(): string;

  getAssetSettingListMap(): {
    [type: string]: AssetSetting[];
  };

  getAssetSettingListByAssetType(type: AssetType): AssetSetting[];

  getSkinFullURL(): string;

  getAssetSettingListToDownload(): AssetSetting[];
}
