import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './crud/add/add.component';
import { DeleteComponent } from './crud/delete/delete.component';
import { TrailComponent } from './trail/trail.component';

const routes: Routes = [
  {path:'trial', component:TrailComponent},
    {path:'',component:HomeComponent},
    {path:'search/:searchitem',component:HomeComponent}, //path set up
    {path:'tag/:tag',component:HomeComponent},
    {path:'add',component: AddComponent},
    {path:'delete',component: DeleteComponent},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
