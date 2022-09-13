import React from 'react'
import {ReactComponent as ThunderIcon} from '../icons/thunder.svg';
import './ButtonCircle.css'

const ButtonCircle = (props) => {

    const {icon, classes} = props;

    return (
        <button className={`btnCircle ${classes}`} draggable={false}>
            <div className="btnCircle_Content">
                <div className="btnCircle_icon">
                    {icon}
                </div>
            </div>
        </button>
    )
}

ButtonCircle.defaultProps = {
    rotate: null,
    icon: <ThunderIcon/>
}

export default ButtonCircle
