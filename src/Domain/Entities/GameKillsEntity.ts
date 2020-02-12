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
        gameKillsRawRows.forEach(game => {
            let playerNames: Array<string> = [];

            game.clientConnectionsRows.forEach(connectionRow => {
                const playerName = LogRowParser.connectionUsername(connectionRow);
                if ( playerName && playerNames.indexOf(playerName) < 0 ) {
                    playerNames.push(playerName);
                }
            });

            const matchKills = LogRowParser.totalKillsPerPlayer(playerNames, game.killsRows);

            let kills: { [key:string]: number } = {};
            matchKills.forEach(info => {
                kills[info.playerName] = info.totalKills
            });

            this.games.push({
                total_kills: game.killsRows.length,
                players: playerNames,
                kills
            });
        });
    }

    public getGames(): Array<IGameKillsParsed> {
        return this.games;
    }
}