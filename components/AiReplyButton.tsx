import WandIcon from '../assets/wand-icon.svg';
import React from 'react';

const AiReplyButton: React.FC = () => {
    return (
        <button style={{ borderRadius: '50%', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%", height: '100%' }} className='shadow-sm' onClick={() => console.log("Clicked on the button")}>
            <img src={WandIcon} alt="AI Reply Button" style={{ width: '12px', height: '12px' }} />
        </button>
    )
}

export default AiReplyButton
