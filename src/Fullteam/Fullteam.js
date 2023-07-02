import style from './Fullteam.module.css';
import { fullTeamData } from './FullteamData';
import React, { Fragment } from 'react'
import { Button } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast'
export function Fullteam() {

    function handleClickTeamPop() {
        toast('Booked')
    }

    return (
        <Fragment>
            <div className={style.heading2}>
                <h2>Full Team</h2>
            </div>

            <div className={style.met_main_team}>
                {
                    fullTeamData.map((itemsCard) => (
                        <div key={itemsCard.id} className={style.sub_name}>
                            <img src={itemsCard.images} alt="" />
                            <p>{itemsCard.names}</p>
                            <div className={style.btn_add}>
                                <Button variant="contained" onClick={handleClickTeamPop}>Book now</Button>
                                <Toaster />
                            </div>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}
