import {FullLogEntity} from "@Domain/Entities/FullLogEntity";
import {GameLogRepository} from "@Data/Repositories/GameLogRepository";
import {GameEntity} from "@Domain/Entities/GameEntity";

export class GamesParserUseCase {
    constructor(
        private fullLogEntity: FullLogEntity,
        private gameEntity: GameEntity,
    ) {
    }

    public async init() {
        await this.fullLogEntity.getSourceData(new GameLogRepository());
        this.gameEntity.parseLogAsGames(this.fullLogEntity);
    }

    public getResult(): Array<string> {
        let res: Array<string> = [];
        this.gameEntity.getGames().forEach((game, idx) => {
            res.push('game_' + idx);
        });

        return res;
    }
}