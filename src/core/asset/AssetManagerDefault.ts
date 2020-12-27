import {AssetSetting} from './AssetSetting';
import {AssetType} from './AssetType';
import {Log} from '../util';
import {AssetManager} from './AssetManager';

class AssetManagerDefault implements AssetManager {
  public static get instance(): AssetManagerDefault {
    if (!AssetManagerDefault.sInstance) {
      AssetManagerDefault.sInstance = new AssetManagerDefault();
    }
    return AssetManagerDefault.sInstance;
  }

  private static sInstance: AssetManagerDefault;

  private baseURL = '';

  private basePath = '';

  private skin = '';

  private assetSettingListMap: {
    [type: string]: AssetSetting[];
  } = {};

  public setBaseURL(baseURL: string): void {
    this.baseURL = baseURL;
  }

  public getBaseURL(): string {
    return this.baseURL;
  }

  public setBasePath(basePath: string): void {
    this.basePath = basePath;
  }

  public getBasePath(): string {
    return this.basePath;
  }

  public setSkin(skin: string): void {
    this.skin = skin;
  }

  public getSkin(): string {
    return this.skin;
  }

  public getAssetSettingListMap(): {
    [type: string]: AssetSetting[];
  } {
    return this.assetSettingListMap;
  }

  public getAssetSettingListByAssetType(type: AssetType): AssetSetting[] {
    return this.assetSettingListMap[type];
  }

  public getSkinFullURL(): string {
    return `${this.baseURL}${this.basePath}${this.skin}/`;
  }

  public getAssetSettingListToDownload(): AssetSetting[] {
    const skinFullURL = this.getSkinFullURL();

    const assetSettingListMap = this.getAssetSettingListMap();

    let assetSettingListToDownload: AssetSetting[] = [];

    Object.keys(assetSettingListMap).forEach(assetType => {
      let assetSettingList = assetSettingListMap[assetType];

      assetSettingList = assetSettingList.map(assetSetting => {
        assetSetting.type = assetType as AssetType;
        if (assetSetting.path) {
          assetSetting.path = `${skinFullURL}${assetSetting.path}`;
        } else {
          if (assetSetting.urlList) {
            assetSetting.urlList = assetSetting.urlList.map(url => {
              return `${skinFullURL}${url}`;
            });
          }

          if (assetSetting.atlasUrlList) {
            assetSetting.atlasUrlList = assetSetting.atlasUrlList.map(url => {
              return `${skinFullURL}${url}`;
            });
          }
        }

        return assetSetting;
      });

      assetSettingListToDownload = assetSettingListToDownload.concat(
        assetSettingList
      );
    });

    return assetSettingListToDownload;
  }

  public async loadAssetSettingFile(lang = 'en'): Promise<boolean> {
    const url = `${this.getSkinFullURL()}setting/${lang}/asset.json`;

    return await fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        Log.info(json);

        Object.assign(
          this.assetSettingListMap,
          json as {
            [type: number]: AssetSetting[];
          }
        );

        Log.info(this.assetSettingListMap);

        return true;
      })
      .catch(error => {
        Log.error(error);
        return false;
      });
  }
}

const instance = AssetManagerDefault.instance;

export {instance as AssetManagerDefault};
