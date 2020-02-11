import {FullLogEntity} from "@Domain/Entites/FullLogEntity";
import {GameLogRepository} from "@Data/Repositories/GameLogRepository";

export class KillParserUseCase {
    constructor(
        private fullLogEntity: FullLogEntity
    ) {
    }

    public async getFullLogEntity() {
        await this.fullLogEntity.getSourceData(new GameLogRepository());
    }
}