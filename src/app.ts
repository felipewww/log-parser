import './Main/module-aliases'
import '@Main/config'
import {KillsParserPresenter} from "@Presentation/Presenters/KillsParserPresenter";
import {KillParserUseCase} from "@Domain/UseCases/KillParserUseCase";
import {FullLogEntity} from "@Domain/Entities/FullLogEntity";
import {GameEntity} from "@Domain/Entities/GameEntity";


let x = new KillsParserPresenter(
    new KillParserUseCase(
        new FullLogEntity(),
        new GameEntity()
    )
).handle();