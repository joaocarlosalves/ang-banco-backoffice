import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanaisComponent } from './components/pages/canais/canais.component';
import { AdicionarCanalComponent } from './components/pages/canais/adicionar-canal/adicionar-canal.component';
import { ProdutosAuxiliaresComponent } from './components/pages/produtos-auxiliares/produtos-auxiliares.component';
import { EventosComponent } from './components/pages/eventos/eventos.component';
import { OcorrenciasEspeciaisComponent } from './components/pages/ocorrencias-especiais/ocorrencias-especiais.component';
import { AdicionarEventoComponent } from './components/pages/eventos/adicionar-evento/adicionar-evento.component';

const routes: Routes = [
  { path: 'canais', component: CanaisComponent },
  { path: 'canais/adicionar', component: AdicionarCanalComponent },
  { path: 'produtos-auxiliares', component: ProdutosAuxiliaresComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'eventos/adicionar', component: AdicionarEventoComponent },
  { path: 'ocorrencias-especiais', component: OcorrenciasEspeciaisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
