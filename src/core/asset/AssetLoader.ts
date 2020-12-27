import {AssetSetting} from './AssetSetting';
import {AssetType} from './AssetType';
import {Log} from '../util';
class AssetLoader {
  private loader!: Phaser.Loader.LoaderPlugin;

  constructor(
    loader: Phaser.Loader.LoaderPlugin,
    progressHandler: (percentage: number) => void,
    completeHandler: () => void,
    handlerContext: unknown
  ) {
    this.loader = loader;
    this.loader.on(
      Phaser.Loader.Events.PROGRESS,
      progressHandler,
      handlerContext
    );
    this.loader.on(
      Phaser.Loader.Events.COMPLETE,
      completeHandler,
      handlerContext
    );
  }

  public load(assetSettingList: AssetSetting[]): void {
    for (const assetSetting of assetSettingList) {
      switch (assetSetting.type) {
        case AssetType.Image:
          if (assetSetting.path) {
            this.loader.setPath(assetSetting.path);
          } else {
            this.loader.setPath('');
          }
          this.loader.image(assetSetting.name, assetSetting.urlList);
          break;

        case AssetType.Spritesheet:
          if (assetSetting.path) {
            this.loader.setPath(assetSetting.path);
          } else {
            this.loader.setPath('');
          }

          this.loader.multiatlas(assetSetting.name, assetSetting.urlList![0]);
          break;

        case AssetType.Spine:
          if (assetSetting.urlList && assetSetting.atlasUrlList) {
            if (assetSetting.path) {
              this.loader.setPath(assetSetting.path);
            }
            this.loader.spine(
              assetSetting.name,
              assetSetting.urlList[0],
              assetSetting.atlasUrlList,
              true
            );
          } else {
            Log.warn('Asset setting [urlList or atlasUrlList] is empty');
          }

          break;
      }
    }
  }
}

export {AssetLoader};
