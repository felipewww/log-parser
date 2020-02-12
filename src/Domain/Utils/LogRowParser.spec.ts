import 'colors';
var colors = require('colors');
colors.enable();
import {LogRowParser} from "@Domain/Utils/LogRowParser";

describe('LogRowParser', () => {
    test('regexp', () => {
        const playerName = LogRowParser.connectionUsername('20:38 ClientUserinfoChanged: 2 n\/Isgalamido\/t\/0\/model\/uriel/zael\/hmodel\/uriel/zael\/g_redteam\/\/g_blueteam\/\/c1\/5\/c2\/5\/hc\/100\/w\/0\/l\/0\/tt\/0\/tl\/0')
        expect(playerName).toBe('Isgalamido');
    })
})