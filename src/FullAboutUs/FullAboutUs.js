import { Fragment } from 'react';
import style from './FullAboutUs.module.css';

export function FullAboutUs() {
    return (
        <Fragment>
            <div className={style.heading3}>
                <h4>About Power Fitness</h4>
            </div>

            <div className={style.main_about_sec}>
                <h5>Hi! We’re a local Power Fitness gym in <br /> India, Mumbai.</h5>
                <p> It’s our mission to help people in India  <br />  get fit, stay healthy, and live life on their terms without fitness being an obstacle.

                    <br />
                    Our gym is designed to provide a welcoming and motivating environment for individuals of all fitness levels. Whether you're a beginner or an experienced athlete, we have the resources and support to help you succeed.</p>
            </div>
        </Fragment>
    )
}
