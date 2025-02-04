import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './shared/imprint/imprint.component';
import { LegalnoticeComponent } from './shared/legalnotice/legalnotice.component';
// import { Component } from '@angular/core';

export const routes: Routes = [
    { path: '', component: MainContentComponent},
    { path: 'legalnotice', component: LegalnoticeComponent},
    { path: 'imprint', component: ImprintComponent},
];
  