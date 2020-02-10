import {LogFileSource} from "@Data/Source/LogFileSource/LogFileSource";

export class GameLogSource extends LogFileSource {
    public async all(): Promise<any> {
        return this.get('games.log');
    }
}