import React from 'react';
import { accessModifier, item } from '../../../../types';
import DropDown from '../../../dropDown';
import './target-item.css';

const TargetItem:React.FC<item> = ({displayIcon, name, description, access}) => {
    return (
        <div className="target-item">
            {displayIcon ? 
                <img src={displayIcon} alt="decorative" className="target-item__logo" />
            :
                <div className='target-item__letter'>{name.slice(0,1).toUpperCase()}</div>
            }
            <div className="target-item__text">
                <h6>{name}</h6>
                <p>{description}</p>
            </div>
            <DropDown 
                defaultValue={access}
                options={[accessModifier.FULL_ACCESS, accessModifier.CAN_EDIT, accessModifier.CAN_VIEW, accessModifier.NO_ACCESS]}
            />
     </div>
    );
}

export default TargetItem;