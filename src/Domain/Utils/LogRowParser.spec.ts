import 'colors';
var colors = require('colors');
colors.enable();
import {LogRowParser} from "@Domain/Utils/LogRowParser";
import {makeFullLogAsGameEntity} from "@Tests/Factories/FullLogEntityFactory";

const { gameEntityStub } = makeFullLogAsGameEntity()

describe('LogRowParser', () => {
    test('regexp to find player name', () => {
        const playerName = LogRowParser.connectionUsername('20:38 ClientUserinfoChanged: 2 n\\Isgalamido\\t\\0\\model\\uriel/zael\\hmodel\\uriel/zael\\g_redteam\\\\g_blueteam\\\\c1\\5\\c2\\5\\hc\\100\\w\\0\\l\\0\\tt\\0\\tl\\0')
        expect(playerName).toBe('Isgalamido');

        const playerName2 = LogRowParser.connectionUsername('ClientUserinfoChanged: 7 n\\Mal\\t\\0\\model\\sarge\\hmodel\\sarge\\g_redteam\\\\g_blueteam\\\\c1\\4\\c2\\5\\hc\\100\\w\\0\\l\\0\\tt\\0\\tl\\0')
        expect(playerName2).toBe('Mal');
    })

    test('totalKillsPerPlayer', () => {
        gameEntityStub.getGamesKills()[1].killsRows
        let res = LogRowParser.totalKillsPerPlayer(
            ['Isgalamido','Dono da Bola','Mocinha'],
            gameEntityStub.getGamesKills()[1].killsRows
        )
    })
})