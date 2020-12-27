import {Scene} from '../core/scene/Scene';
import {AssetLoaderBuilder, AssetManagerDefault} from '../core/asset';
import {LoaderBar} from '../core/util/LoaderBar';
import {SceneBase} from '../core/scene/SceneBase';

class Loading extends SceneBase {
  public preload(): void {
    LoaderBar.initContent(this);
    this.loadAsset();
  }

  public create(): void {
    super.create();
  }

  private loadAsset(): void {
    const assetLoader = new AssetLoaderBuilder()
      .setLoader(this.load)
      .setHandlerContext(this)
      .setProgressHandler(this.progress)
      .setCompleteHandler(this.complete)
      .build();

    assetLoader.load(AssetManagerDefault.getAssetSettingListToDownload());
  }

  private progress(percentage: number): void {
    LoaderBar.progress(percentage);
  }

  private complete(): void {
    this.scene.stop();
    this.scene.start(Scene.GameMain.toString());
    this.scene.start(Scene.UIMain.toString());
  }
}

export {Loading};
