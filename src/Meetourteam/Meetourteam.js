import style from './Meetourteam.module.css';
import React, { Fragment } from 'react'
import { meetOurTeamData } from './MeetteamData';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function Meetourteam() {

    const navigateToFullTeam = useNavigate();

    function handleNavigateToFullTeam() {
        navigateToFullTeam('/fullteam');
    }

    return (
        <Fragment>
            <div className={style.heading2}>
                <h2>Meet our team</h2>
            </div>

            <div className={style.meet_main_team}>
                {
                    meetOurTeamData.map(items => (
                        <div key={items.id} className={style.main_team_sec}>
                            <div className={style.flip_card_inner}>
                                <img src={items.images} alt="" />
                                <div className={style.text_liner}>
                                    <p>{items.names}</p>
                                    <h4>{items.prof}</h4>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={style.main_button}>
                <Button onClick={handleNavigateToFullTeam}
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
