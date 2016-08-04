import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  template: '<div> <h1>Hello my name is {{name}} </h1> Check the console <button (click)="sayMyName()">Say my name</button></div>'
})
export class MyComponent {

    name='Charanjit Singh';
  
  sayMyName() {
    console.log("My name is ", this.name)
  }
}
