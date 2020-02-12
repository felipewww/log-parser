import {LogRowValidator} from "@Domain/Utils/LogRowValidator";

describe('matchesGameDataRow', () => {
    test('Should return true because matches a game info row', () => {
        let matchesGameRow = LogRowValidator.matchesGameDataRow(' FAKE ClientUserinfoChanged: 2')
        expect(matchesGameRow).toBeTruthy();
    })

    test('Should return false because does not match a game info row', () => {
        let matchesGameRow = LogRowValidator.matchesGameDataRow('20:37 ------------------------------------------------------------')
        expect(matchesGameRow).toBeFalsy();
    })
});

describe('rowType', () => {
    test('Should match a GAMESTART row', () => {
        let result = LogRowValidator.rowType('12:13 InitGame: \\sv_floodProtect\\1\\sv_maxPing\\0\\sv_minPing\\0\\sv_maxRate\\10000\\sv_minRate\\0\\sv_hostname\\Code Miner ')
        expect(result).toBe('init');
    })

    test('Should match a GAMEEND row', () => {
        let result = LogRowValidator.rowType('54:21 ShutdownGame:')
        expect(result).toBe('end');
    })

    test('Should match a GAMEINFO row', () => {
        let result = LogRowValidator.rowType('Some info that represents a info row')
        expect(result).toBe('info');
    })

    test('Should ingore row because it is\'nt represents nothing' , () => {
        let result = LogRowValidator.rowType(' DIVIDR LINE ------------------------------------ \-asdasdas   ')
        expect(result).toBeUndefined();
    })
})

describe('Should classify correct kind of game info row', () => {
    expect(
        LogRowValidator.infoType('21:42 Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT')
    ).toBe('kill');

    expect(
        LogRowValidator.infoType('21:17 ClientUserinfoChanged: 2 n\/Isgalamido\/t\/0\/model\/uriel/zael\/hmodel\/uriel/zael\/g_redteam\/\/g_blueteam\/\/c1\/5\/c2\/5\/hc\/100\/w\/0\/l\/0\/tt\/0\/tl\/0')
    ).toBe('clientConnection');
})