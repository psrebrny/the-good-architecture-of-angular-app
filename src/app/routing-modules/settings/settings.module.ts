import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from './settings.component';


const routes: Routes = [
  { path: '', component: SettingsComponent },
  { path: 'personal-data', loadChildren: () => import('./personal-data/personal-data.module').then(m => m.PersonalDataModule) },
  { path: 'authorization', loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule) }
];

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingsModule { }
