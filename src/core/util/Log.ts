// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../@type/global.d.ts" />

class Log {
  public static info(message?: unknown, ...optionalParams: unknown[]): void {
    if (__LOG_INFO__) {
      if (optionalParams.length) {
        console.log('--------Start--------');
      }
      // console.trace(message);
      console.log(message);
      for (const optionalParam of optionalParams) {
        console.log(optionalParam);
      }
      if (optionalParams.length) {
        console.log('--------End--------');
      }
    }
  }

  public static warn(message?: unknown, ...optionalParams: unknown[]): void {
    if (__LOG_WARNING__) {
      if (optionalParams.length) {
        console.warn('--------Start--------');
      }
      console.warn(message);
      for (const optionalParam of optionalParams) {
        console.warn(optionalParam);
      }
      if (optionalParams.length) {
        console.warn('--------End--------');
      }
    }
  }

  public static error(message?: unknown, ...optionalParams: unknown[]): void {
    if (__LOG_ERROR__) {
      if (optionalParams.length) {
        console.error('--------Start--------');
      }
      console.error(message);
      for (const optionalParam of optionalParams) {
        console.error(optionalParam);
      }
      if (optionalParams.length) {
        console.error('--------End--------');
      }
    }
  }
}

export {Log};
