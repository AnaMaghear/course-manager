import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  filterForm!: FormGroup;
  @Output() filterEmitter: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.filterForm = new FormGroup({
      input: new FormControl(''),
      filter: new FormControl(1),
    });
  }

  onSubmit() {
    this.filterEmitter.emit({
      input: this.filterForm.get('input')?.value,
      filter: this.filterForm.get('filter')?.value,
    });
  }
}
