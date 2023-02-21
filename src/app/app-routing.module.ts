import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"template-form/:val",component:TemplateFormComponent},
  {path:"template-form",component:TemplateFormComponent},
  {path:"reactive-form",component:ReactiveFormComponent},
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
