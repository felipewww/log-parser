import './Main/module-aliases'
import '@Main/config'
import {KillsParserPresenter} from "@Presentation/Presenters/KillsParserPresenter";
import {KillParserUseCase} from "@Domain/UseCases/KillParserUseCase";
import {FullLogEntity} from "@Domain/Entites/FullLogEntity";


let x = new KillsParserPresenter(
    new KillParserUseCase(new FullLogEntity())
).handle()