import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './calendar/calendar.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from "./modal/modal.module";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { UserModule } from "./user/user.module";

@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        NgbModalModule,
        ModalModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
        UserModule,
        AngularFireModule.initializeApp({
            apiKey: "AIzaSyDgGw_nyLXucS9a9iYQQPfdnJkcMx4DZyk",
            authDomain: "angular-calender-7c174a.firebaseapp.com",
            projectId: "angular-calender-7c174a",
            storageBucket: "angular-calender-7c174a.appspot.com",
            appId: "1:598861738859:web:8dc3b0b5f9d94af5cbd22e"
        }),
        
    ]
})
export class AppModule { }
