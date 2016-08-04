import { Component } from '@angular/core';
import { ClickMeComponent } from '../components/click-me.component';
import { MyComponent } from '../components/my-first.component';
import { KeyUpComponent_v1 } from '../components/keyup.component';
import { LoopbackComponent } from '../components/loop-back.component';
import { LittleTourComponent } from '../components/little-tour.component';
import { HeroFormComponent } from '../components/hero-form.component';

@Component({
  selector: 'app-display',
  template: `
 <br> First Component <br> <my-component></my-component><br>
  Click Me Component : 
  <br>
    <click-me></click-me>
    <br>
  
   <div class="boxes">  KeyUp:    <br> <key-up></key-up>       <br> </div>
   <br>
   <div class="boxes"> Loop Back: <br> <loop-back></loop-back> <br> </div>

    <br>
   <div class="boxes"> Little Tour : <br> <little-tour></little-tour> <br> </div>
   <br>
   <hero-form></hero-form>

    `,
    directives: [ClickMeComponent,MyComponent,KeyUpComponent_v1,LoopbackComponent , LittleTourComponent, HeroFormComponent]
})
export class AppDisplay {
 
}