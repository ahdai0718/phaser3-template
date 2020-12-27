import * as Phaser from 'phaser';
import 'phaser/plugins/spine/dist/SpinePlugin';
import {Config} from './config';
import {Log} from './util';
import {SceneManagerDefault} from './scene';

class Game {
  private static sInstance: Game;

  public static get instance(): Game {
    if (!Game.sInstance) {
      Game.sInstance = new Game();
    }
    return Game.sInstance;
  }

  private game!: Phaser.Game;

  public init(config: Config): void {
    Log.warn(`window.devicePixelRatio:${window.devicePixelRatio}`);

    this.game = new Phaser.Game({
      title: config.Title,
      width: config.Width,
      height: config.Height,
      parent: 'game',
      backgroundColor: config.BackgroundColor,
      banner: __DEV__ ? true : false,
      type: Phaser.AUTO,
      scale: {
        mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
      },
      render: {
        roundPixels: true,
      },
      input: {
        activePointers: 1,
      },
      plugins: {
        scene: [
          {
            key: 'SpinePlugin',
            plugin: window.SpinePlugin,
            mapping: 'spine',
          },
        ],
      },
    });

    this.initObservers();
  }

  public get scene(): Phaser.Scenes.SceneManager {
    return this.game.scene;
  }

  public get events(): Phaser.Events.EventEmitter {
    return this.game.events;
  }

  private initObservers(): void {
    Log.info('Game initObservers.', this.game.events);
    this.game.events.once(Phaser.Core.Events.READY, () => {
      Log.info('Phaser.Core.Events.READY');
      SceneManagerDefault.asignAllManagerToScene();
    });
  }
}

const instance = Game.instance;

export {instance as Game};
