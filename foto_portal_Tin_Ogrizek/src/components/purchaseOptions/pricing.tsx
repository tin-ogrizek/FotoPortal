import React from 'react';
import '../../styles/pricing.css'

interface ImageInfo{
    size: "LARGE" | "SMALL";
    label: string;
    dimensions: string;
    price: number;
}

const Pricing: React.FC = () => {
    const options: ImageInfo[] = [
        { size: "LARGE", label: "Print", dimensions: "2667x4000", price: 170.00 },
        { size: "SMALL", label: "Web", dimensions: "1072x1600", price: 130.00 },
    ];
    
    return (
        <div className="pricing-container">
            <div className="image-name">IMAGE 001</div>
                {options.map(option => (
                <div className="image-price">
                    <label key={option.size} className="label-container">
                        <div className="input-label-container">
                            <input 
                                type="radio"
                                name="imageSize"
                                value={option.size}
                            />
                            <div className="info-container">
                                {option.size == "LARGE" ? "LARGE" : "SMALL"}
                                <div className="dimensions">
                                    {option.label} ({option.dimensions})
                                </div>
                            </div>
                        </div>
                        <div className="price-container">
                            {option.price.toFixed(2)} KN
                        </div>
                    </label>
                </div>
                ))}
        </div>
    );
};

export default Pricing;