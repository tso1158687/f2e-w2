import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ActivityComponent } from './activity/activity.component';
const routes: Routes = [
  {path: '', component: MainComponent},
  // {path: 'activity', component: ActivityComponent},
  { path: 'activity/:id', component: ActivityComponent },
  {path: '', redirectTo: '/9487', pathMatch: 'full'},
  { path: '**', component: MainComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
