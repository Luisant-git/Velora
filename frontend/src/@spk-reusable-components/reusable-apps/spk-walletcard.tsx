import React from 'react';
import { Card } from 'react-bootstrap';
import SpkButton from '../reusable-uielements/spk-button';

interface SpkWalletCardProps {
  title?: string;
  name?: string;
  price1?: string;
  priceInUSD?: string;
  data?: string;
  img?: string;
}

const SpkWalletCard: React.FC<SpkWalletCardProps> = ({ title, name, price1, priceInUSD, data, img }) => {
  return (
    <Card className="custom-card">
      <div className="card-header">
        <div className="card-title">{title}</div>
      </div>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between gap-2">
          <div className="d-flex align-items-center gap-2">
            <div className="lh-1">
              <span className="avatar avatar-rounded">
                <img src={img} alt={name} />
              </span>
            </div>
            <div>
              <span className="d-block text-muted fs-12 fw-normal">{name}</span>
              <span className="fw-medium fs-15">{price1}</span>
            </div>
          </div>
          <div>
            <span className="fw-medium">{priceInUSD}</span>
            <span className="d-block text-muted fs-12 fw-normal">{data}</span>
          </div>
        </div>
      </Card.Body>
      <div className="card-footer">
        <div className="d-flex gap-2 flex-wrap">
          <SpkButton Buttonvariant="primary-light" Customclass="btn-w-lg flex-fill">Deposit</SpkButton>
          <SpkButton Buttonvariant="primary1-light" Customclass="btn-w-lg flex-fill">Withdraw</SpkButton>
        </div>
      </div>
    </Card>
  );
};

export default SpkWalletCard;
