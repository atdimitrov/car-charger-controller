import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import EvStationRoundedIcon from '@mui/icons-material/EvStationRounded';
import PowerRoundedIcon from '@mui/icons-material/PowerRounded';

import { open } from '../store/slices/newSessionDialogSlice';

const Controls = () => {
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);

    const actions = [
        { icon: <PowerRoundedIcon />, name: 'Socket', action: () => console.log('socket click') }
    ];

    return (
        <SpeedDial
            ariaLabel="Car charger SpeedDial"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={
                <SpeedDialIcon
                    icon={<PlayArrowRoundedIcon />}
                    openIcon={<EvStationRoundedIcon />}
                />
            }
            FabProps={{
                onClick: () => {
                    if (isOpen) {
                        dispatch(open());
                    }
                }
            }}
            open={isOpen}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={action.action}
                />
            ))}
        </SpeedDial>
    );
};

export default Controls;
