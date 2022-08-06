import React, {useRef} from 'react';
import {item} from '../../../types';
import './item.css';

interface Props extends item {
    onClickHandler: React.MouseEventHandler<HTMLUListElement>;
}

const Item:React.FC<Props> = ({name, displayIcon, onClickHandler}) => {
    const ref = useRef(null);

    const onKeyDownListener = (e: React.KeyboardEvent<HTMLUListElement>) => {
        if((e.key === ' ' || e.key === 'Enter') && ref.current){
            (ref.current as HTMLElement).click();
        }
    }

    return(
        <ul
            ref={ref}
            className='item'
            tabIndex={0}
            onClick={onClickHandler}
            onKeyDown={onKeyDownListener}
        >
            {displayIcon ? 
                <img className='item__image' src={displayIcon} alt='decoration' />
            :
                <div className='item__letter'>{name.slice(0,1).toUpperCase()}</div>
            }
            <div className='item__name'>{name}</div>
        </ul>
    );
};

export default Item;