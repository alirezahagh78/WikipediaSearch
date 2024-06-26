import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';
import { HttpClientModule } from "@angular/common/http";
import { RxJsLearningComponent } from './rx-js-learning/rx-js-learning.component';
import { CountComponent } from './count/count.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaviorComponent } from './behavior/behavior.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { OperatorsComponent } from './operators/operators.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    PageListComponent,
    RxJsLearningComponent,
    CountComponent,
    SubjectComponent,
    BehaviorComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    OperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
