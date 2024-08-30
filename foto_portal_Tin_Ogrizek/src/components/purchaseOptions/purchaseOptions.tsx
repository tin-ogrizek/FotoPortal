import React from 'react';
import '../../styles/purchaseOptions.css'
import Button from './button'
import Pricing from './pricing';
import Warning from './warnings';
import { faDownload, faShoppingCart, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const purchaseOptions: React.FC = () => {
  return (
    <div className="purchase-main-container">

      <div className="options-container">
        <div className="info-text">
          Kako mogu koristiti ovaj sadržaj?
          <FontAwesomeIcon icon={faInfoCircle} className="info-icon"/>
        </div>
        <Pricing />
        <label className="signature-input">
          <input type="checkbox"/>
          Preuzmi s potpisom autora
        </label>
      </div>

      <div className="buttons-container">
        <div className="grey-buttons-container">
          <Button 
            icon={faDownload}
            label="PREUZMI SADRŽAJ"
            className="grey-button"
            iconClassName="download-icon"
          />
          <div className="small-button-container">
            <Button 
              label="Pošalji u sustav"
              className="small-grey-button"
            />
            <Button 
              label="Pošalji u CMS"
              className="small-grey-button"
            />
          </div>
        </div>

        <div className="other-buttons-container">
          <Button 
              icon={faShoppingCart}
              label="DODAJ U KOŠARICU"
              className="cart-button"
              iconClassName="cart-icon"
            />
          <Button 
            icon={faDownload}
            label="Preuzmi pregledni primjerak"
            className="white-button"
            iconClassName="download-icon"
          />
       </div>
      </div>

      <hr className="separating-line" />

      <div className="warning-container">
        <Warning 
          className='warning-small' 
          title="POSEBNE NAPOMENE"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
        />
        <Warning 
          className='warning-big' 
          title="POSEBNE NAPOMENE"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged."
        />
        <Warning 
          className='warning-small' 
          title="POSEBNE NAPOMENE"
          text="It has survived not only five centuries, but also the leap into electronic typesetting."
        />
      </div>
    </div>
  );
};

export default purchaseOptions;