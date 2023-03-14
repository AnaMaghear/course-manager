import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Student } from '../models/student';

let CLASSES = [
  {
    name: 'Graphics',
    teacher: 'Kyle',
    maxNoOfStudents: 10,
    students: [{ name: 'John' }, { name: 'Beth' }, { name: 'Mike' }],
  },
  {
    name: 'Mechatronics',
    teacher: 'Allen',
    maxNoOfStudents: 15,
    students: [
      { name: 'Stewie' },
      { name: 'Chris' },
      { name: 'Peter' },
      { name: 'Brian' },
    ],
  },
  {
    name: 'Robotics',
    teacher: 'Anna',
    maxNoOfStudents: 5,
    students: [{ name: 'Andrew' }, { name: 'Leia' }],
  },
];

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  getCourses(): Course[] {
    return CLASSES;
  }

  deleteCourse(name: string) {
    CLASSES = CLASSES.filter((course) => course.name !== name);
  }

  addStudentOnCourse(student: Student, courseName: string) {
    for (let course of CLASSES) {
      if (course.name === courseName) course.students.push(student);
    }
  }

  constructor() {}
}
