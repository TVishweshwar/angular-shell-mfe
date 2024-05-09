// import { AppModule } from './app/app.module';
// import { bootstrap } from '@angular-architects/module-federation-tools';

// bootstrap(AppModule, {
//   production: environment.production,
// });

// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { platformBrowser } from '@angular/platform-browser';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowser().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

declare const require: any;
const ngVersion = require('../package.json').dependencies['@angular/core']; // perhaps just take the major version

(window as any).plattform = (window as any).plattform || {};
let platform = (window as any).plattform[ngVersion];
if (!platform) {
  platform = platformBrowser();
  (window as any).plattform[ngVersion] = platform;
}
platform
  .bootstrapModule(AppModule, { ngZone: (window as any).ngZone })
  .catch((err: any) => console.error(err));
