import { Fragment, useState, useRef } from 'react';
import style from './RegisterJoinUs.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Login } from '../Login/Login';

export function RegisterJoinUs() {
    
    // const navigateHome = useNavigate();

    // register section...................

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const innerRefUsername = useRef('');
    const innerRefEmail = useRef('');
    const innerRefPassword = useRef('');

    const regexExpForPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const regexExpForName = /^[a-zA-Z]{4,20}$/;
    const regexExpForEmail = /^[a-zA-Z0-9]{3,}(@gmail.com|@email.com)$/


    function handleRegister() {
        if (regexExpForName.test(innerRefUsername.current.value) && regexExpForEmail.test(innerRefEmail.current.value) && regexExpForPassword.test(innerRefPassword.current.value)) {
            if (!(localStorage.getItem('getUserDetails'))) {
                let dataObj = {
                    Name: innerRefUsername.current.value,
                    Password: innerRefPassword.current.value,
                    Email: innerRefEmail.current.value,
                }
                localStorage.setItem("getUserDetails", JSON.stringify([dataObj]))
                // navigateHome("/");
                toast.success('Registered Successfully')
            }
            else {
                let oldData = JSON.parse(localStorage.getItem("getUserDetails"));

                let dataObj = {
                    Name: innerRefUsername.current.value,
                    Password: innerRefPassword.current.value,
                    Email: innerRefEmail.current.value,
                }

                localStorage.setItem("getUserDetails", JSON.stringify([dataObj, ...oldData]))
                // innerRefUsername.current.value = '';
                setUsername('')
                setEmail('')
                setPassword('')
                // innerRefEmail.current.value = '';
                // innerRefPassword.current.value = '';
                toast.success('Registered Successfully')

            }
        }
        else {
            toast.error('Invalid Credetials');
            // console.log('No')
        }
    }


    return (
        <Fragment>
            <div className={style.main_register}>
                <div className={style.sub_register_content}>
                    <div className={style.input_sec}>
                        <h3>Register Here</h3>
                        <TextField label="Username" variant="outlined" type='text' value={username}
                            sx={{ width: '80%' }} inputRef={innerRefUsername}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <TextField label="Email" variant="outlined" type='email' value={email}
                            sx={{ width: '80%' }} inputRef={innerRefEmail}
                            onChange={e => setEmail(e.target.value)}

                        />
                        <TextField label="Password" variant="outlined" type='password' sx={{ width: '80%' }}
                            inputRef={innerRefPassword} value={password}
                            onChange={e => setPassword(e.target.value)}

                        />
                        <Button
                            onClick={handleRegister}
                            sx={{
                                width: '40%',
                                textTransform: 'unset',
                                backgroundColor: 'black',
                                fontSize: '17px',
                                "&:hover": { backgroundColor: 'red' },
                                // fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                                fontWeight: 'bolder'
                            }}
                            variant="contained">Register</Button>
                        <Toaster />

                        <h4>Already have a account</h4>
                        <Login />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}