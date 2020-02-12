import {FullLogEntity} from "@Domain/Entites/FullLogEntity";
import {LogLineValidations} from "@Domain/Utils/LogLineValidations";

export class GameEntity {
    private games: Array<any> = [];

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
}