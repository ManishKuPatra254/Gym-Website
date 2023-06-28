import React, { Fragment } from 'react';
import { NavbarSection } from '../Navbar/Navbar';
import { Herosection } from '../Herosection/Herosection'

export function Home() {
    return (
        <Fragment>
            <NavbarSection />
            <Herosection />
        </Fragment>
    )
}


