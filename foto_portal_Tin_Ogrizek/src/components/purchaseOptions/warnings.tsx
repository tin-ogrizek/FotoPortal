import React from 'react';
import '../../styles/warnings.css'

interface WarningProps {
    title: string;
    text: string;
    className?: string;
}

const Warning: React.FC<WarningProps> = ({ title, text, className }) => {
    return (
        <div className={`warning ${className}`}>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    );
};

export default Warning;