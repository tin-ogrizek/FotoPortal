import React from 'react';
import ImageSection from './imageSection/imageSection';
import DetailsSection from './detailsSection/detailsSection';
import PurchaseOptions from './purchaseOptions/purchaseOptions';
import '../styles/imageDetailsPage.css'

const ImageDetailPage: React.FC = () => {
  return (
    <div className="main-container">
      <ImageSection />
      <PurchaseOptions />
      <DetailsSection />
    </div>
  );
};

export default ImageDetailPage;
