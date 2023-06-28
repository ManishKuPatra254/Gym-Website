import { Fragment } from 'react';
import style from './RegisterJoinUs.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

export function RegisterJoinUs() {
    return (
        <Fragment>
            <div className={style.main_register}>
                <div className={style.sub_register_content}>
                    <div className={style.input_sec}>
                        <h3>Login</h3>
                        <TextField label="Username" variant="outlined" type='text'
                            sx={{ width: '60%' }}
                        />
                        <TextField label="Password" variant="outlined" type='password' sx={{ width: '60%' }} />
                        <Button
                            sx={{
                                width: '50%',
                                textTransform: 'unset',
                                backgroundColor: 'grey',
                                "&:hover": { backgroundColor: 'black' },
                                fontSize: '17px',
                                fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                                fontWeight: 'bolder'
                            }}
                            variant="contained">Login</Button>
                        <Button
                            sx={{
                                width: '30%',
                                textTransform: 'unset',
                                color: 'black',
                                border: '1px solid black',
                                "&:hover": { border: '1px solid black' },
                                fontSize: '17px',
                                fontFamily: 'monospace',
                                fontWeight: 'bolder'

                            }}
                            variant="outlined">Signup</Button>

                    </div>

                    <div className={style.image_sec}>
                        <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1687931428~exp=1687932028~hmac=2a36e6ef8d3817ee735535db5cbbd982bb4df9083287dfd9200f34d3f0d52bee" alt="" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}