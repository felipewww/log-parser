import {KillParserUseCase} from "@Domain/UseCases/KillParserUseCase";
import {HttpResponse} from "@Presentation/Contracts/Http";
import {Success} from "@Presentation/Utils/HttpResponse/Success";
import {InternalServerError} from "@Presentation/Utils/HttpResponse/InternalServerError";
import {FullLogEntity} from "@Domain/Entities/FullLogEntity";
import {GameEntity} from "@Domain/Entities/GameEntity";
import {GameKillsEntity} from "@Domain/Entities/GameKillsEntity";

export class KillsParserPresenter {

    public useCase: KillParserUseCase;

    constructor() {
        this.useCase = new KillParserUseCase(
            new FullLogEntity(),
            new GameEntity(),
            new GameKillsEntity()
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
        this.useCase.getResult();
    }
}