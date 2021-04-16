import Constants from './graphDataConstants';

export function setGraphData(data, numOfRow) {
    return {
        type: Constants.SET_GRAPH_DATA,
        data: {
            data,
            numOfRow,
        },
    };
}
