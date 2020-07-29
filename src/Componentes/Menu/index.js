import React from 'react';
import Logo from '../../Assets/img/Logo.png';
import './menu.css';
import Button from '../Button';
//import ButtonLink from '../Components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt='Juggflix Logo' />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;
