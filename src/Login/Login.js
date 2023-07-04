import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { DialogContentText } from '@mui/material';
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Fragment, useState, useRef } from 'react';

export function Login() {

    // const [username, setUsername] = useState('');

    // function handleSetUsername (name) {
    //     setUsername(name);
    //   };
      


    const navigateHome = useNavigate();
    // login section ......................

    const loginRef = useRef('');
    const passwordRef = useRef('')
    console.log(localStorage.getItem("getUserDetails"));
    // let dataFromRegister = JSON.parse(localStorage.getItem("getUserDetails")) || [];
    let dataFromRegister = JSON.parse(localStorage.getItem("getUserDetails"));



    function handleDataCheckLogin() {
        if (loginRef.current.value.trim().length <= 0 || passwordRef.current.value.trim().length <= 0) {
            toast.error('Nope ⚡');
        }
        else {
            const loginCheck = loginRef.current.value.trim();
            let test = 0;
            if (dataFromRegister) {
                test = dataFromRegister.find((event) => {
                    if (event.Name === loginCheck || event.Email === loginCheck || event.Password === loginCheck) {
                        localStorage.setItem('getUserDetails', JSON.stringify(event.Name))
                        return true;
                    }
                    else {
                        return false;
                    }
                })
            }

            if (test) {
                toast.success('Login Suceessfully');
                navigateHome('/')
            }
            else {
                toast.error('Invalid Credetials');
            }

        }
    }



    // dialog box for login.............
    const [open, setOpen] = useState(false);

    function handleClickOpen() {
        setOpen(true);
    };

    function handleClose() {
        setOpen(false);
    };

    return (
        <Fragment>
            <Button
                sx={{
                    textTransform: "unset",
                    fontSize: "17px",
                    color: "black",
                    fontFamily: 'Poppins, sans-serif',
                    // border: '1px solid black',
                    "&:hover": { color: "red" },
                    fontWeight: "900"
                }}
                variant="text"
                onClick={handleClickOpen}
            >
                Login
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ textAlign: "center", fontSize: "45px", fontFamily: 'Poppins, sans-serif', fontWeight: "900" }}>
                    Login Here
                </DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ color: 'black' }}>
                        To login to this website, please enter your username here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField

                        inputRef={loginRef}
                        // value={usernameValid} onChange={handleUsername}
                        sx={{ width: "100%" }}
                        autoFocus
                        margin="dense"
                        label="Username"
                        type="text"
                        variant="outlined"
                    />
                    <TextField
                        inputRef={passwordRef}
                        //  value={passwordValid} onChange={handlePassword}
                        sx={{ width: "100%" }}
                        autoFocus
                        margin="dense"
                        label="Password"
                        type="password"
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleDataCheckLogin}
                        sx={{
                            textTransform: "unset",
                            fontSize: "17px",
                            color: "black",
                            "&:hover": { color: "red" },
                            fontWeight: "bolder",
                            textAlign: "center"
                        }}

                    >
                        Login
                    </Button>
                    {/* <div>
            <p>Don't have an account</p>
            <Button onClick={handleClose}>Register</Button>
          </div> */}
                </DialogActions>
            </Dialog>

        </Fragment>
    )
}