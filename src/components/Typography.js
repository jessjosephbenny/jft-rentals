import React from 'react';

const Typography = ({ level, lineposition, text, textColor = 'black', lineColor = 'yellow', underlineColor = 'blue', className = '' }) => {

    return (
        <div className={`flex items-center ${className}`}>

            {lineposition === 'left' && (
                <span
                    className="inline-block"
                    style={{
                        backgroundColor: lineColor,
                        width: '8px',   // Width of the rectangle
                        height: '100%', // Full height for vertical rectangle
                        marginRight: '8px',
                    }}
                />
            )}

            <h1 className="font-bold" style={{color:textColor}}>{text}</h1>

            {lineposition === 'right' && (
                <span
                    className="inline-block"
                    style={{
                        backgroundColor: lineColor,
                        width: '8px',   // Width of the rectangle
                        height: '100%', // Full height for vertical rectangle
                        marginLeft: '8px',
                    }}
                />
            )}
        </div>
    );
};

export default Typography;
