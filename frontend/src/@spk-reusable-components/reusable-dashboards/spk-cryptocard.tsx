import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card'; // Assuming you're using react-bootstrap
import Spkapexcharts from '../reusable-plugins/spk-apexcharts';

interface CryptoCardProps {
    type?: string;
    width?: number | string;
    height?: number | string;
    object?: any;
}

const SpkCryptocard: React.FC<CryptoCardProps> = ({ width, height, object }) => {

    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Body>
                    <div className="d-flex align-items-center gap-2 justify-content-between">
                        <div className="d-flex align-items-start gap-2">
                            <div className="lh-1 avatar avatar-sm p-1 bg-light avatar-rounded">
                                <img src={object.imgSrc} alt={object.name} className="w-auto" />
                            </div>
                            <div>
                                <h5 className="mb-0">
                                    {object.value} <span className="text-muted fw-medium fs-13"> {object.symbol}</span>
                                </h5>
                                <p className="mb-0 text-muted fs-12">{object.name}</p>
                            </div>
                        </div>
                        <div id={`${object.symbol}-marketcap`}>
                            <Spkapexcharts
                                chartOptions={object.chartOptions}
                                chartSeries={object.chartSeries}
                                type={object.type}
                                width={width}
                                height={height}
                            />
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-2 justify-content-between mt-3 bg-light px-2 p-1 rounded-2">
                        <p className="mb-0 fw-medium text-muted py-1">{object.price}</p>
                        <div className={`text-${object.chnageColor}`}>
                            <i className={`ti ti-trending-${object.changeType} me-1 d-inline-flex`}></i>
                            {object.change}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default SpkCryptocard;
