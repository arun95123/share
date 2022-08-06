import React, {useRef} from 'react';
import './item.css';

interface Props {
    name: string;
    displayIcon: string;
    id: string;
    onClickHandler: Function;
}

const Item:React.FC<Props> = ({name, displayIcon, onClickHandler, id}) => {
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
            onClick={() => onClickHandler(id)}
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