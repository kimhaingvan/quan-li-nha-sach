import { UserLoginComponent } from './user-subpages/user-login/user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegisterAccountComponent } from './user-subpages/user-register-account/user-register-account.component';
import { UserRoutingModule } from './user-routing.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { PipeModule } from 'src/app/pipes/pipe/pipe.module';
import { MaterialModule } from 'src/app/shared/material.module';
import {ShareComponentModule} from "../components/share-component.module";
import {MatInputModule} from '../../shared/mat-input/mat-input.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    PipeModule,
    ReactiveFormsModule,
    MaterialModule,
    ShareComponentModule,
    MatInputModule,

  ],
  declarations: [UserComponent, UserRegisterAccountComponent, UserLoginComponent]
})
export class UserModule { }
