import {AvatarIcon} from '../../game_object/ui/AvatarIcon';
import {SceneBase} from '../../core/scene/SceneBase';

class UIMain extends SceneBase {
  private avatarIcon!: AvatarIcon;

  public preload(): void {}

  public create(): void {
    this.initGameObject();
  }

  private initGameObject(): void {
    this.avatarIcon = new AvatarIcon(this, 0, 0, []);
  }
}

export {UIMain};
