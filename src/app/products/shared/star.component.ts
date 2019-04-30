import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';
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

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  onClick(): void {
    this.ratingClicked.emit(this.rating.toString());
  }

}   