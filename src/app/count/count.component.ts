import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {

  sub: Subscription = new Subscription;
  constructor() { }


  ngOnInit() {
    let obs = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(++count)
        if(count ===5){
          observer.error(new Error('Count Reached 5'));
        }
        if(count === 6){
          observer.complete()
        }
      }, 1000);
    });
    this.sub = obs.subscribe(
      (count) => console.log(count),
      (err) => {
        console.log(err);
      },
          () => console.log('done')
    );

    setTimeout(() => {
      this.sub.unsubscribe();
    }, 5000);
  };
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
};

