import { Days } from './days.enum';

export class Course {
    public id: string;
    public name: string;
    public place: string;
    public start: string;
    public end: string;
    public day: Days;

    constructor();
    constructor(course?: Course) {
        this.id = course && course.id ? course.id : this.generateGuid();
        Object.assign(this, course);
    }

    private generateGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            // tslint:disable:no-bitwise
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;

            // tslint:enable:no-bitwise
            return v.toString(16);
        });
    }
}
