import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugFormComponent } from './main/bug-form/bug-form.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'edit/:id', component: BugFormComponent},
  { path: 'create', component: BugFormComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
