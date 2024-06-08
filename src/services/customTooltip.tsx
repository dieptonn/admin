import React from 'react';
import { TooltipProps } from 'recharts';

const CustomTooltip: React.FC<TooltipProps<string, string>> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const { name, value } = payload[0];
        return (
            <div className="custom-tooltip">
                <p className="label">{`Time: ${label}`}</p>
                <p className="intro">{`${name}: ${value}`}</p>
                <p className="desc">Anything you want can be displayed here.</p>
            </div>
        );
    }
    return null;
};

export default CustomTooltip;
