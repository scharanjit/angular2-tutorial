import { Component } from '@angular/core';
import { ClickMeComponent } from '../components/click-me.component';
import { MyComponent } from '../components/my-first.component';

@Component({
  selector: 'app-display',
  template: `
    <my-component></my-component>
    <click-me></click-me>
    `,
    directives: [ClickMeComponent,MyComponent]
})
export class AppDisplay {
 
}