import { Routes,RouterModule} from '@angular/router';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { DirectivasComponent } from './Components/directivas/directivas.component';
import { PipesComponent } from './Components/pipes/pipes.component';
import { FormsComponent } from './Components/forms/forms.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ReactiveFormsComponent } from './Components/reactive-forms/reactive-forms.component';

export const APP_ROUTES: Routes= [
  {path: '', pathMatch: 'full', redirectTo: '/data-binding'},
  {path:'data-binding', component: DataBindingComponent},
  {path:'data-binding/:variable', component: DataBindingComponent},
  {path:'directivas', component: DirectivasComponent},
  {path:'pipes', component: PipesComponent},
  {path:'forms', component: FormsComponent},
  {path:'reactive-forms', component: ReactiveFormsComponent},
  {path:'**', component: PageNotFoundComponent} // Página no encontrada
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);