import { Student } from './student';

export interface Course {
  name: string;
  teacher: string;
  maxNoOfStudents: number;
  students: Student[];
}
