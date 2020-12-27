import {AssetLoader} from './AssetLoader';
import {AssetSetting} from './AssetSetting';
import {Log} from '../util';

class AssetLoaderBuilder {
  private loader!: Phaser.Loader.LoaderPlugin;
  private assetList!: AssetSetting[];
  private progressHandler!: (percentage: number) => void;
  private completeHandler!: () => void;
  private handlerContext!: unknown;

  constructor() {}

  public setHandlerContext(context: unknown): AssetLoaderBuilder {
    this.handlerContext = context;
    return this;
  }

  public setProgressHandler(
    handler: (percentage: number) => void
  ): AssetLoaderBuilder {
    this.progressHandler = handler;
    return this;
  }

  public setCompleteHandler(handler: () => void): AssetLoaderBuilder {
    this.completeHandler = handler;
    return this;
  }

  public setLoader(loader: Phaser.Loader.LoaderPlugin): AssetLoaderBuilder {
    this.loader = loader;
    return this;
  }

  public build(): AssetLoader {
    return new AssetLoader(
      this.loader,
      this.progressHandler,
      this.completeHandler,
      this.handlerContext
    );
  }
}

export {AssetLoaderBuilder};
