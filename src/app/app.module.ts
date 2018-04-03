import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesService, ClassDetailResolver } from './services';
import { AddFormComponent } from './add-form/add-form.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';

@NgModule({
    declarations: [AppComponent, AddFormComponent, TimeTableComponent, ClassDetailComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatButtonModule,
        MatListModule,
        MatTabsModule,
        MatIconModule,
        MatCardModule
    ],
    providers: [ClassesService, ClassDetailResolver],
    bootstrap: [AppComponent]
})
export class AppModule {}
