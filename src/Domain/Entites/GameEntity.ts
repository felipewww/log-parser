import {FullLogEntity} from "@Domain/Entites/FullLogEntity";
import {LogRowValidator} from "@Domain/Utils/LogRowValidator";

export interface IGameKills {
    clientConnectionsRows: Array<string>,
    killsRows: Array<string>,
}

export class GameEntity {
    private games: Array<Array<string>> = [];

    public parseLogAsGames(fullLogEntity: FullLogEntity) {
        let gameConnectionData: Array<any> = [];
        fullLogEntity.getLogs().forEach((row: string) => {
            switch (LogRowValidator.rowType(row)) {
                case "init":
                    gameConnectionData = [];
                    break;

                case "info":
                    gameConnectionData.push(row);
                    break;

                case "end":
                    this.games.push(gameConnectionData);
            }
        })
    }

    public getGames() {
        return this.games;
    }

    public getGamesKills(): Array<IGameKills> {
        let filtered: Array<IGameKills> = [];

        this.games.forEach((game: Array<string>) => {
            let clientConnectionRows: Array<string> = [];
            let gameKillsInfo: Array<string> = [];

            game.forEach(row => {
                clientConnectionRows = [];
                switch (LogRowValidator.infoType(row)) {
                    case "kill":
                        gameKillsInfo.push(row);
                        break;

                    case "clientConnection":
                        // clientConnectionRows.push(row);
                        break;
                }
            });

            filtered.push({
                clientConnectionsRows: clientConnectionRows,
                killsRows: gameKillsInfo,
            });
        });

        return filtered;
    }
}