import React, { useState } from 'react';

import {ReactComponent as AlmeydaLogo} from './almeydaLogo.svg'
import {ReactComponent as DownloadIcon} from '../icons/download.svg'
import {ReactComponent as GearIcon} from '../icons/gear.svg'

import {ReactComponent as UserIcon} from '../icons/user.svg';
import {ReactComponent as StarIcon} from '../icons/star.svg';
import {ReactComponent as StarIconShadow} from '../icons/star-line.svg';
import {ReactComponent as PortdolioIcon} from '../icons/portfolio.svg';
import {ReactComponent as PortdolioIconShadow} from '../icons/portfolio-line.svg';
import {ReactComponent as HeartIcon} from '../icons/heart.svg';
import {ReactComponent as HeartIconShadow} from '../icons/heart-line.svg';
import {ReactComponent as GithubIcon} from '../icons/hero-icons/github.svg'
import {ReactComponent as FacebookIcon} from '../icons/facebook.svg'


import Button from '../button/Button'
import ButtonCircle from '../button/ButtonCircle';
import DropMenu from '../dropmenu/DropMenu';
import NavphoneItem from './NavphoneItem';

import useMediaQuery from '../../useMediaQuery';
import './Navbar.css';
import ProgressBar from './ProgressBar';


const Navbar = () => {

    // Estados
    const [navbar, setNavbar] = useState(false);
    const [gearIcon, setGearIcon] = useState(false);

    // cambiar el estado del boton settings
    const toggleGearIcon = () => {
        setGearIcon(!gearIcon)
    };

    // cambiar color del nav al scrollear
    const changeBackground = () => {
        window.scrollY > 0 ? setNavbar(true) : setNavbar(false)
    }
    window.addEventListener('scroll', changeBackground)

    // mediaqueries
    const matches = useMediaQuery('(max-width: 1000px)');
    const tablet = useMediaQuery('(max-width: 700px)');

    return (
        <nav className={navbar ? 'nav active' : 'nav'}>
            <div className="nav_content">

                <div className="side_start">
                    <Button
                        disappear="Descargar"
                        visible="CV"
                        endIcon={<DownloadIcon/>}
                        border="rounded"
                    />
                </div>


                <div className={matches ? 'side_middle compact' : 'side_middle'}>

                    {!matches &&
                        <div className="middel_container_start">
                            <a href="#inicio" className="nav_enlace active">Inicio</a>
                            <a href="#sobreMi" className="nav_enlace">Sobre Mí</a>
                            <a href="#servicios" className="nav_enlace">Servicios</a>
                        </div>
                    }
                    <div title='Almeyda Logo' className="almeydaLogoBox">
                        <AlmeydaLogo/>
                    </div>
                    {!matches &&
                        <div className="middel_container_end">
                            <a href="#inicio" className="nav_enlace">Portfolio</a>
                            <a href="#sobreMi" className="nav_enlace">Precios</a>
                            <a href="#servicios" className="nav_enlace">Contacto</a>
                        </div>
                    }
                </div>

                <div className="side_end">
                    {!tablet &&
                        <>
                            <a target='_blank' title='Facebook' rel='noreferrer' href="https://www.facebook.com/anderson.almeydatorres/" draggable={false}>
                            <ButtonCircle
                                icon={<FacebookIcon/>}
                            />
                            </a>
                            <a target='_blank' title='GitHub' rel='noreferrer' href="https://github.com/COMANDO225" draggable={false}>
                                <ButtonCircle
                                    icon={<GithubIcon/>}
                                />
                            </a>
                        </>
                    }
                    <div title='Ajustes' onClick={toggleGearIcon}>
                        <ButtonCircle
                            classes={`icon-rotate${gearIcon ? ' active' : ''}`}
                            icon={<GearIcon/>}
                        />
                    </div>
                    {
                        gearIcon &&
                        <>
                        <DropMenu/>
                        <div className="dropOverlay" onClick={()=> {setGearIcon(false)}}></div>
                        </>
                    }
                </div>
            </div>
            {
                matches &&
                <div className="navphone">
                    <div className="navphone_content">
                        <ProgressBar/>

                        <div className="navphone_items">
                            <NavphoneItem
                                icon={<UserIcon/>}
                                iconShadow={<UserIcon/>}
                                goref='sobreMi'
                                texto='Sobre Mi'
                            />
                            <NavphoneItem
                                icon={<StarIcon/>}
                                iconShadow={<StarIconShadow/>}
                                goref='servicios'
                                texto='Servicios'
                            />
                            <NavphoneItem
                                goref='inicio'
                                texto='Inicio'
                            />
                            <NavphoneItem
                                icon={<PortdolioIcon/>}
                                iconShadow={<PortdolioIconShadow/>}
                                goref='portafolio'
                                texto='Portafolio'
                            />
                            <NavphoneItem
                                iconShadow={<HeartIconShadow/>}
                                icon={<HeartIcon/>}
                                goref='masdemi'
                                texto='Más de mi'
                            />
                        </div>

                        {/* <div className="navphone_separator"></div> */}
                        {
                            gearIcon ?
                            <div className="mostrarDrop" style={{height: '320px'}}>
                                <DropMenu
                                        navphone={true}
                                />
                            </div>
                            :
                            <div className="mostrarDrop" style={{height:'0px'}}>
                                <DropMenu
                                        navphone={true}
                                />
                            </div>
                        }
                    </div>
                </div>

            }
            
        </nav>
    )
}

export default Navbar
