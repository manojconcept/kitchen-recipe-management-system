import React from 'react';
import Divider from '@mui/material-next/Divider';


import './style.css'


const Splitscreen = ({ leftpage = false, middlescreen = false, rightpage = false }) => {
    return (
        <div id='container'>
            <div className='leftscreen'>
                {leftpage}
            </div>

            <div className='middlescreen'>
                {middlescreen}
            <Divider orientation="vertical" variant="middle" />

            </div>
            <div className='rightscreen'>
                {rightpage}
            </div>


        </div>
    )
}

export default Splitscreen;