import {FullLogEntity} from "@Domain/Entites/FullLogEntity";
import {GameLogRepository} from "@Data/Repositories/GameLogRepository";

let underTest: FullLogEntity = new FullLogEntity();
let gameLogRepository: GameLogRepository = new GameLogRepository();

describe('FullLogEntity', () => {
    test('getSourceData', async () => {
        jest.spyOn(gameLogRepository, 'getFullLog').mockResolvedValueOnce(
            ['log item 1', 'log item 2']
        );

        await underTest.getSourceData(gameLogRepository);

        expect(underTest.getLogs()).toMatchObject(['log item 1', 'log item 2']);
    })
})