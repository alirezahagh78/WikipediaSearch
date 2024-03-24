import { Component } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent {


  constructor(){}

  ngOnInit():void {
    const replaySubject = new ReplaySubject(1);
    const observerOne = replaySubject.subscribe(
      (value) => console.log('observerOne : ' , value),
      (err) => console.log(err),
      () => console.log('observerOne completed')
    );
    replaySubject.next('firest');
    replaySubject.next('second');
    replaySubject.next('third');
    replaySubject.next('fourth');
    const observerTwo = replaySubject.subscribe(
      (value) => console.log('observerTwo : ' , value),
      (err) => console.log(err),
      () => console.log('observerOne completed')
    );
    replaySubject.next('fifth');
  }
}
