import SearchBar from './SearchBar'
import './css/Navbar.css';
import logo from '../nintendont-logo.png'

const Navbar = () => {
    return (
        <nav>
            <div id='topNav'>
                <img
                    id='logo'
                    src={logo}
                    alt="website logo"
                />
                <SearchBar />
                <div id='gap'>test</div>
                <div id='iconLinks'></div>
            </div>
            <div id='bottomNav'>
            </div>
        </nav>
    );
}

export default Navbar;