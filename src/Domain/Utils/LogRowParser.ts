export interface IKillsPerPlayer {
    playerName: string,
    totalKills: number
}

export class LogRowParser {
    public static connectionUsername(row: string) {
        let match = row.match(/(?<=n\\)(.*?)(?=\\t)/g);

        if (match) {
            return match[0]
        }
    }

    public static totalKillsPerPlayer(playersNames: Array<string>, killsRows: Array<string>): Array<IKillsPerPlayer> {
        let result: Array<IKillsPerPlayer> = [];

        playersNames.forEach(playerName => {

            let worldDeaths: number = 0;
            let kills: number = 0;
            let suicides: number = 0;

            killsRows.forEach(row => {
                if (row.match(`<world> killed ${playerName}`)) {
                    worldDeaths++;
                } else if (row.match(`${playerName} killed ${playerName}`)) {
                    suicides++;
                } else if (row.match(`${playerName} killed`)) {
                    kills++;
                }
            });

            result.push({
                playerName,
                totalKills: kills - (suicides + worldDeaths)
            })

        });

        return result;
    }
}