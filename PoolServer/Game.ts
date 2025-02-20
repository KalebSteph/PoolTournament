export class Game{
    gameType: GameType
    solidPlayer: string
    stripesPlayer: string
    gameID: string

    constructor(gameType: GameType, solidPlayer: string, stripesPlayer: string, gameID: string) {
        this.gameType = gameType;
        this.solidPlayer = solidPlayer;
        this.stripesPlayer = stripesPlayer;
        this.gameID = gameID;
    }
}

enum GameType {
    NORMAL,
    EIGHTBALL,
    NINEBALL
}

// var games: [Game] = [Game(gameID)]

