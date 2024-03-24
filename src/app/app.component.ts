import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { WikipediaResponse, WikipediaService } from './_services/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: WikipediaResponse[] = [];
  title = 'WikipediaSearch';

  constructor(private wikipediaService: WikipediaService) { }

  OnGetTermSearch(value: string) {
    this.wikipediaService.onSearch(value).subscribe(
      (response: WikipediaResponse[]) => {
        console.log(response);
        this.posts = response;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }, () => {
        console.log('completed');
      });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }
}
