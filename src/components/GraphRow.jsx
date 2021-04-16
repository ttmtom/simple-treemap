import React from 'react';
import PropTypes from 'prop-types';
import GraphCell from './GraphCell';

const GraphRow = (props) => {
    const {rowNum, rowData, maxWidth, height} = props;

    return (
        <div
            style={{
                height: `${height}px`,
                textAlign: 'left',
            }}
        >
            {
                rowData.map((data, idx) => (
                    <GraphCell
                        key={`data-cell-${rowNum}-${idx}`}
                        fullWidth={maxWidth}
                        data={data}
                    />
                ))
            }
        </div>
    )
};

GraphRow.propTypes = {
    rowNum: PropTypes.number.isRequired,
    rowData: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        weight: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    })).isRequired,
    height: PropTypes.number.isRequired,
    maxWidth: PropTypes.number.isRequired,
};

export default GraphRow;
