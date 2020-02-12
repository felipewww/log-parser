import {Express,Request, Response} from 'express';
import {ResponseAdapter} from "./ResponseAdapter";
import {GamesParserPresenter} from "@Presentation/Presenters/GamesParserPresenter";
import {KillsParserPresenter} from "@Presentation/Presenters/KillsParserPresenter";

export class Routes {
    constructor(private app: Express) {
    }

    setRoutes() {
        this.app.get('/api/v1/games', (req: Request, res: Response) => {
            new ResponseAdapter( new GamesParserPresenter(req), res )
        });

        this.app.get('/api/v1/game-kills', (req: Request, res: Response) => {
            new ResponseAdapter( new KillsParserPresenter(req), res )
        });

        this.app.get('/api/v1/game-kills/:gameCode', (req: Request, res: Response) => {
            new ResponseAdapter( new KillsParserPresenter(req), res )
        })
    }
}