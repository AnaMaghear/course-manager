import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnChanges {
  @Input() maxNoOfStudents!: number;
  @Input() noOfStudents!: number;
  occupancy: number = 0;

  ngOnChanges(): void {
    this.occupancy = (this.noOfStudents * 100) / this.maxNoOfStudents;
  }

  getProgressBarColor(): string {
    if (this.occupancy < 25) {
      return 'green-bar';
    } else if (this.occupancy < 75) {
      return 'yellow-bar';
    } else {
      return 'red-bar';
    }
  }
}
