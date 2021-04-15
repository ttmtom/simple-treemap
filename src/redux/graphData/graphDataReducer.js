import Constants from './graphDataConstants';

const INITIAL_STATE = {
    init: {
        isPrivateConnect: false,
        loggedIn: false,
        userIp: '-',
    }
};

function commonReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Constants.SET_INIT_DATA: {
            return {
                ...state,
                init: action.data,
            };
        }
        case Constants.SET_IS_PRIVATE_CONNECT: {
            return {
                ...state,
                init: {
                    ...state.init,
                    isPrivateConnect: action.isPrivate,
                },
            };
        }
        default: {
            return state;
        }
    }
}

export default commonReducer;
