import {HttpResponse} from "@Presentation/Contracts/Http";

export class InternalServerError extends HttpResponse {
    constructor() {
        super(500);
    }
}