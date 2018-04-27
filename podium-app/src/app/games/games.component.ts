import { Component, OnInit } from '@angular/core';
import { Game } from '../../model/Game'
import { GAMES } from '../mock-games'
import { GamesService } from '../games.service'
import { GameResponse } from '../../model/GameResponse';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games : Game[]

  selectedGame: Game

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.getGames()
  }

  onSelect(game: Game): void {
    this.selectedGame = game
  }

  //Get the games from the GamesService
  getGames(): void {

    //Test with lot of games
    //this.games = GAMES
    this.gamesService.getGames()
      .subscribe(gamesResponse => 
        this.games = gamesResponse.result,
      );
  }
}
