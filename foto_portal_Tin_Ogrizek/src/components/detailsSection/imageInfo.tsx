import React from 'react';
import '../../styles/imageInfo.css'

interface InfoProps {
    label: string;
    value: string;
}

const ImageInfo: React.FC<InfoProps> = ({ label, value }) => {
    return (
        <div className="info-item">
            <h4>{label}</h4>
            <p>{value}</p>
        </div>
    );
};

export default ImageInfo;