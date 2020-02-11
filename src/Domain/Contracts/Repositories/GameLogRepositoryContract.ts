export interface GameLogRepositoryContract {
    getFullLog(): Promise<Array<string>>;
}