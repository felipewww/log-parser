import {GameEntity} from "@Domain/Entities/GameEntity";
import {makeFullLogAsGameEntity} from "@Tests/Factories/FullLogEntityFactory";

let underTest = new GameEntity();
const { fullLogEntityStub } = makeFullLogAsGameEntity()

describe('GameEntity', () => {
    test('parseLogAsGames - Should separate a log array (mocked) in 2 pieces of array where each one is a complete game info', () => {
        underTest.parseLogAsGames(fullLogEntityStub)
        expect(underTest.getGames().length).toBe(2);
    })

    test('getGamesKills - Should return filtering by players and kills info', () => {
        expect.assertions(4);

        underTest.parseLogAsGames(fullLogEntityStub)
        expect(underTest.getFilteringKills()[0].killsRows.length).toBe(0);
        expect(underTest.getFilteringKills()[1].killsRows.length).toBe(11);

        expect(underTest.getFilteringKills()[0].clientConnectionsRows.length).toBe(2);
        expect(underTest.getFilteringKills()[1].clientConnectionsRows.length).toBe(5);
    })
})