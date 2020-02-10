import {GameLogSource} from "@Data/Source/LogFileSource/GameLogSource";

export class GameLogRepository {
    async getFullLog(): Promise<Array<string>> {
        const dataSource = new GameLogSource();
        return dataSource.all();
    }
}