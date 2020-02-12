import {KillParserUseCase} from "@Domain/UseCases/KillParserUseCase";
import {HttpResponse, IHttpRequest} from "@Presentation/Contracts/Http";
import {Success} from "@Presentation/Utils/HttpResponse/Success";
import {InternalServerError} from "@Presentation/Utils/HttpResponse/InternalServerError";
import {FullLogEntity} from "@Domain/Entities/FullLogEntity";
import {GameEntity} from "@Domain/Entities/GameEntity";
import {GameKillsEntity} from "@Domain/Entities/GameKillsEntity";
import {Presenter} from "@Presentation/Presenters/Presenter";

export class KillsParserPresenter extends Presenter {

    public useCase: KillParserUseCase;
    private gamesResponse: any;

    constructor(request: IHttpRequest) {
        super(request);
        this.useCase = new KillParserUseCase(
            new FullLogEntity(),
            new GameEntity(),
            new GameKillsEntity(),
            this.request.params.gameCode
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