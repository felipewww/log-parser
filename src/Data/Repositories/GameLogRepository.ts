import {GameLogSource} from "@Data/Source/LogFileSource/GameLogSource";
import {GameLogRepositoryContract} from "@Domain/Contracts/Repositories/GameLogRepositoryContract";

export class GameLogRepository implements GameLogRepositoryContract {
    async getFullLog(): Promise<Array<string>> {
        const dataSource = new GameLogSource();
        return dataSource.all();
    }
}