import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelComponent } from './tabel/tabel.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }