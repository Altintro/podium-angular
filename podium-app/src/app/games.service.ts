import { Injectable } from '@angular/core';
import { Game } from '../model/Game'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { GAMES } from '../app/mock-games'
import { GameResponse } from '../model/GameResponse';

@Injectable()
export class GamesService {

  // private gamesUrl = "https://api.winatpodium.com/apiv1/games"
  private gamesUrl = "http://localhost:3000/apiv1/games"

  constructor(private http: HttpClient) { }

  getGames(): Observable<GameResponse> {
    let games = this.http.get<GameResponse>(this.gamesUrl)
    return games
  }

}
