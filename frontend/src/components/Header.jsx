import Navbar from "./Navbar";
import Logo from "../assets/img/logo2.png";


export default function Header() {
    return (
        <header className="header">
            <div className="brand">
                <img src={Logo} alt="Logo" className="logo" />
                <div className="empresa">
                    <h1 className="titulo">Casa de materiales Serrano</h1>
                    <p className="slogan">La calidad que sostiene tus ideas</p>
                </div>
            </div>
            <Navbar/>
        </header>
    )
};