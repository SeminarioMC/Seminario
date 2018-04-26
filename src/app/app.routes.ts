import {Routes, RouterModule} from '@angular/router';

import {InicioComponent} from './component/Pages/inicio/inicio.component';
import {ProgramaComponent} from './component/Pages/programa/programa.component';
import {LlamamientoComponent} from './component/Pages/llamamiento/llamamiento.component';
import {EnvioComponent} from './component/Pages/envio/envio.component';
import {RegistroComponent} from './component/Pages/registro/registro.component';
import {InvitacionComponent} from './component/Pages/invitacion/invitacion.component';
import {FechasComponent} from './component/Pages/fechas/fechas.component';
import {ComiteComponent} from './component/Pages/comite/comite.component';
import {LugarComponent} from './component/Pages/lugar/lugar.component';
import {RevisoresComponent} from './component/Pages/revisores/revisores.component';
import {NopageComponent} from './component/nopage/nopage.component';


const appRoutes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'programa', component: ProgramaComponent},
  {path: 'llamamiento', component: LlamamientoComponent},
  {path: 'envio', component: EnvioComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'invitacion', component: InvitacionComponent},
  {path: 'fechas', component: FechasComponent},
  {path: 'comite', component: ComiteComponent},
  {path: 'lugar', component: LugarComponent},
  {path: 'revisores', component: RevisoresComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: '**', component: NopageComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);
