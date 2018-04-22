import { Injectable } from '@angular/core';
import { Game } from '../model/Game'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { GAMES } from '../app/mock-games'

@Injectable()
export class GamesService {

  constructor() { }

  getGames(): Observable<Game[]> {
    return of(GAMES)
  }

}
