import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent {


  constructor() { }

  ngOnInit(): void {
    const observable = new Observable<string>((observer) => {
      observer.next('hi')
    }).pipe(
      map(val => val.toUpperCase()),
    );
    const observer = observable.subscribe((data) => {
      console.log(data);
    });

    from([{
      name: 'ali',
      age: 28,
    },
    {
      name: 'reza',
      age: 29,
    },
    {
      name: 'milad',
      age: 30,
    }
    ]).pipe(
      pluck('age')
    ).subscribe((data) => {
      console.log(data);
    });
  }
}
