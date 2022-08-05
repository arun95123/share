import React from 'react';
import Learn from '../learn';
import AddTarget from './addTarget';
import WebShare from '../../images/web-share.svg';

import './share-to-web.css';
import './share-widget.css';
import { inputData } from '../../types';

const ShareWidget:React.FC<{data: inputData}> = ({data}) => {
    console.log('SHARE WIDGET');
    return(
        <div className="share-widget">
            <div className="share-widget__web">
                <img src={WebShare} alt="decorative" className="share-widget__web__logo" />
                <div className="share-widget__web__text">
                    <h6>Share to Web</h6>
                    <p>Publish and share link with anyone</p>
                </div>
                <label className="toggler">
                    <input type="checkbox" /> 
                    <span className="slider" />
                </label>
            </div>
            <AddTarget data={data}/>
            <Learn showCopy/>
        </div>
    )
}

export default ShareWidget; 