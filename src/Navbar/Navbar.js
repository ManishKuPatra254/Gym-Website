import { Fragment } from 'react';
import style from './Navbar.module.css';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export function NavbarSection() {
    return (
        <Fragment>
            <div className={style.main_sec_navbar}>
                <div className={style.heading}>
                    <p><FitnessCenterIcon sx={{ color: 'black' , fontWeight : 'bolder' }} /></p>
                    <h1>Power Fitness</h1>
                </div>
                <div className={style.listing_sec_nav}>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Classes</li>
                        <li>Blogs</li>
                    </ul>
                </div>

                <div className={style.btn_nav}>
                    <button>Join Us</button>
                </div>
            </div>
        </Fragment>
    )
}