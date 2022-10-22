import { enableProdMode } from '@angular/core';  //production mode
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';  //allow execution in different browser

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
