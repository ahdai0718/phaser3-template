import {AssetManagerDefault} from '../../core/asset';
import {SceneBase} from '../../core/scene/SceneBase';

class ExampleFake3D extends SceneBase {
  public preload(): void {
    const skinFullURL = AssetManagerDefault.getSkinFullURL();
    this.load.glsl('fragment', `${skinFullURL}shader/fragment.glsl`);
    this.load.glsl('vertex', `${skinFullURL}shader/vertex.glsl`);
  }

  public create(): void {
    this.add.shader('vertex');
    this.add.shader('fragment');
  }
}

export {ExampleFake3D};
