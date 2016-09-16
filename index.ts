import 'core-js';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.modules';

platformBrowserDynamic().bootstrapModule(AppModule);