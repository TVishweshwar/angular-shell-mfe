import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { EmptyComponent } from './empty/empty.component';

const MFE5_ROUTES: Routes = [
  { path: 'angular17/a', component: AComponent },
  { path: 'angular17/b', component: BComponent },

  // To prevent issues when routing to other micro frontends
  // a catch-all route should be defined
  { path: '**', component: EmptyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(MFE5_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
