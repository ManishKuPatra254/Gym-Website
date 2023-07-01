import React, { Fragment } from 'react';

import { Herosection } from '../Herosection/Herosection';
import { Aboutus } from '../Aboutus/Aboutus';
import { Explore } from '../Explore/Explore';
import { Meetourteam } from '../Meetourteam/Meetourteam';

export function Home() {
    return (
        <Fragment>
            <div id='home'>
                <Herosection />
                <Aboutus />
                <Explore />
                <Meetourteam />
            </div>
        </Fragment>
    )
}


