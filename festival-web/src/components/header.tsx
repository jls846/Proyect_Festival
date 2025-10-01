import React from "react";
import '../sass/_App.scss';

const Header: React.FC = () => {

    return <header className="header">
        <div className="contenedor contenido-header">
            <h1>Techno & EDM Festival</h1>

            <nav className="navegacion-principal">
                <a href="#lineup">Line Up</a>
                <a href="#galeria">Galeria</a>
                <a href="#boletos">Boletos</a>
            </nav>
        </div>
    </header>
};

export default Header;
