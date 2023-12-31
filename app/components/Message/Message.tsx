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
import './Message.css'
import {json} from "stream/consumers";



// @ts-ignore
export default function Message({me, content}) {




    return (
                <div>
                    { me ? <div className={"mymessage"}>
                            <div className="chatend">
                                <div className="chat-bubble">{content}</div>
                            </div>
                        </div>

                    : <div className="chatstart">
                        <div className="chat-bubble">{content}</div>
                    </div> }
                </div>


    );
}
