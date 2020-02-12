import {FullLogEntity} from "@Domain/Entities/FullLogEntity";
import {GameLogRepository} from "@Data/Repositories/GameLogRepository";
import {GameEntity} from "@Domain/Entities/GameEntity";
import {GameKillsEntity} from "@Domain/Entities/GameKillsEntity";

export class KillParserUseCase {

    constructor(
        private fullLogEntity: FullLogEntity,
        private gameEntity: GameEntity,
        private gameKillsEntity: GameKillsEntity,
        private gameCode?: string
    ) {
    }

    public async init() {
        await this.fullLogEntity.getSourceData(new GameLogRepository());
        this.gameEntity.parseLogAsGames(this.fullLogEntity);
        this.gameKillsEntity.toJSON(this.gameEntity.getFilteringKills(this.gameCode))
    }

    public getResult() {
        return this.gameKillsEntity.getGames();
    }
}