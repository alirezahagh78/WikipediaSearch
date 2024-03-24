import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent {


  constructor(){}
  ngOnInit():void {
    const asyncSubject = new AsyncSubject();
    const observerOne = asyncSubject.subscribe(
      (data) => console.log('observerOne' + data),
      (error) => console.log('observerOne' + error),
      () => console.log('observerOne completed')
    );
    asyncSubject.next(1);
    asyncSubject.next(2);
    asyncSubject.next(3);
    asyncSubject.next(4);
    const observerTwo = asyncSubject.subscribe(
      (data) => console.log('observerTwo' + data),
      (error) => console.log('observerTwo' + error),
      () => console.log('observerTwo : completed')
    );
    asyncSubject.complete();
  }
}
