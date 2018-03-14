import { Days } from './days.enum';

export class Course {
    public name: string;
    public place: string;
    public start: Date;
    public end: Date;
    public day: Days;

    constructor();
    constructor(course?: Course) {
        Object.assign(this, course);
    }
}
