export class LogRowParser {
    public static connectionUsername(row: string) {
        return row.match(/(?<=n\/)(.*?)(?=\/t\/0\/model)/g)[0];
    }
}