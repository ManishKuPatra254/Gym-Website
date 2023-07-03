import { Fragment } from 'react';
import style from './Navbar.module.css';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function NavbarSection() {

    // navigation section ....................

    const navigateFromJoinUs = useNavigate();

    function handleNavigateJoinUs() {
        navigateFromJoinUs('/signin');
    }

    function handleNavigateHome() {
        navigateFromJoinUs('/');
    }



    return (
        <Fragment>
            <div className={style.main_sec_navbar}>
                <div className={style.heading}>
                    <p><FitnessCenterIcon sx={{ color: 'black', fontWeight: 'bolder' }} /></p>
                    <h1 onClick={handleNavigateHome}>Power Fitness</h1>
                </div>
                <div className={style.listing_sec_nav}>
                    <ul>
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/fullaboutus'}> <li>About us</li> </Link>
                        <Link to={'/fullclasses'} ><li>Classes</li></Link>
                        <Link to={'/fullblogs'}><li>Blogs</li></Link>
                    </ul>
                </div>

                <div className={style.btn_nav}>
                    <button onClick={handleNavigateJoinUs}>Join Us</button>
                </div>
            </div>
        </Fragment>
    )
}