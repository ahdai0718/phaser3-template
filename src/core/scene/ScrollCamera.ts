import * as Phaser from 'phaser';
import {SceneBase} from './SceneBase';

class ScrollCamera extends SceneBase {
  public create(): void {
    super.create();

    this.input.on(
      Phaser.Input.Events.POINTER_MOVE,
      this.pointerMoveHandler,
      this
    );
  }

  protected pointerMoveHandler(pointer: Phaser.Input.Pointer): void {
    if (!pointer.isDown) {
      return;
    }

    const offsetX = pointer.prevPosition.x - pointer.position.x;
    const offsetY = pointer.prevPosition.y - pointer.position.y;

    this.cameras.main.scrollX += offsetX * 1.5;
    this.cameras.main.scrollY += offsetY * 1.5;
  }
}

export {ScrollCamera};
