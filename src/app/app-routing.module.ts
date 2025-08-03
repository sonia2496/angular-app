import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ApiData } from './pages/api-data/api-data';
import { Form } from './pages/form/form';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'api-data', component: ApiData },
  { path: 'form', component: Form },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
