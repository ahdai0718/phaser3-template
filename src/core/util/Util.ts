import {timer} from 'rxjs';

class Util {
  public static async wait(seconds: number): Promise<void> {
    return new Promise(resolve => {
      timer(seconds * 1000).subscribe(() => {
        resolve();
      });
    });
  }

  public static rand(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export {Util};
