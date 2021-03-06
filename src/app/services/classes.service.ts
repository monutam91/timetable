import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { first, map } from 'rxjs/operators';

import { Days, Course } from '../models';

@Injectable()
export class ClassesService implements OnDestroy {
    private readonly CLASSES_LOCAL_STORAGE_KEY: string = 'MT_CLASS_MAP';

    private _classesMap: Map<Days, Course[]>;
    private _classes$: BehaviorSubject<Map<Days, Course[]>>;

    constructor() {
        this.initClasses();
        this._classes$ = new BehaviorSubject<Map<Days, Course[]>>(this._classesMap);
    }

    public ngOnDestroy() {
        this.saveClasses();
    }

    public add(course: Course) {
        this._classesMap.get(course.day).push(course);
        this._classes$.next(this._classesMap);
        this.saveClasses();
    }

    public get classes(): Map<Days, Course[]> {
        return this._classes$.value;
    }

    public get classes$(): Observable<Map<Days, Course[]>> {
        return this._classes$.asObservable();
    }

    public getClass(id: string): Observable<Course> {
        return this.classes$.pipe(
            first(),
            map(classes => {
                const classList: Course[] = [].concat(...Array.from(classes.values()));
                return classList.find(course => course.id === id);
            })
        );
    }

    private initClasses() {
        // We need to get the existing classes, but also if there aren't any, we need to initialize the member with a new Map
        const classes: any[] = JSON.parse(localStorage.getItem(this.CLASSES_LOCAL_STORAGE_KEY)) || [];

        this._classesMap = new Map<Days, Course[]>(classes);

        // We get the key of the Days enum, then iterate over it to initialize every day which isn't already inside the map
        Object.keys(Days)
            .filter(key => !this._classesMap.has(Days[key]))
            .forEach(key => this._classesMap.set(Days[key], []));
    }

    private saveClasses() {
        localStorage.setItem(this.CLASSES_LOCAL_STORAGE_KEY, JSON.stringify(Array.from(this._classesMap.entries())));
    }
}
