import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { ClassesService } from '../services';
import { Course, Days } from '../models';
import { Router } from '@angular/router';

@Component({
    selector: 'tt-time-table',
    templateUrl: './time-table.component.html',
    styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent {
    public classes$: Observable<{ day: string; courses: Course[] }[]>;

    constructor(private _classes: ClassesService, private _router: Router) {
        this.classes$ = _classes.classes$.pipe(
            map(classes => {
                return Array.from(classes.entries()).map(entry => ({
                    day: Days[entry[0].toLowerCase()],
                    courses: entry[1]
                }));
            })
        );
    }

    public openCourse(course: Course) {
        this._router.navigate(['class', course.id]);
    }
}
