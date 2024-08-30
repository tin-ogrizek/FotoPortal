import React from 'react';
import exampleImage from '../../assets/cobweb-921039_1920.png';
import '../../styles/imageSection.css'

const imageSection: React.FC = () => {
  return (
    <div className="image-main-container">
      <img src={exampleImage} alt="cobweb image" className="example-image"></img>      
    </div>
  );
};

export default imageSection;