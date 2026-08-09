import { Routes } from '@angular/router';
import { KasirComponent } from './kasir/kasir.component';

export const routes: Routes = [
    { path: '', redirectTo: 'kasir', pathMatch: 'full' },
    { path: 'kasir', component: KasirComponent }
];