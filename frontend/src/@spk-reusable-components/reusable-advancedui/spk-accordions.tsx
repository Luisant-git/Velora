import React, { useState, Fragment } from 'react';
import { Accordion } from 'react-bootstrap';

interface AccordionItem {
    footer: React.JSX.Element;
    id: string;
    title: string;
    content: React.ReactNode;
    itemClass: any;
    bodyClass: string;
}

interface SpkAccordionsProps {
    items?: AccordionItem[] | any;
    defaultActiveKey?: string;
    flush?: boolean;
    accordionClass?: string;
    Open?: boolean;
    closeAll?: boolean;
    footer?:boolean;
}

const SpkAccordions: React.FC<SpkAccordionsProps> = ({ items, defaultActiveKey, flush = false, accordionClass, closeAll = false ,Open}) => {

    const [activeKey, setActiveKey] = useState<string | null>(
        closeAll ? null : (defaultActiveKey || (items.length > 0 ? items[0].id : null))
    );

    return (
        <Fragment>
            <Accordion className={accordionClass} activeKey={activeKey} flush={flush} onSelect={(k: any) => setActiveKey(k)} alwaysOpen={Open}>
                {items.map((item: AccordionItem, index: number) => (
                    <Accordion.Item eventKey={item.id} className={item.itemClass} key={item.id || `${item.title}-${index}`}>
                        <Accordion.Header>{item.title}</Accordion.Header>
                        <Accordion.Body className={item.bodyClass}>{item.content}</Accordion.Body>

                        {item.footer && <div className="accordion-footer">{item.footer}</div>}

                    </Accordion.Item>
                ))}
            </Accordion>
        </Fragment>
    );
};

export default SpkAccordions;