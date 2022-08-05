import React, {useState} from 'react';
import ShareWidget from '../shareWidget';

import shareImage from '../../images/share.svg';
import './notion.css';
import { inputData } from '../../types';

const Notion:React.FC<{data: inputData}> = ({data}) => {
    const [showShareWidget, toggleShareWidget] = useState(false);
    return(
        <div className="notion">
            <button className="share-button" onClick={() => toggleShareWidget(!showShareWidget)}>
                <span className="share-button__text">Share</span>
                <img className="share-button__image" alt="share" src={shareImage} />
            </button>
            {showShareWidget ? <ShareWidget data={data}/> : <></>}
        </div>
    );
};

export default Notion; 