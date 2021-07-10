import { AccountQuery } from './states/account-store/account.query';
import { auth_info, account } from './models/app-models';
import { AccountService } from 'src/app/states/account-store/account.service';

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AccountStore } from './states/account-store/account.store';

@Injectable({ providedIn: 'root' })
export class LoginViewGuard implements CanActivate{
    constructor(private accountService: AccountService, private router: Router, private accountQuery: AccountQuery, private accountStore: AccountStore){}
    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree>{
        return this.accountQuery.auth_info$.pipe(
            take(1),
            map(auth_info => {
              // let role_id_acc = JSON.parse(localStorage.getItem('auth_info')).account.role.role_id;
              if (auth_info?.account?.role?.role_id == 1 || auth_info?.account?.role?.role_id == 2) {
                this.accountStore.reset();
                localStorage.removeItem('auth_info')
                return this.router.createUrlTree(['/user/login']);
              }
              if(!localStorage.getItem('auth_info')){
                return true;
              }
              return this.router.createUrlTree(['book-store']);
            })
        );
    }
}
