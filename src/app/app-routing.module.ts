import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DiffComponent} from "./tools/diff/diff.component";

const routes: Routes = [
  {path: 'diff', component: DiffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
