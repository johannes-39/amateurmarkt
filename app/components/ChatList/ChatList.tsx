import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import ChatBox from "@/app/components/ChatBox/ChatBox";
import './ChatList.css';

export default function ChatList() {

    const [open, setOpen] = React.useState(false);


    const handleOpen = () => {
        setOpen(!open);
    }
    return (
        <Box sx={{ maxHeight: '30rem', overflow: 'auto'}}>
        <List  sx={{ width: '22rem', bgcolor: 'background.paper' }}>
            <ListItem className={"chatItem"} onClick={handleOpen} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" />
                </ListItemAvatar>
                <ListItemText
                    primary="Johannes Städtler"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
                <ChatBox user={"testuser1"} open={open} handleOpen={handleOpen}/>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className={"chatItem"} onClick={handleOpen} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" />
                </ListItemAvatar>
                <ListItemText
                    primary="Philipp Müller"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
                <ChatBox user={"testuser1"} open={open} handleOpen={handleOpen}/>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className={"chatItem"} onClick={handleOpen} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Test Nutzer" />
                </ListItemAvatar>
                <ListItemText
                    primary="Test Nutzer"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
                <ChatBox user={"testuser1"} open={open} handleOpen={handleOpen}/>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className={"chatItem"} onClick={handleOpen} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" />
                </ListItemAvatar>
                <ListItemText
                    primary="Max Mustermann"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
                <ChatBox user={"testuser1"} open={open} handleOpen={handleOpen}/>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className={"chatItem"} onClick={handleOpen} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" />
                </ListItemAvatar>
                <ListItemText
                    primary="Hallo Welt"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
                <ChatBox user={"testuser1"} open={open} handleOpen={handleOpen}/>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className={"chatItem"} onClick={handleOpen} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" />
                </ListItemAvatar>
                <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
                <ChatBox user={"testuser1"} open={open} handleOpen={handleOpen}/>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className={"chatItem"} onClick={handleOpen} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" />
                </ListItemAvatar>
                <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
                <ChatBox user={"testuser1"} open={open} handleOpen={handleOpen}/>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className={"chatItem"} onClick={handleOpen} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" />
                </ListItemAvatar>
                <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
                <ChatBox user={"testuser1"} open={open} handleOpen={handleOpen}/>
            </ListItem>
        </List>
        </Box>
    );
}
