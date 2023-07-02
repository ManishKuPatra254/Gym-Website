import React, { Fragment } from 'react';
import style from './Home.module.css'
import { Herosection } from '../Herosection/Herosection';
import { Aboutus } from '../Aboutusmain/Aboutusmain';
import { Explore } from '../Explore/Explore';
import { Meetourteam } from '../Meetourteam/Meetourteam';
import { Pricing } from '../Pricing/Pricing';

export function Home() {
    return (
        <Fragment>
            <div className={style.main_home}>
                <Herosection />
                <Aboutus />
                <Explore />
                <Meetourteam />
                <Pricing />
            </div>
        </Fragment>
    )
}


