import {GameLogRepositoryContract} from "@Domain/Contracts/Repositories/GameLogRepositoryContract";

export class FullLogEntity {
    private logs: Array<string>;

    async getSourceData(gameLogRepository: GameLogRepositoryContract): Promise<any> {
        return new Promise((resolve, reject) => {
            gameLogRepository.getFullLog()
                .then(res => {
                    this.logs = res;
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    public getLogs(): Array<any> {
        return this.logs;
    }
}