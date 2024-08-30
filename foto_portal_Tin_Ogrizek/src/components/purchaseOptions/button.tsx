import React from 'react';
import '../../styles/button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps {
    label: string;
    className?: string;
    icon?: IconProp;
    iconClassName?: string;
}

const Button: React.FC<ButtonProps> = ({ label, className, icon, iconClassName }) => {
    return (
        <button
            className={`button ${className}`}
        >
            {icon && <FontAwesomeIcon icon={icon} className={`button-icon ${iconClassName}`}/>}
            {label}
        </button>
    );
};

export default Button;