import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import GraphRow from './GraphRow';

const GraphWrapper = () => {
    const {
        maxWidth,
        data,
    } = useSelector(store => store.graphData);

    const emptyDataGraph = useMemo(() => (
        <div>
            Pending for submission
        </div>
    ), []);


    return (
        <div
            style={{
                background: 'white',
                width: '100%',
                height: '100%',
            }}
        >
            {
                data.length === 0 ? emptyDataGraph : (
                    data.map((row, idx) => (
                        <GraphRow
                            key={`tree-row-${idx}`}
                            rowNum={idx}
                            rowData={row.data}
                            maxWidth={maxWidth}
                            height={650 / data.length}
                        />
                    ))
                )
            }
        </div>
    )
};

export default GraphWrapper;
