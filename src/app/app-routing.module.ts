import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full',redirectTo: '/index'},
  // {
  //   path: 'index',
  //   component: AppComponent,
  // },
  {
    path: 'home',
    loadChildren: () => import('./../app/home/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./../app/details/details/details.module').then(m => m.DetailsModule)
  },
  { 
    path: '**', redirectTo: '' 
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
