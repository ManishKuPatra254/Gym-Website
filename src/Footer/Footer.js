import style from './Footer.module.css';
import React, { Fragment } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import imageLogo from '../ImagesSection/logo-removebg-preview.png'

export function Footer() {
    return (
        <Fragment>
            <footer className={style.footer}>
                <div className={style.container}>
                    <div className={style.footer_content}>
                        <div className={style.footer_column}>
                            <div className={style.footer_inner}>
                                <img src={imageLogo} alt="" />
                                <h3>Power Fitness</h3>
                            </div>
                            <ul className={style.social_links}>
                                <li>
                                    <a href="https://twitter.com">
                                        <TwitterIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://facebook.com">
                                        <FacebookIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com">
                                        <InstagramIcon />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={style.footer_column}>
                            <h3>Reach To</h3>
                            <ul className={style.footer_links}>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/fullaboutus">About Us</a>
                                </li>
                                <li>
                                    <a href="/classes">Classes</a>
                                </li>
                                <li>
                                    <a href="/blogs">Blogs</a>
                                </li>
                            </ul>
                        </div>
                        <div className={style.footer_column}>
                            <h3>Services</h3>
                            <ul className={style.footer_links}>
                                <li>
                                    <a href="/">Personal Trainer</a>
                                </li>
                                <li>
                                    <a href="/menfashion">All equipments</a>
                                </li>
                                <li>
                                    <a href="/womenfashion">AC vantilated</a>
                                </li>
                                <li>
                                    <a href="/accessories">Special locker system</a>
                                </li>
                            </ul>
                        </div>
                        <div className={style.footer_column}>
                            <h3>Programs and events</h3>
                            <ul className={style.footer_links}>
                                <li>
                                    <a href="/">Special events</a>
                                </li>
                                <li>
                                    <a href="/menfashion">Deadlift challenges</a>
                                </li>
                                <li>
                                    <a href="/womenfashion">Stamina check challenges</a>
                                </li>
                                <li>
                                    <a href="/accessories">Championship training</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className={style.footer_bottom}>
                        <p>&copy; {new Date().getFullYear()} Power Fitness. Created By Manish All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}
