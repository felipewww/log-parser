import {HttpResponse} from "@Presentation/Contracts/Http";

export class NotFound extends HttpResponse {
    statusCode: 404;
}