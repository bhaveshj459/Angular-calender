import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthModelComponent } from './auth-model/auth-model.component';
// import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [AuthModelComponent, LoginComponent, RegisterComponent],
    exports: [AuthModelComponent],
    imports: [CommonModule, ReactiveFormsModule, FormsModule, SharedModule]
})
export class UserModule {}
