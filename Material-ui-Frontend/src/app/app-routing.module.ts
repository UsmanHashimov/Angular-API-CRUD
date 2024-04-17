import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { GetbyidComponent } from './components/getbyid/getbyid.component';
import { GetallComponent } from './components/getall/getall.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';

const routes: Routes = [
  { path: 'home', redirectTo: 'getall', pathMatch: 'full' },
  { path: '', redirectTo: 'getall', pathMatch: 'full' },
  { path: 'getall', component: GetallComponent },
  { path: 'getbyid', component: GetbyidComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'delete', component: DeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
