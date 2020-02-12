import {HttpResponse} from "@Presentation/Contracts/Http";
import {Success} from "@Presentation/Utils/HttpResponse/Success";
import {InternalServerError} from "@Presentation/Utils/HttpResponse/InternalServerError";
import {FullLogEntity} from "@Domain/Entities/FullLogEntity";
import {GameEntity} from "@Domain/Entities/GameEntity";
import {GamesParserUseCase} from "@Domain/UseCases/GamesParserUseCase";

export class GamesParserPresenter {

    public useCase: GamesParserUseCase;

    constructor() {
        this.useCase = new GamesParserUseCase(
            new FullLogEntity(),
            new GameEntity()
        )
    }

    async handle(): Promise<HttpResponse> {
        try {
            await this.callUseCase();
            return new Success();
        } catch (e) {
            return new InternalServerError()
        }
    }

    async callUseCase() {
        await this.useCase.init()
        const games = this.useCase.getResult();
        console.log(games);
    }
}