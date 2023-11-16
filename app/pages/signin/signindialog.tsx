import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import SignIn from "@/app/pages/signin/signin";



// @ts-ignore
export default function FullScreenDialog({open, setOpen}) {


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog
                sx={{zIndex: 20000000000}}
                fullScreen
                open={open}
                onClose={handleClose}
            >
                        <SignIn close={handleClose}/>
            </Dialog>
        </React.Fragment>
    );
}
