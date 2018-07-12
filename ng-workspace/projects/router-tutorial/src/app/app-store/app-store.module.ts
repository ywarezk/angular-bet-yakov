import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import { appReducer } from './reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({
      user: appReducer
    })
  ],
  exports: [StoreModule]
})
export class AppStoreModule { }
