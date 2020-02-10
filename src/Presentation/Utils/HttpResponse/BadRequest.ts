import {HttpResponse} from "@Presentation/Contracts/Http";

export class BadRequest extends HttpResponse {
    constructor() {
        super(400);
    }
}