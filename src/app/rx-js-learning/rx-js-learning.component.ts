import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share} from 'rxjs/operators';
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
  }).pipe(share());


  ngOnInit(): void{
    const observerOne = this.observable.subscribe(
      (value) => this.addItem('observae one :' + value),
      (error) => console.log('error'),
      () => console.log('complete')
    );
    setTimeout(()=> {
      const observerTwo = this.observable.subscribe(
        (value) => this.addItem('observae two :' + value),
        (error) => console.log('error'),
        () => console.log('complete')
      );
    },6001);
  };


  addItem(value:any){
    console.log(value);
  };
  ngOnDestory(){

  }
}
