import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

const GraphCell = (props) => {
    const {fullWidth, data} = props;

    return (
        <Tooltip
            title={
                <span
                    style={{
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {data.name}
                    <br />
                    {`${data.value * 100}%`}
                </span>
            }
        >
            <div
                style={{
                    width: `${(data.weight / fullWidth) * 100}%`,
                    display: 'inline-block',
                    background: 'red',
                    height: '100%',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                    background: data.value >= 0 ? 'rgb(102, 255, 102)' : 'rgb(255, 51, 51)',
                    userSelect: 'none',
                }}
            >
                <span
                    style={{
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {data.name}
                    <br />
                    {`${data.value * 100}%`}
                </span>
            </div>
        </Tooltip>
    )
};

GraphCell.propTypes = {
    fullWidth: PropTypes.number.isRequired,
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        weight: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    }).isRequired,
}

export default GraphCell;
