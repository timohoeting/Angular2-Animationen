import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterLeaveComponent } from './components/enterleave/enterleave.component';



const appRoutes: Routes = [
    {path:'', component: EnterLeaveComponent},
    {path:'enterandleave', component: EnterLeaveComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
