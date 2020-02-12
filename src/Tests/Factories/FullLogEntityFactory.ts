import {FullLogEntity} from "@Domain/Entities/FullLogEntity";
import {logInLines} from "@Tests/Mocks/FullLogDataMock";
import {GameEntity} from "@Domain/Entities/GameEntity";
import {GameKillsEntity} from "@Domain/Entities/GameKillsEntity";

function makeFullLogAsGameEntity() {
    let fullLogEntityStub = new FullLogEntity();
    jest.spyOn(fullLogEntityStub, 'getLogs').mockReturnValue(logInLines);

    let gameEntityStub = new GameEntity();
    gameEntityStub.parseLogAsGames(fullLogEntityStub)

    let gameKillsEntity = new GameKillsEntity();
    gameKillsEntity.toJSON(gameEntityStub.getGamesKills());

    return {
        fullLogEntityStub,
        gameEntityStub,
        gameKillsEntity
    }
}

export {
    makeFullLogAsGameEntity
}