import style from './FullClasses.module.css';
import { fullClassesData } from './FullClassesData';
import React, { Fragment } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export function FullClasses() {

    function handleClickTeamPop() {
        toast('Joined ✌️')
    }

    return (
        <Fragment>
            <div className={style.heading5}>
                <h4>Classes We Schedule</h4>
            </div>

            <div className={style.met_main_team}>
                {
                    fullClassesData.map((itemsCard) => (
                        <div key={itemsCard.id} className={style.sub_name}>
                            <img src={itemsCard.images} alt="" />
                            <p>{itemsCard.names}</p>
                            <span>{itemsCard.prof}</span>
                            <div className={style.btn_add}>
                                <button variant="contained" onClick={handleClickTeamPop}>Join now</button>
                                <Toaster />
                            </div>
                        </div>
                    ))
                }
            </div>

        </Fragment>
    )
}
