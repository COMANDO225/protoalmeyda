import React from 'react'
import {ReactComponent as AlmeydaIcon} from '../icons/almeyda.svg'

const NavphoneItem = (props) => {
    return (
        <a href={`#${props.goref}`} className="navphone_item">
            <div className="navphone_item_icon">
                {props.icon}
                
                <div className="iconShadow">
                    {props.iconShadow}
                </div>
            </div>
            <div className="navphone_item_text">
                {props.texto}
            </div>
        </a>
    )
}

NavphoneItem.defaultProps = {
    goref: '',
    iconShadow:<AlmeydaIcon/>,
    icon: <AlmeydaIcon/>,
    texto: 'texto'
}
export default NavphoneItem
