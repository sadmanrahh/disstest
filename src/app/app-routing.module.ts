import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { FirstComponent } from './features/first/first.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/first/first.module').then((m) => m.FirstModule),
  },
  
  {
    path: 'pokemon',
    loadChildren: () =>
      import('./features/pokemon/pokemon.module').then((m) => m.PokemonModule),
  },
  
  
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}