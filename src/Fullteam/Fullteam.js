import style from './Fullteam.module.css';
import { fullTeamData } from './FullteamData';
import React, { Fragment } from 'react'
// import { Button } from '@mui/material';

export function Fullteam() {
    return (
        <Fragment>
            <div className={style.heading2}>
                <h2>Full Team</h2>
            </div>

            <div className={style.met_main_team}>
                <div className={style.sub_name_3}>
                    {
                        fullTeamData.map(items => (
                            <div key={items.id} className={style.sub_name}>

                                <img src={items.images} alt="" />

                            </div>

                        ))
                    }

                </div>
            </div>

        </Fragment>
    )
}
