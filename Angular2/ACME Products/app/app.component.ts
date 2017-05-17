import {Component} from '@angular/core';

@Component({
    selector: 'pm-app',
    // not quotes for template
    template: ` 
    <div><h1> {{pageTitle}} </h1>
            <pm-products></pm-products>
    </div>`
})

export class AppComponent {
    pageTitle: string = 'ACME Product Management';
}
