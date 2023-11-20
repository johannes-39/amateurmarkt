import React, { useState } from 'react'
import './SwipeSettings.css'
import TuneIcon from '@mui/icons-material/Tune';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { METHODS } from 'http';

const SwipeSettings:React.FC<any> = () => {

    const [open, setOpen] = useState(true);

    const handlebutton = () => {
        setOpen(!open);
    }
    
  return (
    <div>
        <IconButton onClick={handlebutton}>
    <div className='settingsbox'><TuneIcon/></div></IconButton>
    </div>
        
  )
}

export default SwipeSettings;