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
import {useEffect} from "react";
import SendIcon from '@mui/icons-material/Send';
import './ChatBox.css'



// @ts-ignore
export default function ChatBox({open, setOpen}) {

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments/1')
            .then(response => response.json())
            .then(json => console.log(json.body))
    }, []);


    return (
        <React.Fragment>
            <Dialog
                sx={{zIndex: 2000000000}}
                fullScreen
                open={open}
                onClose={handleClose}
            >
                <div className={"chatcomp"}>
                    <div className="chatstart">
                        <div className="chat-bubble">It's over Anakin, <br/>I have the high ground.</div>
                    </div>
                    <div className={"mymessage"}>
                        <div className="chatend">
                            <div className="chat-bubble">You underestimate my power!</div>
                        </div>
                    </div>
                    <div className="chatstart">
                        <div className="chat-bubble">It's over Anakin, <br/>I have the high ground.</div>
                    </div>
                    <div className={"mymessage"}>
                        <div className="chatend">
                            <div className="chat-bubble">You underestimate my power!</div>
                        </div>
                    </div>
                    <div className="chatstart">
                        <div className="chat-bubble">It's over Anakin, <br/>I have the high ground.</div>
                    </div>
                    <div className={"mymessage"}>
                        <div className="chatend">
                            <div className="chat-bubble">You underestimate my power!</div>
                        </div>
                    </div>
                    <div className="chatstart">
                        <div className="chat-bubble">It's over Anakin, <br/>I have the high ground.</div>
                    </div>
                    <div className={"mymessage"}>
                        <div className="chatend">
                            <div className="chat-bubble">You underestimate my power!</div>
                        </div>
                    </div>
                    <div className={"mymessage"}>
                        <div className="chatend">
                            <div className="chat-bubble">You underestimate my power!</div>
                        </div>
                    </div>
                    <div className={"mymessage"}>
                        <div className="chatend">
                            <div className="chat-bubble">You underestimate my power!</div>
                        </div>
                    </div>
                    <div className={"mymessage"}>
                        <div className="chatend">
                            <div className="chat-bubble">You underestimate my power!</div>
                        </div>
                    </div>
                    <div className={"mymessage"}>
                        <div className="chatend">
                            <div className="chat-bubble">You underestimate my power!</div>
                        </div>
                    </div>
                    <div className={"mymessage"}>
                        <div className="chatend">
                            <div className="chat-bubble">You underestimate my power!</div>
                        </div>
                    </div>
                </div>


                <div className={"inputArea"}>
                    <input className={"messageField"} placeholder={"nachricht"}/>
                    <IconButton sx={{marginLeft: '3%'}}>
                        <SendIcon/>
                    </IconButton>


                </div>
            </Dialog>
        </React.Fragment>
    );
}
