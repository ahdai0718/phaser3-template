# Phaser3 Template

## Reference

- [gts](https://github.com/google/gts)
- [Phaser 3](https://github.com/photonstorm/phaser)
- [RxJS](https://github.com/ReactiveX/rxjs)
- [Capacitor](https://capacitor.ionicframework.com/)
- Webpack
  - [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)
  - [copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin)
  - [circular-dependency-plugin](https://www.npmjs.com/package/circular-dependency-plugin)
  - [html-webpack-harddisk-plugin](https://www.npmjs.com/package/html-webpack-harddisk-plugin)
  - [hard-source-webpack-plugin](https://www.npmjs.com/package/hard-source-webpack-plugin)
  - [terser-webpack-plugin](https://www.npmjs.com/package/terser-webpack-plugin)

# VS Code Plugin

  - `Eslint`
  - `Prettier`

# Code Style Guide

  - [Code Style Guide](https://github.com/ahdai0718/code-style-guide)

## Architecture

  - `/src/@type`

    - typescript definition file.

  - `/src/core/`

    - `asset`

    - `config`

    - `game_object`


# Notice

  - Phaser typescript spine plugin fix

    - `phaser/types/phaser.d.ts`

      - Change `GameObject`.`state`

        `state: number | string;`

        To

        `state: number | string | spine.AnimationState;`

    - `phaser/types/SpineGameObject.d.ts`

      - `SpineGameObject` implements `Transform` add two funcs.

        ```
        copyPosition(source: Phaser.Types.Math.Vector2Like | Phaser.Types.Math.Vector3Like | Phaser.Types.Math.Vector4Like): this;

        getLocalPoint(x: number, y: number, point?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Math.Vector2;`

    - `phaser/types/SpineFile.d.ts`

      - Change

        `addToCache();`

        To

        `addToCache():void;`