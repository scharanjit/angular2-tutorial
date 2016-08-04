import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppDisplay } from './display/app.display';

bootstrap(AppDisplay, [
  disableDeprecatedForms(),
  provideForms()
 ])
.catch((err: any) => console.error(err));