import {GameEntity} from "@Domain/Entites/GameEntity";
import {FullLogEntity} from "@Domain/Entites/FullLogEntity";
import {logInLines} from "@Tests/Mocks/FullLogDataMock";

let underTest = new GameEntity();
let fullLogEntityStub = new FullLogEntity();

describe('GameEntity', () => {
    test('parseLogAsGames', () => {
        jest.spyOn(fullLogEntityStub, 'getLogs').mockReturnValueOnce(logInLines);

        underTest.parseLogAsGames(fullLogEntityStub)
        expect(underTest.getGames().length).toBe(2);
    })
})