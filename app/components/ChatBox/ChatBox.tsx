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
import {useEffect, useState} from "react";
import SendIcon from '@mui/icons-material/Send';
import './ChatBox.css'
import {json} from "stream/consumers";
import Message from "@/app/components/Message/Message";



// @ts-ignore
export default function ChatBox({user, open, handleOpen}) {

    const [ body, setBody ] = useState('');


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments/2')
            .then(response => response.json())
            .then(json => setBody(json.name))
    }, []);


    return (
        <React.Fragment>
            <Dialog
                sx={{zIndex: 2000000000}}
                fullScreen
                open={open}
            >
                <div className={"bar"}>
                    <IconButton onClick={handleOpen} sx={{marginLeft: '1rem'}}>
                        <CloseIcon/>

                    </IconButton>
                </div>
                <div className={"chatcomp"}>
                    <Message me={true} content={body}/>
                    <Message me={false} content={body}/>
                    <Message me={false} content={body}/>
                    <Message me={true} content={body}/>
                    <Message me={true} content={body}/>
                    <Message me={false} content={body}/>
                    <Message me={false} content={body}/>
                    <Message me={true} content={body}/>
                    <Message me={true} content={body}/>
                    <Message me={false} content={body}/>
                    <Message me={false} content={body}/>
                    <Message me={true} content={body}/>
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
