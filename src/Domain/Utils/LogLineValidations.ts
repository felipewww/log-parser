export class LogLineValidations {
    public static matchesGameDataLine(line: string) {
        if (
            line.match('InitGame:')
            || line.match('ShutdownGame:')
            || line.match('----------')
        ) {
            return false;
        }
        return true;
    }

    public static lineType(line: string): 'init'|'end'|'info' {
        if (line.match('InitGame:')) {
            return 'init';
        } else if (line.match('ShutdownGame:')) {
            return 'end';
        } else {
            if (LogLineValidations.matchesGameDataLine(line)) {
                return 'info';
            }
        }
    }
}