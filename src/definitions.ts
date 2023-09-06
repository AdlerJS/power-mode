export interface PowerModePlugin {
  lowPowerModeEnabled(): Promise<{ lowPowerModeEnabled: boolean }>;
}
