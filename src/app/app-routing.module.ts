import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieviewComponent } from './components/movieview/movieview.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/dashboard' ,pathMatch:'full'
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'movie/:id',component:MovieviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
