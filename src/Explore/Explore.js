import style from './Explore.module.css';
import { exploreData } from './ExploreData';
import { useEffect, useRef } from 'react';
import React, { Fragment } from 'react'

export function Explore() {
    const innerRefImage = useRef(null);

    useEffect(() => {
        innerRefImage.current.classList.add("slider-animation");
    }, []);

    return (
        <Fragment>
            <div className={style.heading_1}>
                <h2>Training Programs</h2>
            </div>

            <div className={style.main_container} >
                {exploreData.map((item) => (
                    <div key={item.id} className={style.image_container} ref={innerRefImage}>
                        <img src={item.images} alt="" />
                        <p>{item.names}</p>

                    </div>
                ))}
            </div>
        </Fragment>
    );
}
