import { Fragment } from 'react';
import style from './Herosection.module.css';
// import imageHero from '../ImagesSection/pexels-leon-ardho-1552242.jpg'
import { useNavigate } from 'react-router-dom';
import video1 from '../ImagesSection/www.KeepVid.to--Cinematic-CROSSFIT-Video-with-TNR-Programming-www-youtube-com-1080p-dcd546118c0b72589a0116d723c774cc-1080p.mp4'

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
                    <p>THE ONLY IMPOSSIBLE JOURNEY IS THE ONE YOU NEVER BEGIN. </p>
                    <button onClick={handleNaigateSignup}>Join with us</button>
                </div>
            </div>
        </Fragment>
    )
}