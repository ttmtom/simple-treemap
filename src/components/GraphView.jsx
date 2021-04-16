import React from 'react';
import GraphWrapper from './GraphWrapper';

const GraphView = () => {
    return (
        <div
            style={{
                fontFamily: 'roboto',
            }}
        >
            Result
            <div
                style={{
                    margin: '5px',
                    padding: '10px',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderRadius: '5px',
                    height: '650px',
                }}
            >
                <GraphWrapper />
            </div>
        </div>
    );
};

export default GraphView;
