import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './init/home/home.component';
import { NotfoundComponent } from './init/notfound/notfound.component';
  
const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'rest', loadChildren: () => import('./rest/rest.module').then(m => m.RestModule)},
  // { path: 'rest', loadChildren: './rest/rest.module#RestModule' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}