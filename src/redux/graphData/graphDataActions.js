import Constants from './graphDataConstants';

export function setIsPrivateConnect(bool) {
    return {
        type: Constants.SET_IS_PRIVATE_CONNECT,
        isPrivate: bool,
    }
}

export function setInitData(data) {
    return {
        type: Constants.SET_INIT_DATA,
        data,
    };
}
