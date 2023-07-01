import style from './Meetourteam.module.css';
import React, { Fragment } from 'react'
import { meetOurTeamData } from './MeetteamData';
import { Button } from '@mui/material';

export function Meetourteam() {
    return (
        <Fragment>
            <div className={style.heading2}>
                <h2>Meet our team</h2>
            </div>

            <div className={style.meet_main_team}>
                {
                    meetOurTeamData.map(items => (
                        <div key={items.id} className={style.main_team_sec}>
                            <img src={items.images} alt="" />
                            <p>{items.names}</p>
                            <h4>{items.prof}</h4>
                        </div>
                    ))
                }
            </div>
            <div className={style.main_button}>
                <Button
                    sx={{
                        textTransform: 'unset',
                        fontSize: '19px',
                        fontWeight: '900',
                        backgroundColor: 'black',
                        "&:hover": { backgroundColor: 'grey' }
                    }}
                    variant="contained">Meet our team</Button>
            </div>
        </Fragment>
    )
}
