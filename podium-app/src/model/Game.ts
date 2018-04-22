import { Sport } from "./Sport";

export class Game {
    id: number;
    name: String;
    sport: Sport;
    description: String;
    /*tournament: Tournament;
    participants: [Team];
    wins: Team;
    loses: Team;*/
    open: Boolean;
    concluded: Boolean;
    date: Date;
    latitude: Number;
    longitude: Number;
    modality: String;
    levelAverage: String
}