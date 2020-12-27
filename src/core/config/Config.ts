export interface Config {
  Title: string;
  Width: number;
  Height: number;
  BackgroundColor: string;
  Skin: string;
  Asset: {
    BaseURL: string;
    BasePath: string;
    Skin: string;
  };
  Gateway: {
    Protocol: string;
    Host: string;
    Port: number;
    WebsocketRoutePath: string;
  };
}
