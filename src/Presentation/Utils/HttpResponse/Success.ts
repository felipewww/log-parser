import {HttpResponse} from "@Presentation/Contracts/Http";

export class Success extends HttpResponse {
    constructor() {
        super(200);
    }
}