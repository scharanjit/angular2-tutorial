import { Component } from '@angular/core';

@Component({
  selector: 'key-up',
  template: `
  <input (keyup)="onKey($event)">
  <p>{{values}}</p>
`
})


export class KeyUpComponent_v1 {
  values = '';

  // without strong typing
  onKey(event:any) {
    this.values += event.target.value + ' | ';
  }
}