import {GameEntity} from "@Domain/Entities/GameEntity";
import {FullLogEntity} from "@Domain/Entities/FullLogEntity";
import {logInLines} from "@Tests/Mocks/FullLogDataMock";

let underTest = new GameEntity();
let fullLogEntityStub = new FullLogEntity();

describe('GameEntity', () => {
    test('parseLogAsGames - Should separate a log array (mocked) in 2 pieces of array where each one is a complete game info', () => {
        jest.spyOn(fullLogEntityStub, 'getLogs').mockReturnValueOnce(logInLines);

        underTest.parseLogAsGames(fullLogEntityStub)
        expect(underTest.getGames().length).toBe(2);
    })

    test('getGamesKills - Should return games with only kills info', () => {
        jest.spyOn(fullLogEntityStub, 'getLogs').mockReturnValueOnce(logInLines);

        expect.assertions(2);

        underTest.parseLogAsGames(fullLogEntityStub)
        expect(underTest.getGamesKills()[0].killsRows.length).toBe(0);
        expect(underTest.getGamesKills()[1].killsRows.length).toBe(11);
    })
})