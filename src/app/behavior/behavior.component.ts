import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.css']
})
export class BehaviorComponent {

  constructor(){ }
   ngOnInit() :void {
    const subject = new BehaviorSubject('initial value');
    const observerOne = subject.subscribe(
      (value) => console.log('observerOne : ' , value),
      (err) => console.log(err),
      () => console.log('observerOne is completed')
    );
    subject.next('first');
    subject.next('second');
    setTimeout(() => {
      const observerTwo = subject.subscribe(
        (value) => console.log('observerOne : ' , value),
        (err) => console.log(err),
        () => console.log('observerOne is completed')
      );
    },5000)
    subject.next('third');
    subject.next('fourth');
    setInterval(() => {
      subject.next('fifth');
    },7000)
   };
};
