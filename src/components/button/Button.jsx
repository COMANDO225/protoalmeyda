import React from 'react';
import './Button.css';


const Button = (props) => {

    const {border, size, hoverIconRotate} = props;

    return (
        <button className={`smtButton ${border} ${size} ${hoverIconRotate}`}>
            <div className="smtButton_content">
                <div className="textButton_content">
                    <div className="text_disappear_small">
                        {props.disappear}
                    </div>
                    <div className="text_visible">
                        {props.visible}
                    </div>
                </div>
                <div className="iconButton">
                    {props.endIcon}
                </div>
            </div>
        </button>
    )
}

Button.defaultProps = {
    disappear: '',
    visible: 'TEXTO',
    endIcon: null,
}



export default Button
