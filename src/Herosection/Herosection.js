import { Fragment } from 'react';
import style from './Herosection.module.css';
import imageHero from '../ImagesSection/pexels-leon-ardho-1552242.jpg'

export function Herosection() {
    return (
        <Fragment>
            <div className={style.main_herosection}>
                <img src={imageHero} alt="" />
                <div className={style.text_in_image}>
                    <h1>Power Fitness</h1>
                    <p>“The secret of getting ahead is getting started” </p>
                    <button>Join with us</button>
                </div>
            </div>
        </Fragment>
    )
}