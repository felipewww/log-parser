import {GamesParserPresenter} from "@Presentation/Presenters/GamesParserPresenter";
import {InternalServerError} from "@Presentation/Utils/HttpResponse/InternalServerError";

let underTest = new GamesParserPresenter({body: {}, params: {}});

describe('GamesParserPresenter', () => {
    test('should return 500 if something goes wrong while get log data', async () => {
        jest.spyOn(underTest, 'callUseCase').mockImplementation(async() => {
            return new Promise((resolve, reject) => {
                reject();
            })
        });

        let handle = await underTest.handle();
        expect(handle).toMatchObject(new InternalServerError())
        expect(handle.getStatusCode()).toBe(500)
    })
});