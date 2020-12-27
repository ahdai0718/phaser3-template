import {AssetType} from './AssetType';

export interface AssetSetting {
  name: string;
  type: AssetType;
  path?: string;
  urlList?: string[];
  atlasUrlList?: string[];
  onProgress?: () => void;
  onComplete?: () => void;
}
