import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './components/pages/inicio/inicio.component';
import { ListarComponent } from './components/pages/listar/listar.component';
import { EditarComponent } from './components/pages/editar/editar.component';


const APP_ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'listar', component: ListarComponent },
    { path: 'editar', component: EditarComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' },

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
