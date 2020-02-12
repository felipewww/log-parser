import {LogRowParser} from "@Domain/Utils/LogRowParser";

export interface IGameKillsRawRows {
    clientConnectionsRows: Array<string>,
    killsRows: Array<string>,
}

export interface IGameKillsParsed {
    total_kills: number;
    players: Array<string>,
    kills: { [key:string]: number }
}

export class GameKillsEntity {
    private games: Array<IGameKillsParsed> = [];

    public toJSON(gameKillsRawRows: Array<IGameKillsRawRows>) {
        let gamesParsed: Array<IGameKillsParsed> = [];
        gameKillsRawRows.forEach(game => {
            let playerNames: Array<string> = [];

            game.clientConnectionsRows.forEach(connectionRow => {
                const playerName = LogRowParser.connectionUsername(connectionRow);
                if ( playerName && playerNames.indexOf(playerName) < 0 ) {
                    playerNames.push(playerName);
                }
            });

            gamesParsed.push({
                total_kills: 0,
                players: playerNames,
                kills: {
                    'p': 1
                }
            })
        })

        return gamesParsed;
    }
}