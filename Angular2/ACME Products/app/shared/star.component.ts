import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl:  'star.component.html',
    styleUrls: ['star.component.css']
})

export class StarComponent implements OnChanges {
    /* using input to bind the rating to product html */
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter <string> = new EventEmitter<string>();
    
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
    
    onClick(): void {
        this.ratingClicked.emit(`The ratinf ${this.rating} was Clicked !`);
    }
}
