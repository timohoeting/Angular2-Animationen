import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterLeaveComponent } from './components/enterleave/enterleave.component';
import { DifferenstatesComponent } from './components/differentstates/differentstates.component';


const appRoutes: Routes = [
    {path:'', component: EnterLeaveComponent},
    {path:'enterandleave', component: EnterLeaveComponent},
    {path:'differentstates', component: DifferenstatesComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
