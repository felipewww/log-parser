import {FullLogEntity} from "@Domain/Entities/FullLogEntity";
import {LogRowValidator} from "@Domain/Utils/LogRowValidator";
import {IGameKillsRawRows} from "@Domain/Entities/GameKillsEntity";

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

    public getFilteringKills(gameCode?: string): Array<IGameKillsRawRows>  {
        if (!gameCode) {
            return this.getAll()
        } else {
            const found = this.getByCode(gameCode);
            if (found) {
                return [found]
            } else {
                return [];
            }
        }
    }

    private getAll(): Array<IGameKillsRawRows> {
        let filtered: Array<IGameKillsRawRows> = [];

        this.games.forEach((game: Array<string>) => {
            filtered.push(this.filterByKils(game));
        });

        return filtered;
    }

    private getByCode(gameCode: string): IGameKillsRawRows {
        const idx = Number(gameCode.substring(5));

        let game = this.games[idx];

        if (!game) {
            return;
        }

        return this.filterByKils(game);
    }

    private filterByKils(game: Array<string>): IGameKillsRawRows {
        let filtered: IGameKillsRawRows;

        let clientConnectionRows: Array<string> = [];
        let gameKillsInfo: Array<string> = [];

        game.forEach(row => {
            switch (LogRowValidator.infoType(row)) {
                case "kill":
                    gameKillsInfo.push(row);
                    break;

                case "clientConnection":
                    clientConnectionRows.push(row);
                    break;
            }
        });

        filtered = {
            clientConnectionsRows: clientConnectionRows,
            killsRows: gameKillsInfo,
        };

        return filtered;
    }
}