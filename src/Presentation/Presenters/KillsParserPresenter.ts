import {KillParserUseCase} from "@Domain/UseCases/KillParserUseCase";
import {HttpResponse} from "@Presentation/Contracts/Http";
import {Success} from "@Presentation/Utils/HttpResponse/Success";
import {InternalServerError} from "@Presentation/Utils/HttpResponse/InternalServerError";

export class KillsParserPresenter {

    constructor(
        private useCase: KillParserUseCase
    ) {
    }

    async handle(): Promise<HttpResponse> {
        try {
            await this.useCase.getFullLogEntity();
            return new Success();
        } catch (e) {
            return new InternalServerError()
        }
    }
}