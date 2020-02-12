export class LogRowValidator {
    public static matchesGameDataRow(row: string): boolean {
        if (
            row.match('InitGame:')
            || row.match('ShutdownGame:')
            || row.match('----------')
        ) {
            return false;
        }
        return true;
    }

    public static rowType(row: string): 'init'|'end'|'info' {
        if (row.match('InitGame:')) {
            return 'init';
        } else if (row.match('ShutdownGame:')) {
            return 'end';
        } else {
            if (LogRowValidator.matchesGameDataRow(row)) {
                return 'info';
            }
        }
    }

    public static infoType(infoRow: string): 'kill'|'clientConnection' {
        if (infoRow.match('killed')) {
            return 'kill';
        } else if ( infoRow.match('ClientUserinfoChanged') ) {
            return 'clientConnection';
        }
    }
}