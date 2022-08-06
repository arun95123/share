import React from 'react';
import close from '../../../images/close.svg';
import './selected-item.css';

interface Props {
    name: string;
    removeSelected: Function;
}

const SelectedItem:React.FC<Props> = ({name, removeSelected}) => {
    return(
        <div className='selected-item'>
            <div>{name}</div>
            <img src={close} alt='close' onClick={() => removeSelected(name)}/>
        </div>
    );
}

export default SelectedItem;