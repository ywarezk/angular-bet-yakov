import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { AccountComponent } from '../account/account.component';
import { ParentComponent } from '../parent/parent.component';
import { IsAdminService } from './is-admin.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', canActivate: [IsAdminService] ,component: ParentComponent ,children: [
        {path: 'user', component: UserComponent}, // /path-of-parent/user/ => /parent/user/
        {path: 'account', component: AccountComponent}, // parent/account
      ]},
    ])
  ],
  providers: [IsAdminService],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
