import WandIcon from '../assets/wand-icon.svg';
import React from 'react';

const AiReplyButton: React.FC = () => {
    return (
        <button className='shadow-md rounded-full absolute flex justify-center items-center w-full h-full' onClick={() => console.log("Clicked on the button")}>
            <img src={WandIcon} alt="AI Reply Button" className='w-5 h-5' />
        </button>
    )
}

export default AiReplyButton
