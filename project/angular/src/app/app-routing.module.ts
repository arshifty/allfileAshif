import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddbloodComponent } from './components/addblood/addblood.component';
import { DisplayComponent } from './components/display/display.component';
import{ EditpageComponent } from './components/editpage/editpage.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'display', pathMatch: 'full' },

  { 
    path: 'editpage/:id', 
    component: EditpageComponent 
  },


  { 
    path: 'add', 
    component: AddbloodComponent 
  },

  { 
    path: 'display', 
    component: DisplayComponent 
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
