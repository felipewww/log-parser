import {FullLogEntity} from "@Domain/Entites/FullLogEntity";
import {LogLineValidations} from "@Domain/Utils/LogLineValidations";

export class GameEntity {
    private games: Array<Array<string>> = [];

    public parseLogAsGames(fullLogEntity: FullLogEntity) {
        let gameConnectionData: Array<any> = [];
        fullLogEntity.getLogs().forEach((line: string) => {
            switch (LogLineValidations.lineType(line)) {
                case "init":
                    gameConnectionData = [];
                    break;

                case "info":
                    gameConnectionData.push(line);
                    break;

                case "end":
                    this.games.push(gameConnectionData);
            }
        })
    }

    public getGames() {
        return this.games;
    }

    public getGamesKills(): Array<Array<string>> {
        let gamesFilteredOnlyWithKillsInfo: Array<Array<string>> = [];

        this.games.forEach((game: Array<string>) => {
            let gameKillsInfo: Array<string> = [];

            game.forEach(line => {
                if ( LogLineValidations.matchKillInfo(line) ) {
                    gameKillsInfo.push(line);
                }
            });

            gamesFilteredOnlyWithKillsInfo.push(gameKillsInfo);
        });

        return gamesFilteredOnlyWithKillsInfo;
    }
}