import { Component, Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Podium App';

  constructor(private _scrollToService: ScrollToService) { }

  public onSelect(section: String) {
    console.log("Seccion seleccionada: ", section)

    const config: ScrollToConfigOptions = {
      target: section,
      offset: -100
    };
 
    this._scrollToService.scrollTo(config);
  }
}
