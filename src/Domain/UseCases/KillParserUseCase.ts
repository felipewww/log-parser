import {FullLogEntity} from "@Domain/Entites/FullLogEntity";

export class KillParserUseCase {
    constructor(
        private fullLogEntity: FullLogEntity
    ) {
    }

    public async getFullLogEntity() {
        await this.fullLogEntity.getSourceData();
    }
}