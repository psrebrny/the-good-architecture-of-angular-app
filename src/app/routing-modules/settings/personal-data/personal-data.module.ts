import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PersonalDataComponent} from './personal-data.component';


const routes: Routes = [
  { path: '', component: PersonalDataComponent }
];

@NgModule({
  declarations: [PersonalDataComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PersonalDataModule { }
