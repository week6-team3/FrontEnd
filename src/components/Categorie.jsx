import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import FlightRoundedIcon from '@mui/icons-material/FlightRounded';
import FlightLandRoundedIcon from '@mui/icons-material/FlightLandRounded';

import styled from 'styled-components';

const Categorie = () => {
    const [value, setValue] = useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <SubHeader>
            <BottomNavigation className='btnBox'
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="국내여행" icon={<FlightTakeoffRoundedIcon sx={{ fontSize: '25px' }} />} />
                <BottomNavigationAction label="해외여행" icon={<FlightRoundedIcon sx={{ fontSize: '25px' }} />} />
                <BottomNavigationAction label="about us" icon={<FlightLandRoundedIcon sx={{ fontSize: '25px' }} />} />
            </BottomNavigation>
        </SubHeader>

    );
}

export default Categorie

const SubHeader = styled.div`
    box-shadow: 3px 5px 5px 1px gray;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid gray;
    .btnBox{
        background-color:#F9EBD7;
        width:100%;

    }
    `