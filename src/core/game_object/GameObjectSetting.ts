import {AssetSetting} from '../asset';

export interface GameObjectSetting {
  name: string;
  type: string;
  assetSetting?: AssetSetting;
}
