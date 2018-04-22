import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../model/Game'

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  @Input() game: Game;
  
  constructor() { }

  ngOnInit() {
  }

}
