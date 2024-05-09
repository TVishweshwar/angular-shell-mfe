import { loadRemoteModule } from '@angular-architects/module-federation';

export const registry = {
  mfe1: () =>
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:8081/remoteEntry.js',
      exposedModule: './web-components',
    }),
  mfe4: () =>
    loadRemoteModule({
      type: 'script',
      remoteEntry: 'http://localhost:8082/remoteEntry.js',
      remoteName: 'mfe4',
      exposedModule: './Third',
    }),
};
