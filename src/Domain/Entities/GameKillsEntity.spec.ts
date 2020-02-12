import {GameKillsEntity} from "@Domain/Entities/GameKillsEntity";
import {makeFullLogAsGameEntity} from "@Tests/Factories/FullLogEntityFactory";

let underTest = new GameKillsEntity();
const { gameEntityStub } = makeFullLogAsGameEntity()

describe('GameKillsEntity', () => {
    underTest.toJSON(gameEntityStub.getFilteringKills());

    test('Should fill player names per match correctly', () => {
        expect(underTest.getGames()[0].players).toMatchObject(['Isgalamido'])
        expect(underTest.getGames()[1].players).toMatchObject(['Isgalamido','Dono da Bola','Mocinha'])
    })

    test('Shoudl fill total_kills correctly', () => {
        expect(underTest.getGames()[0].total_kills).toBe(0)
        expect(underTest.getGames()[1].total_kills).toBe(11)
    })
})