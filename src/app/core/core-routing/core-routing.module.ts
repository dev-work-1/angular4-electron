import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from '../../system/system/system.component';
import { LoginComponent } from '../../frontend/login/login.component';

// import { SystemComponent } from '@angular/router';

const appRoutes: Routes = [
            { path: 'login',
              component: LoginComponent
            },
            {
              path: 'system',
              loadChildren: '../../system/system-routing/system-routing.module#SystemRoutingModule'
            },
            {
              path: '',
              redirectTo: '/login',
              pathMatch: 'full'
            }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class CoreRoutingModule { }
