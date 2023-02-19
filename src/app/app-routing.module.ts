import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { FirstComponent } from './features/first/first.component';
import { ContactComponent } from './features/contact/contact.component';
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
  path: 'user', 
  loadChildren: () => 
  import('./features/user/user.module').then(m => m.UserModule),
},
{
  path:'contact',
  component:ContactComponent
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