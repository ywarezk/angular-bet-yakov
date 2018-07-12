import { Injectable } from '@angular/core';
// import { SettingsRoutingModule } from './settings-routing.module';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
// import { SettingsModule } from '../settings.module';
// import { SettingsRoutingModule } from './settings-routing.module';

@Injectable()
export class IsAdminService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      false
    }
  }
}