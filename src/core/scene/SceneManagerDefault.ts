import * as Phaser from 'phaser';
import {Scene} from './Scene';
import {Boot} from '../../scene/Boot';
import {Splash} from '../../scene/Splash';
import {Loading} from '../../scene/Loading';
import {Example} from '../../scene/example/Example';
import {ExampleAndroidPermission} from '../../scene/example/ExampleAndroidPermission';
import {ExampleDevice} from '../../scene/example/ExampleDevice';
import {ExampleScrollCamera} from '../../scene/example/ExampleScrollCamera';
import {ExampleFake3D} from '../../scene/example/ExampleFake3D';
import {ExampleVideo} from '../../scene/example/ExampleVideo';
import {GameMain} from '../../scene/game';
import {UIMain} from '../../scene/ui';
import {Log} from '../util';
import {SceneGameObjectSetting} from './SceneGameObjectSetting';
import {SceneBase} from './SceneBase';
import {AssetManagerDefault} from '../asset';
import {GameObjectManagerDefault} from '../game_object';
import {SceneManager} from './SceneManager';

class SceneManagerDefault implements SceneManager {
  public static get instance(): SceneManagerDefault {
    if (!SceneManagerDefault.sInstance) {
      SceneManagerDefault.sInstance = new SceneManagerDefault();
    }
    return SceneManagerDefault.sInstance;
  }

  private static sInstance: SceneManagerDefault;

  private phaserSceneManager!: Phaser.Scenes.SceneManager;

  private sceneGameObjectSettingMap: {
    [scene: string]: SceneGameObjectSetting[];
  } = {};

  public setPhaserSceneManager(manager: Phaser.Scenes.SceneManager): void {
    this.phaserSceneManager = manager;
  }

  public initAllScene(): void {
    this.phaserSceneManager.add(Scene.Boot.toString(), Boot, false);
    this.phaserSceneManager.add(Scene.Splash.toString(), Splash, false);
    this.phaserSceneManager.add(Scene.Loading.toString(), Loading, false);

    this.phaserSceneManager.add(Scene.GameMain.toString(), GameMain, false);

    this.phaserSceneManager.add(Scene.UIMain.toString(), UIMain, false);

    this.phaserSceneManager.add(Scene.Example.toString(), Example, false);

    this.phaserSceneManager.add(
      Scene.ExampleAndroidPermission.toString(),
      ExampleAndroidPermission,
      false
    );

    this.phaserSceneManager.add(
      Scene.ExampleDevice.toString(),
      ExampleDevice,
      false
    );

    this.phaserSceneManager.add(
      Scene.ExampleScrollCamera.toString(),
      ExampleScrollCamera,
      false
    );

    this.phaserSceneManager.add(
      Scene.ExampleFake3D.toString(),
      ExampleFake3D,
      false
    );

    this.phaserSceneManager.add(
      Scene.ExampleVideo.toString(),
      ExampleVideo,
      false
    );
  }

  public asignAllManagerToScene(): void {
    this.phaserSceneManager.scenes.forEach(phaserScene => {
      const scene = phaserScene as SceneBase;
      if (scene) {
        if (scene.setAssetManager) {
          scene.setAssetManager(AssetManagerDefault);
        }

        if (scene.setGameObjectManager) {
          scene.setGameObjectManager(GameObjectManagerDefault);
        }

        if (scene.setSceneManager) {
          scene.setSceneManager(this);
        }
      } else {
        Log.warn('scene is null');
      }
    });
  }

  public boot(): void {
    this.phaserSceneManager.start(Scene.Boot.toString());
  }

  public async loadSceneSettingFile(): Promise<boolean> {
    const url = '/asset/setting/scene.json';

    Log.info('loadSceneSettingFile', url);

    return await fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        Log.info(json);

        Object.assign(
          this.sceneGameObjectSettingMap,
          json as {
            [scene: string]: SceneGameObjectSetting[];
          }
        );

        Log.info(this.sceneGameObjectSettingMap);

        return true;
      })
      .catch(error => {
        Log.error(error);
        return false;
      });
  }
}

const instance = SceneManagerDefault.instance;

export {instance as SceneManagerDefault};
