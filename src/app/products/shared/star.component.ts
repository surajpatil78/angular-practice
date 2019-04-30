import { Component, Input, OnChanges } from '@angular/core';
@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html'
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  inputedRating: number;

  ngOnChanges(): void {
    this.inputedRating = this.rating;
  }
}   