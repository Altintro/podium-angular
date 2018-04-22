import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { DownloadComponent } from './download/download.component';
import { TeamComponent } from './team/team.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GamesService } from './games.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    DownloadComponent,
    TeamComponent,
    GameDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
