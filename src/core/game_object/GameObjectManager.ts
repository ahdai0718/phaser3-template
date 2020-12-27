export interface GameObjectManager {
  setSkinFullURL(skinFullURL: string): void;

  getSkinFullURL(): string;

  loadGameObjectSettingFile(lang: string): Promise<boolean>;
}
