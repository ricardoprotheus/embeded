import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmbedqryComponent } from './embedqry/embedqry.component';


const routes: Routes = [
  { path: 'embedqry', component: EmbedqryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
