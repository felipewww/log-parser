export interface IHttpRequest {
    body?: any;
    params?: any
}

export abstract class HttpResponse {
    protected error?: Error;
    protected data?: any;

    constructor(
        protected statusCode: 200|400|404|500
    ) {

    }

    getStatusCode() {
        return this.statusCode;
    }
}