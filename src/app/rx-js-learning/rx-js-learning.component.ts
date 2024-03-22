import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-rx-js-learning',
  templateUrl: './rx-js-learning.component.html',
  styleUrls: ['./rx-js-learning.component.css']
})
export class RxJsLearningComponent {

  observable = new Observable((observer) => {
    observer.next('hello');
    observer.next('world');
    setInterval(() =>{
      observer.next('hello world');
    },2000);
  });
  ngOnInit(): void{
    const observerOne = this.observable.subscribe(
      (value) => this.addItem(value),
      (error) => console.log('error'),
      () => console.log('complete')
    );
    setTimeout(()=> {
      observerOne.unsubscribe();
    },6001);
  };
  addItem(value:any){
    console.log(value);
  }
}
