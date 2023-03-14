import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SearchComponent } from './components/search/search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddStudentComponent } from './components/add-student/add-student.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    ProgressBarComponent,
    SearchComponent,
    AddStudentComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
