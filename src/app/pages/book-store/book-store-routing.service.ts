import { BookStoreComponent } from './book-store.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeManagementComponent} from "../admin/admin-subpages/employee-management/employee-management.component";
import {EmployeeListComponent} from "../admin/admin-subpages/account-management/components/employee-list/employee-list.component";
import {EmployeeDetailComponent} from "../admin/admin-subpages/account-management/components/employee-detail/employee-detail.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {DetailComponent} from "./components/detail/detail.component";
import {HomeComponent} from "./components/home/home.component";
import {SearchComponent} from "./components/search/search.component";
import {UserPageGuard} from "../../auth-guard";
import {SettingsComponent} from './components/settings/settings.component';

const routes: Routes = [
  {
    path: '', component: BookStoreComponent, children: [
      {path: 'checkout', component: CheckoutComponent, canActivate: [UserPageGuard]},
      {path: 'home', component: HomeComponent},
      {path: 'search', component: SearchComponent},
      {path: 'settings', component: SettingsComponent, canActivate: [UserPageGuard]},
      {path: 'detail/:id', component: DetailComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home'},
    ]
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)
    ],
  exports: [RouterModule],
  declarations: [],
})
export class BookStoreRoutingModule { }
