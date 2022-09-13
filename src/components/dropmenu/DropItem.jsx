import React from 'react'
import ButtonCircle from '../button/ButtonCircle'
import {ReactComponent as ChevronIcon} from '../icons/chevron-stroke.svg'

import './DropItem.css';

const DropItem = (props) => {

    const {icon, text, content} = props;

    return (
        <div className="dropItem">
            <div className="dropItem_icon">
                <ButtonCircle 
                    icon={icon}
                    classes='noAction'
                />
                {text}
            </div>
            <div className="dropItem_content">
                {content}
            </div>
        </div>
    )
}

DropItem.defaultProps = {
    text: 'Soy un Item',
    content: <ChevronIcon className="chevrom_medium"/>
}

export default DropItem
