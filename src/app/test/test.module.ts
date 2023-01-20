import { CommonModule } from '@angular/common';
import { FormComponent } from '/Users/sadman/disstest/src/app/features/pokemon/components/form/form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from '/Users/sadman/disstest/src/app/features/pokemon/components/list/list.component';
import { DetailComponent } from '/Users/sadman/disstest/src/app/features/pokemon/components/detail/detail.component';

@NgModule({
  declarations: [TestComponent, FormComponent, ListComponent, DetailComponent],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class PokemonModule {}