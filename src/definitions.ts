export interface PowerModePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
