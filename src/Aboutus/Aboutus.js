import style from './Aboutus.module.css'
import React, { Fragment } from 'react';
import { Button } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';

export function Aboutus() {

    function handleClickToast() {
        toast(
            "Clicked from about us section",
            {
                icon: '👏',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
    }

    return (
        <Fragment>
            <div id='aboutus' className={style.main_about_us}>
                <div className={style.heading}>
                    <h2>About Us</h2>
                </div>
                <div className={style.main_first}>
                    <div className={style.first_about}>
                        <div className={style.video_wrapper}>
                            <iframe width="400" height="500" src="https://www.youtube.com/embed/HQfF5XRVXjU?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className={style.text_first_1}>
                        <p>Who We Are</p>
                        <span>Our gym is designed to provide a welcoming and motivating environment for individuals of all fitness levels. Whether you're a beginner or an experienced athlete, we have the resources and support to help you succeed.</span>
                        <div>
                            <Button
                                sx={{
                                    width: '30%',
                                    marginTop: '12px',
                                    textTransform: 'unset',
                                    fontSize: '18px',
                                    fontWeight: 'bolder',
                                    color: 'white',
                                    backgroundColor: 'red',
                                    borderRadius : '50px',
                                    "&:hover": { backgroundColor: 'teal' },

                                }}
                                variant='contained' onClick={handleClickToast}>Learn more</Button>
                            <Toaster />
                        </div>
                    </div>
                </div>




                <h1 className={style.heading2}>Why Choose Us?</h1>
                <div className={style.main_first}>

                    <div className={style.text_first}>
                        <p>Our Mission</p>
                        <span>At our gym, our mission is to empower and inspire our members to transform their lives through fitness. We believe that exercise is not just about physical health but also about mental and emotional well-being. We strive to create a positive and inclusive community where everyone feels supported on their fitness journey.</span>
                    </div>
                    <div className={style.second_about}>
                        <img src="https://img.freepik.com/free-photo/young-woman-doing-fitness-exercises_144627-15694.jpg?w=740&t=st=1687940979~exp=1687941579~hmac=b67cdaf0aeb1e2d09c779d714de4097805db525cafc0c0a8986b6538438fe224" alt="" />
                    </div>

                </div>
                <div className={style.main_first}>
                    <div className={style.third_about}>
                        <img src="https://img.freepik.com/free-photo/big-dumbbells-white_144627-24203.jpg?w=740&t=st=1687941275~exp=1687941875~hmac=19ad9539beec3c64b995f68303f54f02bd431b2b53aeb981af840fc9aa535534" alt="" />
                    </div>
                    <div className={style.text_first}>
                        <p>Facilities and Equipment</p>
                        <span>Our gym boasts state-of-the-art facilities and equipment to cater to a wide range of fitness interests and goals. From cardio machines and weightlifting equipment to functional training areas, we have everything you need to maximize your workouts. Our clean and well-maintained facilities ensure a safe and comfortable environment for all our members.</span>
                    </div>
                </div>
                <div className={style.main_first}>
                    <div className={style.text_first}>
                        <p>Community and Events</p>
                        <span>We believe that fitness is more than just individual efforts. We foster a strong sense of community within our gym, organizing regular events, challenges, and social gatherings. These activities provide opportunities for our members to connect, motivate each other, and celebrate their fitness achievements together.</span>
                    </div>
                    <div className={style.third_about}>
                        <img src="https://img.freepik.com/free-photo/group-people-fitness-wear_144627-721.jpg?w=740&t=st=1687943085~exp=1687943685~hmac=e16f6e29b71e130eb6864e8dc087bac482302ccdbc98eb5b8bb64560b9f4cf7b" alt="" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
