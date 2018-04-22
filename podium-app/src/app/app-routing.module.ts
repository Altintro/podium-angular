import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component'
import { DownloadComponent } from './download/download.component'
import { TeamComponent } from './team/team.component'

const routes: Routes = [
  { path: 'games', component: GamesComponent },
  { path: 'download', component: DownloadComponent},
  { path: 'team', component: TeamComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
