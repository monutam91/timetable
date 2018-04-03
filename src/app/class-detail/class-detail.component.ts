import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Course } from '../models';

@Component({
    selector: 'tt-class-detail',
    templateUrl: './class-detail.component.html',
    styleUrls: ['./class-detail.component.scss']
})
export class ClassDetailComponent {
    public class$: Observable<Course>;

    constructor(private _route: ActivatedRoute) {
        this.class$ = _route.data.pipe(map(data => data.class));
    }
}
