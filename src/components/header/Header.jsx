import React from 'react'
// import BackgroundAnimation from '../BackgroundAnimation';
import AndersonSvg from '../bgAnderson/AndersonSvg';
import Button from '../button/Button'
import {ReactComponent as ChevronIcon} from '../icons/chevron.svg'
import AlmeydaIcon from '../icons/hero-icons/AlmeydaIcon';
// import {ReactComponent as Love} from '../icons/hero-icons/love.svg'
import {ReactComponent as Html5} from '../icons/hero-icons/html5.svg'
import {ReactComponent as Css3} from '../icons/hero-icons/css.svg'
import {ReactComponent as Js} from '../icons/hero-icons/javascript.svg'
import {ReactComponent as Node} from '../icons/hero-icons/nodejs.svg'
import {ReactComponent as ReactIcon} from '../icons/hero-icons/react.svg'
import {ReactComponent as Flutter} from '../icons/hero-icons/flutter.svg'
import {ReactComponent as Git} from '../icons/hero-icons/git.svg'
import {ReactComponent as Vite} from '../icons/hero-icons/vite.svg'
import {ReactComponent as NextJs} from '../icons/hero-icons/nextjs.svg'
import {ReactComponent as NodeIcon} from '../icons/hero-icons/node.svg'
import {ReactComponent as Bootstrap} from '../icons/hero-icons/bootstrap.svg'
import {ReactComponent as Bulma} from '../icons/hero-icons/bulma.svg'

import useMediaQuery from '../../useMediaQuery';
import ReactAnimated from '../icons/hero-icons/ReactAnimated';
import './Header.css';
import Tailwind from '../icons/hero-icons/Tailwind';


const Header = () => {

    const muestraLogo = useMediaQuery('(max-width: 1000px)');

    return (
        <header id="inicio">
            {
                muestraLogo &&
                <div className="heroAnimated_icon">
                        <ReactAnimated/>
                </div>
            }
            <div className="header_hero">
                <div className="header_content">
                    <div className="text__header_content">
                        <h1 className="first_text">Hola Mundo, mi nombre es</h1>
                        <div className="main_text_content">
                            <h1 className="main_text">Anderson <span className="primary-color">Almeyda</span></h1>
                            <h1 className="main_text animate_text"><span className="primary-color">Front end</span> Developer</h1>
                        </div>
                        <p className="parraf_text">
                            Aspiro a ser un <span className="primary-color"> Full-Stack Developer</span>. Te doy la bienvenida a mi pagina en donde te mostraré
                            parte de mis habilidades.
                        </p>
                        <div className="btn_header">
                            <Button
                                visible="Empecemos"
                                endIcon={<ChevronIcon/>}
                                size="default"
                                hoverIconRotate="IconRotate"
                            />
                        </div>
                    </div>
                </div>
                <div className="bgAnimation_container">
                    <div title="HTML5" className="componente html5">
                        <Html5/>
                    </div>
                    <div title="CSS3" className="componente css">
                        <Css3/>
                    </div>
                    <div title="Javascript" className="componente javascript">
                        <Js/>
                    </div>
                    <div title="Node JS" className="componente nodejs">
                        <Node/>
                    </div>
                    <div title="React JS" className="componente reactjs">
                        <ReactIcon/>
                    </div>
                    <div title="Flutter" className="componente flutter">
                        <Flutter/>
                    </div>
                    <div title="Git" className="componente git">
                        <Git/>
                    </div>
                    <AndersonSvg/>
                    <div className="mainIcon_container">
                        <div className="mainIcon">
                            <AlmeydaIcon/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_footer">
                <div className="construido_con">
                    <span className="fz-13 primary-color">Built with:</span>
                    <div className="constructores">
                        <div title='React Js' className="built_icon">
                            <ReactIcon/>
                        </div>
                        <div title='Vite Js' className="built_icon">
                            <Vite/>
                        </div>
                        <div title='Node Js' className="built_icon">
                            <NodeIcon/>
                        </div>
                        <div title='Next Js' className="built_icon">
                            <NextJs/>
                        </div>
                    </div>
                </div>
                <div className="otherDiv">
                <span className="fz-13 primary-color">No CSS frameworks</span>
                    <div className="constructores">
                        <div title='Bootstrap' className="built_icon end">
                            <Bootstrap/>
                        </div>
                        <div title='Tailwind css' className="built_icon end">
                            <Tailwind/>
                        </div>
                        <div title='Bulma css' className="built_icon end">
                            <Bulma/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <BackgroundAnimation/> */}

        </header>
    )
}

export default Header
