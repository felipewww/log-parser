import './Main/module-aliases'
import '@Main/config'
import {KillsParserPresenter} from "@Presentation/Presenters/KillsParserPresenter";
import {KillParserUseCase} from "@Domain/UseCases/KillParserUseCase";
import {FullLogEntity} from "@Domain/Entites/FullLogEntity";
import {GameEntity} from "@Domain/Entites/GameEntity";


let x = new KillsParserPresenter(
    new KillParserUseCase(
        new FullLogEntity(),
        new GameEntity()
    )
).handle();