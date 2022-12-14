import React, {FC} from 'react';

import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import {Badge} from "@mui/material";

interface ICardControlButtonProps {
    agree: boolean;
    userId: number;
    action: (matchedUserId: number, like: boolean) => void;
}

const agreeStyle: Object = {
    position: 'absolute',
    backgroundColor: 'green',
    bottom: '10px',
    right: '10px',
    borderRadius: '50%',
    padding: '10px'
}

const disagreeStyle: Object = {
    position: 'absolute',
    backgroundColor: 'red',
    bottom: '10px',
    left: '10px',
    borderRadius: '50%',
    padding: '10px'
}

const CardControlButton: FC<ICardControlButtonProps> = ({userId, agree, action}) => {

    const handleClick = () => {
        action(userId, agree);
    }

    return (
        <button style={agree ? agreeStyle : disagreeStyle} onClick={handleClick}>
            <Badge color="primary">
                {agree ?
                    <DoneIcon/>
                    :
                    <CloseIcon/>
                }
            </Badge>
        </button>
    );
};

export default CardControlButton;