import { Component } from '@angular/core';

import { Days, Course } from '../models';
import { ClassesService } from '../services';

@Component({
    selector: 'tt-add-form',
    templateUrl: './add-form.component.html',
    styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {
    public days: string[];

    public course: Course;

    constructor(private _classes: ClassesService) {
        this.days = Object.keys(Days).map(key => Days[key]);
        this.course = new Course();
    }

    public onSubmit() {
        this._classes.add(this.course);
    }
}
