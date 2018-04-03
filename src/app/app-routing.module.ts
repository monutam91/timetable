import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFormComponent } from './add-form/add-form.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { ClassDetailResolver } from './services/detail.resolver';
import { TimeTableComponent } from './time-table/time-table.component';

const routes: Routes = [
    { path: 'timetable', component: TimeTableComponent },
    { path: 'add', component: AddFormComponent },
    { path: 'class/:id', component: ClassDetailComponent, resolve: { class: ClassDetailResolver } },
    { path: '', redirectTo: 'timetable', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
