import {GameLogRepository} from "@Data/Repositories/GameLogRepository";

export class FullLogEntity {
    private logs: Array<string>;

    async getSourceData(): Promise<any> {
        return new Promise((resolve, reject) => {
            const repo = new GameLogRepository();
            repo.getFullLog()
                .then(res => {
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