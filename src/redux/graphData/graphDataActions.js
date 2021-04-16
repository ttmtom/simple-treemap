import Constants from './graphDataConstants';
import {greedyNumPartitioning} from '../../util/greedyNumPartitioning';

export function setGraphData(data, numOfRow) {
    const result = greedyNumPartitioning(data, numOfRow);

    return {
        type: Constants.SET_GRAPH_DATA,
        data: {
            data: result.data,
            maxWidth: result.maxWidth,
            numOfRow,
        },
    };
}
