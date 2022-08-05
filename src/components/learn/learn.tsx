import React from 'react';
import Question from '../../images/learn.png';
import Link from '../../images/link.svg';

import './learn.css';

interface Props {
    showCopy?: boolean;
}

const Learn:React.FC<Props> = ({showCopy}) => {
    return(
        <div className="share-widget__learn">
            <div className="share-widget__container">
                <img src={Question} alt="decorative" className="share-widget__learn__image"/>
                <a href='/#' className="share-widget__learn__text">learn about sharing</a>
            </div>
            {showCopy ? 
                <div className="share-widget__container">
                    <img src={Link} alt="decorative" className="share-widget__learn__image"/>
                    <span className="share-widget__learn__copy">Copy link</span>
                </div>
            :
                <></>
            }
        </div>
    )
}

export default Learn; 