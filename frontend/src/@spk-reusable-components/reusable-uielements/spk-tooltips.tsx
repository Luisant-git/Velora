import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

interface SpkTooltipsProps {
    title: string;
    id?: string;
    children: any;
    tooltipClass?: string;
    trigger?: any
    placement?: 'top' | 'bottom' | 'left' | 'right';
}

const SpkTooltips: React.FC<SpkTooltipsProps> = ({ title, id, children, placement, tooltipClass }) => {
    return (
        <OverlayTrigger placement={placement} delay={{ show: 250, hide: 400 }} overlay={<Tooltip id={id} className={tooltipClass}>{title}</Tooltip>}>
            {children}
        </OverlayTrigger>
    );
}

export default SpkTooltips;
