import {HttpResponse, IHttpRequest} from "@Presentation/Contracts/Http";

export abstract class Presenter {
    constructor(protected request: IHttpRequest) {

    }

    abstract async handle(): Promise<HttpResponse>;
}