import { Game } from "./Game";

export class Sport {
    id: number;
    name: String;
    image: String;
    description: String;
    rules: String;
    popularity: Number;
    // activeTournaments: [Tournament];
    // openTournaments: [Tournament];
    activeGames: [Game];
    openGames: [Game];
    //ranking: [User];
}