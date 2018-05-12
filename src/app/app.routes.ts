import {Routes, RouterModule} from '@angular/router';

import {InicioComponent} from './component/Pages/inicio/inicio.component';
import {ProgramaComponent} from './component/Pages/programa/programa.component';
import {LlamamientoComponent} from './component/Pages/llamamiento/llamamiento.component';
import {RegistroComponent} from './component/Pages/registro/registro.component';
import {InvitacionComponent} from './component/Pages/invitacion/invitacion.component';
import {ComiteComponent} from './component/Pages/comite/comite.component';
import {LugarComponent} from './component/Pages/lugar/lugar.component';
import {NopageComponent} from './component/nopage/nopage.component';
import {TallerComponent} from './component/Pages/taller/taller.component';


const appRoutes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'programa', component: ProgramaComponent},
  {path: 'taller', component: TallerComponent},
  {path: 'llamamiento', component: LlamamientoComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'invitacion', component: InvitacionComponent},
  {path: 'comite', component: ComiteComponent},
  {path: 'lugar', component: LugarComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: '**', component: NopageComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);
