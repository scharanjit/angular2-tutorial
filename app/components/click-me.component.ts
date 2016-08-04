import { Component } from '@angular/core';

@Component({
  selector: 'click-me',
  template: `
   <div>
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}
    </div>
    `
    
    
})
export class ClickMeComponent {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}