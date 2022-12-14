import React, {FC} from 'react';

import './leftBarButton.css';
import {useNavigate} from "react-router-dom";

interface ILeftBarButtonProps {
    text: string;
    selected: boolean;
    navigateTo: string;
}

const LeftBarButton: FC<ILeftBarButtonProps> = ({text, selected, navigateTo}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigateTo);
    }

    return (
        <div onClick={handleClick} className={`leftBarButton ${selected ? 'leftBarButton-selected' : ''}`}>
            <span>{text}</span>
        </div>
    );
};

export default LeftBarButton;