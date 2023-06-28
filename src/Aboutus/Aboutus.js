import style from './Aboutus.module.css'
import React, { Fragment } from 'react';


export function Aboutus() {

    return (
        <Fragment>
            <div id='aboutus' className={style.main_about_us}>
                <div className={style.heading}>
                    <h2>About Us</h2>
                    <p>Welcome to our gym! We are dedicated to helping you achieve your fitness goals and live a healthier, more active lifestyle.</p>
                </div>
                <div className={style.main_first}>
                    <div className={style.first_about}>
                        <img src="https://img.freepik.com/free-photo/skater-shouting-by-megaphone_1368-1187.jpg?w=740&t=st=1687939135~exp=1687939735~hmac=fddc3ce4cab42fb9abcbe4fcd78259dc1393c800abe1d6aa976524a0aec08153" alt="" />
                    </div>
                    <div className={style.text_first}>
                        <p>Who We Are</p>
                        <span>Our gym is designed to provide a welcoming and motivating environment for individuals of all fitness levels. Whether you're a beginner or an experienced athlete, we have the resources and support to help you succeed.</span>
                    </div>
                </div>
                <div className={style.second_about}></div>
                <div className={style.third_about}></div>
            </div>
        </Fragment>
    )
}


