import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PolicyComponent } from './shared/policy/policy.component';
import { LegalnoticeComponent } from './shared/legalnotice/legalnotice.component';
// import { Component } from '@angular/core';

export const routes: Routes = [
    { path: '', component: MainContentComponent},
    { path: 'legalnotice', component: LegalnoticeComponent},
    { path: 'policy', component: PolicyComponent},
];
  