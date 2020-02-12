import {LogLineValidations} from "@Domain/Utils/LogLineValidations";

describe('matchesGameDataLine', () => {
    test('Should return true because matches a game info line', () => {
        let matchesGameLine = LogLineValidations.matchesGameDataLine(' FAKE ClientUserinfoChanged: 2')
        expect(matchesGameLine).toBeTruthy();
    })

    test('Should return false because does not match a game info line', () => {
        let matchesGameLine = LogLineValidations.matchesGameDataLine('20:37 ------------------------------------------------------------')
        expect(matchesGameLine).toBeFalsy();
    })
});

describe('lineType', () => {
    test('Should match a GAMESTART line', () => {
        let result = LogLineValidations.lineType('12:13 InitGame: \\sv_floodProtect\\1\\sv_maxPing\\0\\sv_minPing\\0\\sv_maxRate\\10000\\sv_minRate\\0\\sv_hostname\\Code Miner ')
        expect(result).toBe('init');
    })

    test('Should match a GAMEEND line', () => {
        let result = LogLineValidations.lineType('54:21 ShutdownGame:')
        expect(result).toBe('end');
    })

    test('Should match a GAMEINFO line', () => {
        let result = LogLineValidations.lineType('Some info that represents a info line')
        expect(result).toBe('info');
    })

    test('Should ingore line because it is\'nt represents nothing' , () => {
        let result = LogLineValidations.lineType(' DIVIDR LINE ------------------------------------ \-asdasdas   ')
        expect(result).toBeUndefined();
    })
})