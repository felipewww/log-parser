import './Main/module-aliases'
import '@Main/config'
import {KillsParserPresenter} from "@Presentation/Presenters/KillsParserPresenter";
import {GamesParserPresenter} from "@Presentation/Presenters/GamesParserPresenter";


// let x = new KillsParserPresenter().handle();
let y = new GamesParserPresenter().handle();