import React, { useState } from 'react'
import ButtonCircle from '../button/ButtonCircle'
import DropItem from './DropItem'
import {ReactComponent as ArrowLeftIcon} from '../icons/arrow-left.svg'
import {ReactComponent as MaskIcon} from '../icons/mask.svg'
import {ReactComponent as BlurIcon} from '../icons/blur.svg'
import {ReactComponent as PaintBucket} from '../icons/paint-bucket.svg'
import {ReactComponent as PaletteIcon} from '../icons/palette.svg'
import { CSSTransition } from 'react-transition-group'


const DropMenu = ({navphone}) => {

    // Estado para detectar el punto inicial del dropMenu
    const [activeMenu, setActiveMenu] = useState('settings');
    // Estado que detectara y actualizara la altura del menu
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        console.log(height);
        setMenuHeight(height);
    }

    return (
        <div className={`dropMenuWrapper${navphone ? ' dropMenuNav' : ''}`}>
            <div className="dropMenu" style={{ height: menuHeight }}>
                <CSSTransition
                    in={activeMenu === 'settings'}
                    unmountOnExit
                    timeout={500}
                    classNames='menu-settings'
                    onEnter={calcHeight}
                >
                    <div className="dropMenu_container">
                        <div className="dropMenu_title">
                            <div className="dropMenu_title_icon">
                            </div>
                            <div className="dropMenu_title_text">Ajustes</div>
                        </div>
                        <div className="dropMenu_body">
                            <DropItem
                                icon={<MaskIcon/>}
                                text='Modo Oscuro'
                            />
                            <DropItem
                                icon={<BlurIcon/>}
                                text='Glass'
                            />
                            <div onClick={()=> {setActiveMenu('temas')}}>
                                <DropItem
                                    icon={<PaintBucket/>}
                                    text='Temas'
                                />
                            </div>
                            <DropItem
                                icon={<PaletteIcon/>}
                                text='Enfasis color'
                            />
                        </div>
                    </div>
                </CSSTransition>

                {/* segundo menu == temas */}

                <CSSTransition
                    in={activeMenu === 'temas'} 
                    unmountOnExit 
                    timeout={500}
                    classNames='menu-temas'
                    onEnter={calcHeight}
                >
                    <div className="dropMenu_container">
                        
                        <div className="dropMenu_title">
                            <div className="dropMenu_title_icon">
                                <div onClick={() => {setActiveMenu('settings')}} style={{width:'40px'}}>
                                    <ButtonCircle 
                                        icon={<ArrowLeftIcon/>}
                                        classes='nobackground'
                                    />
                                </div>
                            </div>
                            <div className="dropMenu_title_text">Temas</div>
                        </div>
                        <div className="dropMenu_body">
                            <DropItem
                                icon={<MaskIcon/>}
                                text='Modo Oscuro'
                            />
                            <DropItem
                                icon={<BlurIcon/>}
                                text='Glass'
                            />
                            <div>
                                <DropItem
                                    icon={<PaintBucket/>}
                                    text='Temas'
                                />
                            </div>
                            <DropItem
                                icon={<PaletteIcon/>}
                                text='Enfasis color'
                            />
                            <DropItem
                                icon={<PaletteIcon/>}
                                text='Enfasis color'
                            />
                            <DropItem
                                icon={<PaletteIcon/>}
                                text='Enfasis color'
                            />
                        </div>
                    </div>
                </CSSTransition>
            </div>
            <div className="dropMenu_body_footer">
                Almeyda © 2021
            </div>
        </div>
    )
}

export default DropMenu
