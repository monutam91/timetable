import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { ClassesService } from './services';
import { Course, Days } from './models';

@Component({
    selector: 'tt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public classes$: Observable<{ day: string; courses: Course[] }[]>;

    constructor(private _classes: ClassesService) {
        this.classes$ = _classes.classes$.pipe(
            map(classes => {
                return Array.from(classes.entries()).map(entry => {
                    const asd = {
                        day: Days[entry[0].toLowerCase()],
                        courses: entry[1]
                    };
                    return asd;
                });
            })
        );
    }
}
