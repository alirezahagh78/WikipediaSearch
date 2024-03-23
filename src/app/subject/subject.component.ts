import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {


  constructor(){}


  ngOnInit():void{
    const obs = new Observable((observer) => {
      observer.next('hi')
    });
    const subject = new Subject();
    const observerOne = subject.subscribe(
      (value) => console.log(`observer 1 :  ${value}`),
      (err) => console.log(err),
      () => console.log('observer completed')
    );
    subject.next('hi');
    const observerTwo = subject.subscribe(
      (value) => console.log(`observer 2 :  ${value}`),
      (err) => console.log(err),
      () => console.log('observer completed')
    );
    subject.next('by');
    observerTwo.unsubscribe();
    subject.next('hi');
  };
}
