export class Player {
    playerName: string
    win: number
    avg: number
    loss: number
    playerID: string

    constructor(playerName: string, win: number, avg: number, loss: number, playerID: string) {
        this.playerName = playerName;
        this.win = win;
        this.avg = avg;
        this.loss = loss;
        this.playerID = playerID;
    }
}

//var players: [Player] = [Player(id: "1", name: "Jeremy Skrdlant", win: 90, avg: 100, loss: 0), Player(id: "2", name: "Harlan Tasci", win: 100, avg: 100, loss: 0)]
const players = [
    { id: "1", name: "Jeremy Skrdlant", win: 90, avg: 100, loss: 0 },
    { id: "2", name: "Harlan Tasci", win: 100, avg: 100, loss: 0 }
];
