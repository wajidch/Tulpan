
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JobListComponent } from './pages/job-list/job-list.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
// import { LoginComponent } from './users/login/login.component';


const routes: Routes = [
  { path:'',component:HomeComponent},

 {path:'joblist',component:JobListComponent},
 {path:'jobdetail',component:JobDetailComponent},
//  {path:'**',redirectTo:'',pathMatch:'full'}
      
    
  
 



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
