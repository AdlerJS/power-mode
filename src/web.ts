import { WebPlugin } from '@capacitor/core';

import type { PowerModePlugin } from './definitions';

export class PowerModeWeb extends WebPlugin implements PowerModePlugin {
  async lowPowerModeEnabled(): Promise<{ lowPowerModeEnabled: boolean }> {
    return { lowPowerModeEnabled: false };
  }
}
