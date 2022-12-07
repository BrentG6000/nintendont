import './css/Navbar.css';
import logo from '../nintendont-logo.png'

const Navbar = () => {
    return (
        <nav>
            <div id='topNav'>
                <img
                    src={logo}
                    alt="website logo"
                />
                <div id='searchBar'></div>
                <div id='gap'></div>
                <div id='iconLinks'></div>
            </div>
            <div id='bottomNav'>
            </div>
        </nav>
    );
}

export default Navbar;