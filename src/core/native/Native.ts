export interface Native {
  uuid(): string;
  checkThenRequestPermission(permission: string): void;
}
