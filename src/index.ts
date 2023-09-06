import { registerPlugin } from '@capacitor/core';

import type { PowerModePlugin } from './definitions';

const PowerMode = registerPlugin<PowerModePlugin>('PowerMode', {
  web: () => import('./web').then(m => new m.PowerModeWeb()),
});

export * from './definitions';
export { PowerMode };
