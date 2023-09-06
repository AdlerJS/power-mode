import { WebPlugin } from '@capacitor/core';

import type { PowerModePlugin } from './definitions';

export class PowerModeWeb extends WebPlugin implements PowerModePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
