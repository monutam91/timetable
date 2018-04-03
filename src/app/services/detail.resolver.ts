import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { ClassesService } from './classes.service';
import { Course } from '../models';

@Injectable()
export class ClassDetailResolver implements Resolve<Course> {
    constructor(private _classes: ClassesService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
        const id = route.paramMap.get('id');

        return this._classes.getClass(id);
    }
}
