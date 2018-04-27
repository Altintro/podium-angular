import { Game } from '../model/Game';
import { Sport } from '../model/Sport';

const SPORT: Sport = {
  _id: 1,
  name: "Tennis",
  image: "Nada",
  description: "Deporte donde hay que pasar la pelota del otro lado de la red",
  rules: "",
  popularity: 9
}

export const GAMES: Game[] = [
   { _id: 1, 
    name: "Tennis Double",
    sport: SPORT,
    open: true,
    modality: "Team" 
  },
   { _id: 2, 
    name: "Tennis Double",
    sport: SPORT,
    open: true,
    modality: "Team" 
  },
   { _id: 3, 
    name: "Tennis Double",
    sport: SPORT,
    open: true,
    modality: "Team" 
  },
   { _id: 4, 
    name: "Tennis Double",
    sport: SPORT,
    open: true,
    modality: "Team" 
  },
   { _id: 5, 
    name: "Tennis Double",
    sport: SPORT,
    open: true,
    modality: "Team" 
  },
   { _id: 6, 
    name: "Tennis Double",
    sport: SPORT,
    open: true,
    modality: "Team" 
  },
   { _id: 7, 
    name: "Futbol En el centro 11 vs 11",
    sport: SPORT,
    open: true,
    modality: "Team" 
  },
   { _id: 8, 
    name: "Tennis Double",
    sport: SPORT,
    open: true,
    modality: "Team" 
  }

 ];