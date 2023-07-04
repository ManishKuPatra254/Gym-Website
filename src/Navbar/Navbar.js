import { Fragment, useState } from 'react';
import style from './Navbar.module.css';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';



export function NavbarSection() {

    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenuOpen() {
        setMenuOpen(!menuOpen);
    }
    // Check Link and li......................

    const [activeItem, setActiveItem] = useState('home');

    const handleNavbarClick = (item) => {
        setActiveItem(item);
    };

    let dataReceive;

    try {
        dataReceive = localStorage.getItem("getUserDetails");


    } catch {
        dataReceive = "dummy"

    }

    if (dataReceive && typeof dataReceive === "string" && dataReceive.startsWith('"') && dataReceive.endsWith('"')) {
        dataReceive = dataReceive.slice(1, -1);
    }

    // navigation section ....................

    const navigateFromJoinUs = useNavigate();

    function handleNavigateJoinUs() {
        if (dataReceive) {
            localStorage.removeItem("getUserDetails");
            navigateFromJoinUs('/');
        } else {
            navigateFromJoinUs('/signin');
        }
    }

    function handleNavigateHome() {
        navigateFromJoinUs('/');
    }



    return (
        <Fragment>
            <div className={style.main_sec_navbar}>
                <div className={style.heading}>
                    <p><FitnessCenterIcon sx={{ color: 'white', fontWeight: 'bolder' }} /></p>
                    <h1 onClick={handleNavigateHome}>Power Fitness</h1>
                </div>
                <div className={`${style.listing_sec_nav} ${menuOpen ? style.menuopen_ham : ''}`}>
                    <ul>
                        <Link to="/" className={activeItem === 'home' ? style.active : ''} onClick={() => handleNavbarClick('home')}>
                            <li>Home</li></Link>
                        <Link to="/fullaboutus" className={activeItem === 'aboutus' ? style.active : ''} onClick={() => handleNavbarClick('aboutus')}>
                            <li>About us</li>
                        </Link>
                        <Link to="/fullclasses" className={activeItem === 'classes' ? style.active : ''} onClick={() => handleNavbarClick('classes')}>
                            <li>Classes</li>
                        </Link>
                        <Link to="/fullblogs" className={activeItem === 'blogs' ? style.active : ''} onClick={() => handleNavbarClick('blogs')}>
                            <li>Blogs</li>
                        </Link>

                    </ul>
                </div>

                <div className={style.btn_nav}>
                    <p>{dataReceive ? `Welcome ${dataReceive}` : ''}</p>
                    <button onClick={handleNavigateJoinUs}>{dataReceive ? 'Logout' : 'Join Us'}</button>
                </div>
                <div className={style.ham_menu_cond} onClick={handleMenuOpen}>
                    {menuOpen ? (
                        <MenuOpenIcon sx={{ color: 'white' }} />
                    ) :
                        (

                            <ul className={style.cond_menu}>
                                <span onClick={() => setMenuOpen(false)}><CloseIcon /></span>
                                <Link to={'/'}><li>Home</li></Link>
                                <Link to={'/fullaboutus'}> <li>About us</li> </Link>
                                <Link to={'/fullclasses'} ><li>Classes</li></Link>
                                <Link to={'/fullblogs'}><li>Blogs</li></Link>
                            </ul>
                        )
                    }
                </div>
            </div>
        </Fragment>
    )
}