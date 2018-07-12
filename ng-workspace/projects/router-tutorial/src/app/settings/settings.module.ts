import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { AccountComponent } from './account/account.component';
import { SettingsRoutingModule } from './settings-routing/settings-routing.module';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule
  ],
  declarations: [UserComponent, AccountComponent, ParentComponent],
  id: 'settingsModule'
})
export class SettingsModule { }
