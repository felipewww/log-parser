import {makeFullLogEntityStub} from "@Tests/Factories/FullLogEntityFactory";
import {GameEntity} from "@Domain/Entities/GameEntity";
import {GameKillsEntity} from "@Domain/Entities/GameKillsEntity";

let fullLogEntityStub = makeFullLogEntityStub();
let gameEntityStub = new GameEntity();
gameEntityStub.parseLogAsGames(fullLogEntityStub)
let underTest = new GameKillsEntity();

describe('GameKillsEntity', () => {
    test('', () => {
        let parsed = underTest.toJSON(gameEntityStub.getGamesKills());
        expect(parsed[0].players).toMatchObject(['Isgalamido'])
        expect(parsed[1].players).toMatchObject(['Isgalamido','Dono da Bola','Mocinha'])
    })
})