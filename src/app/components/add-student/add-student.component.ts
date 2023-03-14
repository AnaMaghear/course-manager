import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  addStudentForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { name: string },
    private courseService: CourseService,
    public dialogRef: MatDialogRef<AddStudentComponent>
  ) {}

  ngOnInit(): void {
    this.addStudentForm = new FormGroup({
      studentName: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    let student: Student = {
      name: this.addStudentForm.get('studentName')?.value,
    };
    this.courseService.addStudentOnCourse(student, this.data.name);
    this.dialogRef.close();
  }
}
