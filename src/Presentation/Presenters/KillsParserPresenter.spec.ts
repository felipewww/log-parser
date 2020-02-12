import {KillsParserPresenter} from "@Presentation/Presenters/KillsParserPresenter";
import {KillParserUseCase} from "@Domain/UseCases/KillParserUseCase";
import {FullLogEntity} from "@Domain/Entities/FullLogEntity";
import {InternalServerError} from "@Presentation/Utils/HttpResponse/InternalServerError";
import {GameEntity} from "@Domain/Entities/GameEntity";

function makeKillParserUseCase() {
    return new KillParserUseCase(
        new FullLogEntity(),
        new GameEntity()
    );
}

function makeKillsParserPresenter(killParserUseCaseStub: KillParserUseCase) {
    return new KillsParserPresenter(killParserUseCaseStub);
}

let killParserUseCaseStub = makeKillParserUseCase();
let underTest = makeKillsParserPresenter(killParserUseCaseStub)

describe('KillsParserPresenter', () => {
    test('should return 500 if something goes wrong while get log data', async () => {
        jest.spyOn(killParserUseCaseStub, 'getFullLogEntity').mockImplementation(async() => {
            return new Promise((resolve, reject) => {
                reject();
            })
        });

        let handle = await underTest.handle();
        expect(handle).toMatchObject(new InternalServerError())
        expect(handle.getStatusCode()).toBe(500)
    })
});