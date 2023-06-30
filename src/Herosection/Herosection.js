import { Fragment } from 'react';
import style from './Herosection.module.css';
// import imageHero from '../ImagesSection/pexels-leon-ardho-1552242.jpg'
import { useNavigate } from 'react-router-dom';
import video1 from '../ImagesSection/pexels-tima-miroshnichenko-5319759 (2160p).mp4'

export function Herosection() {

    const navigateToLogin = useNavigate();

    function handleNaigateSignup() {
        navigateToLogin('/signin')
    }
    return (
        <Fragment>
            <div className={style.main_herosection}>
                <video autoPlay muted loop>
                    <source src={video1} type='video/mp4' />
                </video>
                <div className={style.text_in_image}>
                    <h1>Welcome to Power Fitness</h1>
                    <p>“The secret of getting ahead is getting started” </p>
                    <button onClick={handleNaigateSignup}>Join with us</button>
                </div>
            </div>
        </Fragment>
    )
}