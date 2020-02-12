import {FullLogEntity} from "@Domain/Entities/FullLogEntity";
import {GameLogRepository} from "@Data/Repositories/GameLogRepository";
import {GameEntity} from "@Domain/Entities/GameEntity";

export class KillParserUseCase {
    constructor(
        private fullLogEntity: FullLogEntity,
        private gameEntity: GameEntity
    ) {
    }

    public async getFullLogEntity() {
        await this.fullLogEntity.getSourceData(new GameLogRepository());
    }

    public parseFullLogInGames() {
        this.gameEntity.parseLogAsGames(this.fullLogEntity);
        const gamesFilteredOnlyWithKillsInfo = this.gameEntity.getGamesKills();
        console.log(gamesFilteredOnlyWithKillsInfo);
    }
}