import {Response} from "express";
import {HttpResponse} from "@Presentation/Contracts/Http";
import {Presenter} from "@Presentation/Presenters/Presenter";

export class ResponseAdapter {
    constructor(private fn: Presenter, response: Response) {
        fn.handle()
            .then((result: HttpResponse) => {
                let jsonResponse: any = {};

                response.status(result.getStatusCode());

                if (result.getStatusCode() === 200) {
                    jsonResponse.data = result.data;
                } else {
                    jsonResponse.error = result.error;
                }

                response.json(jsonResponse);
            })
            .catch((err: any) => {
                response.status(500);
                response.json({message: 'Unexpected error'})
            })
    }

}