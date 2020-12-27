import * as QueryString from 'query-string';
import {Util, Log} from './core/util';
import {Game} from './core/Game';
import {ConfigManagerDefault} from './core/config';
import {AssetManagerDefault} from './core/asset';
import {GameObjectManagerDefault} from './core/game_object';
import {SceneManagerDefault} from './core/scene';

if (window) {
  window.onload = async () => {
    if (__DEV__) {
      await Util.wait(1);
    }

    const queyrStringParamMap = QueryString.parse(window.location.search);
    Log.info(queyrStringParamMap);

    const configAssetFile = __NATIVE_APP__
      ? '/asset/configs.app.json'
      : '/asset/configs.json';

    const success = await ConfigManagerDefault.loadWebConfigFile(
      configAssetFile
    );

    if (success) {
      const config = ConfigManagerDefault.getConfig();

      window.document.title = config.Title;

      AssetManagerDefault.setBaseURL(config.Asset.BaseURL);
      AssetManagerDefault.setBasePath(config.Asset.BasePath);
      AssetManagerDefault.setSkin(config.Asset.Skin);

      await AssetManagerDefault.loadAssetSettingFile();

      GameObjectManagerDefault.setSkinFullURL(
        AssetManagerDefault.getSkinFullURL()
      );

      await GameObjectManagerDefault.loadGameObjectSettingFile();

      await SceneManagerDefault.loadSceneSettingFile();

      Game.init(config);

      SceneManagerDefault.setPhaserSceneManager(Game.scene);
      SceneManagerDefault.initAllScene();
      SceneManagerDefault.boot();

      initObservers();
    }
  };
}

const initObservers = () => {};
