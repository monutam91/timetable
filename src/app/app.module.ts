import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ClassesService } from './services';
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
    declarations: [AppComponent, AddFormComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatButtonModule
    ],
    providers: [ClassesService],
    bootstrap: [AppComponent]
})
export class AppModule {}
