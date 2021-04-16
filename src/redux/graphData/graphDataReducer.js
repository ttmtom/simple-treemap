import Constants from './graphDataConstants';

const INITIAL_STATE = {
    numOfRow: 0,
    data: [],
    maxWidth: 0,
};

function graphDataReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Constants.SET_GRAPH_DATA: {
            return {
                ...state,
                ...action.data,
            };
        }
        default: {
            return state;
        }
    }
}

export default graphDataReducer;
