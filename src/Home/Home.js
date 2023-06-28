import React, { Fragment } from 'react';

import { Herosection } from '../Herosection/Herosection';
import { Aboutus } from '../Aboutus/Aboutus';

export function Home() {
    return (
        <Fragment>
            <div id='home'>
                <Herosection />
                <Aboutus />
            </div>
        </Fragment>
    )
}


