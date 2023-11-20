import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import ShieldIcon from '@mui/icons-material/Shield';
import DeleteIcon from '@mui/icons-material/Delete';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PaymentIcon from '@mui/icons-material/Payment';
import ReplayIcon from '@mui/icons-material/Replay';
import LogoutIcon from '@mui/icons-material/Logout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SettingsList() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '22rem', bgcolor: 'white', overflow: 'auto', height: '30rem' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton>
                <ListItemIcon>
                    <AccountCircleIcon/>
                </ListItemIcon>
                <ListItemText primary="Profil" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <LockIcon />
                </ListItemIcon>
                <ListItemText primary="Privatsphäre" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ShieldIcon />
                </ListItemIcon>
                <ListItemText primary="Sicherheit" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <PaymentIcon />
                </ListItemIcon>
                <ListItemText primary="Zahlungsmethoden" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <QueryStatsIcon />
                </ListItemIcon>
                <ListItemText primary="Statistik" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <DeleteIcon/>
                </ListItemIcon>
                <ListItemText primary="Account löschen" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ReplayIcon />
                </ListItemIcon>
                <ListItemText primary="Account wiederherstellen" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Ausloggen" />
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary="Weitere Einstellungen" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
}
