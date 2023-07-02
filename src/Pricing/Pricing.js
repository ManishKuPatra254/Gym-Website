import React, { Fragment } from 'react'
import style from './Pricing.module.css';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import toast from 'react-hot-toast';

export function Pricing() {

    function handleClickToast() {
        toast.success('We appreciate your descision ')
    }

    return (
        <Fragment>
            <div className={style.pricing_wrapper}>

                <h1 className={style.pricing_table_title}>Our Pricing </h1>

                <div className={style.pricing_table}>
                    <h3 className={style.pricing_title_1}>Silver</h3>
                    <div className={style.price}>₹549<sup>/ month</sup></div>

                    <ul className={style.table_list}>
                        <li> <CheckIcon /> Unlimited club access</li>
                        <li><CheckIcon />Group attendence </li>
                        <li><ClearIcon />Gym visits </li>
                        <li> <ClearIcon />Visit to the bath complex </li>
                        <li><CheckIcon />Gym , Fight club </li>
                    </ul>

                    <div className={style.table_buy}>
                        <button onClick={handleClickToast}>Get Started</button>
                    </div>
                </div>

                <div className={style.pricing_table}>
                    <h3 className={style.pricing_title_2}>Gold</h3>
                    <div className={style.price}>₹1,199<sup>/ month</sup></div>

                    <ul className={style.table_list}>
                        <li> <CheckIcon />Unlimited club access</li>
                        <li> <CheckIcon />Group attendence </li>
                        <li> <ClearIcon />Gym visits</li>
                        <li><ClearIcon />Visit to the bath complex </li>
                        <li><CheckIcon />Gym , Fight club </li>

                    </ul>

                    <div className={style.table_buy}>
                        <button onClick={handleClickToast}>Get Started</button>
                    </div>
                </div>

                <div className={style.pricing_table}>
                    <h3 className={style.pricing_title_3}>Premium</h3>
                    <div className={style.price}>₹3,099<sup>/ month</sup></div>

                    <ul className={style.table_list}>
                        <li> <CheckIcon />Unlimited club access</li>
                        <li><CheckIcon />Group attendence </li>
                        <li> <CheckIcon />Gym visits</li>
                        <li><CheckIcon />Visit to the bath complex </li>
                        <li><CheckIcon />Gym , Fight club </li>
                    </ul>

                    <div className={style.table_buy}>
                        <button onClick={handleClickToast}>Start 7 day free trial</button>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
