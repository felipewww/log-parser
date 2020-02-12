import {FullLogEntity} from "@Domain/Entities/FullLogEntity";
import {logInLines} from "@Tests/Mocks/FullLogDataMock";

function makeFullLogEntityStub() {
    let fullLogEntityStub = new FullLogEntity();
    jest.spyOn(fullLogEntityStub, 'getLogs').mockReturnValue(logInLines);

    return fullLogEntityStub;
}

export {
    makeFullLogEntityStub
}