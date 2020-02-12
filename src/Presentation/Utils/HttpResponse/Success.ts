import {HttpResponse} from "@Presentation/Contracts/Http";

export class Success extends HttpResponse {
    constructor(data?: any) {
        super(200);
        if (data) {
            this.data = data;
        }
    }
}