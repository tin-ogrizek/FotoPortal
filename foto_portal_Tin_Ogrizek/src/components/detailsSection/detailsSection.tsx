import React from 'react';
import '../../styles/detailsSection.css'
import ImageInfo from './imageInfo';
import KeyWords from './keyWords';

const detailsSection: React.FC = () => {
  return (
    <div className="details-main-container">
      
      <div className="image-info-container">
        <ImageInfo label="GALERIJA" value="Stock"/>
        <ImageInfo label="AUTOR" value="Ivan Horvat"/>
        <ImageInfo label="AGENCIJA" value="Smart Code"/>
      </div>

      <div className="description-container">
        <ImageInfo 
          label="OPIS" 
          value="It is a long established fact that a reader will be distracted 
                 by the readable content of a page when looking at its layout. 
                 The point of using Lorem Ipsum is that it has a more-or-less 
                 normal distribution of letters, as opposed to using 'Content here, 
                 content here', making it look like readable English. Many desktop 
                 publishing packages and web page editors now use Lorem Ipsum as their 
                 default model text, and a search for 'lorem ipsum' will uncover many 
                 web sites still in their infancy. Various versions have evolved over 
                 the years, sometimes by accident, sometimes on purpose (injected humour 
                 and the like)."/>
      </div>

      <div className="keywords-container">
        <KeyWords />
      </div>

    </div>
  );
};

export default detailsSection;