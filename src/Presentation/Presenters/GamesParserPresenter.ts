import {HttpResponse, IHttpRequest} from "@Presentation/Contracts/Http";
import {Success} from "@Presentation/Utils/HttpResponse/Success";
import {InternalServerError} from "@Presentation/Utils/HttpResponse/InternalServerError";
import {FullLogEntity} from "@Domain/Entities/FullLogEntity";
import {GameEntity} from "@Domain/Entities/GameEntity";
import {GamesParserUseCase} from "@Domain/UseCases/GamesParserUseCase";
import {Presenter} from "@Presentation/Presenters/Presenter";

export class GamesParserPresenter extends Presenter {

    public useCase: GamesParserUseCase;
    private gamesResponse: any;

    constructor(request: IHttpRequest) {
        super(request);
        this.useCase = new GamesParserUseCase(
            new FullLogEntity(),
            new GameEntity()
        )
    }

    async handle(): Promise<HttpResponse> {
        try {
            await this.callUseCase();
            return new Success(this.gamesResponse);
        } catch (e) {
            return new InternalServerError()
        }
    }

    async callUseCase() {
        await this.useCase.init()
        this.gamesResponse = this.useCase.getResult();
    }
}