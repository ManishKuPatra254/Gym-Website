import { Fragment } from 'react';
import style from './FullAboutUs.module.css';

export function FullAboutUs() {

    return (
        <Fragment>
            <div className={style.heading3}>

                <h4>About Power Fitness</h4>
            </div>
            <div className={style.main_about_us_sec}>
                <div className={style.main_about_sec}>
                    <h5>Hi! We’re a local Power Fitness gym in <br /> India, Mumbai.</h5>
                    <p> It’s our mission to help people in India  <br />  get fit, stay healthy, and live life on their terms without fitness being an obstacle.

                        <br />
                        Our gym is designed to provide a welcoming and motivating environment for individuals of all fitness levels. Whether you're a beginner or an experienced athlete, we have the resources and support to help you succeed.</p>
                </div>

                <div className={style.main_blogs}>
                    <div className={style.sub_mini_blogs}>
                        <img src="https://images.pexels.com/photos/5032003/pexels-photo-5032003.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div className={style.text_aree}>
                            <h1>Our Main Workout</h1>
                            <h4>How to Deadlift with Proper Form</h4>
                            <p>Hold the weight for a second at the top, with locked hips and knees. Then return the weight to the floor by moving your hips back while bending your legs. Rest a second at the bottom and repeat. </p>
                            <a href='https://youtu.be/XxWcirHIwVo' >Watch Video</a>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
