import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { AddStudentComponent } from '../add-student/add-student.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];

  constructor(public dialog: MatDialog, private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    this.filteredCourses = this.courses;
    console.log(this.courses);
  }

  onFilter(event: any) {
    if (event.input !== '') {
      if (event.filter === '1') {
        this.filteredCourses = this.courses.filter((course) =>
          course.name.toLowerCase().includes(event.input.toLowerCase())
        );
      } else {
        this.filteredCourses = this.courses.filter((course) =>
          course.teacher.toLowerCase().includes(event.input.toLowerCase())
        );
      }
    } else {
      this.filteredCourses = this.courses;
    }
  }

  onDelete(name: string) {
    this.courseService.deleteCourse(name);
    this.ngOnInit();
  }

  onAddStudent(name: string) {
    const dialogRef = this.dialog.open(AddStudentComponent, {
      height: '400px',
      width: '600px',
      data: { name: name },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }
}
