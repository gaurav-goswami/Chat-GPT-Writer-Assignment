import React, { useRef } from 'react';
import GenerateIcon from '../assets/send-command.svg';

interface PromptModalProps {
  closeModal: () => void;
}

const PromptModal: React.FC<PromptModalProps> = ({ closeModal }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalContentRef.current && !modalContentRef.current.contains(event.target as Node)) {
      closeModal(); 
    }
  };

  return (
    <div
      className='absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center z-1000'
      onClick={handleClickOutside}
    >
      <div
        className='bg-white p-6 shadow-lg w-1/4 rounded-xl flex flex-col gap-2 items-end'
        ref={modalContentRef}
      >
        <input
          type='text'
          className='w-full p-2 border border-gray-100 rounded mb-4'
          placeholder='Your prompt'
        />
        <button
          className='bg-blue-500 text-white p-2 rounded-lg w-max px-4 py-2 text-md flex gap-2 items-center text-md'
        >
          <img src={GenerateIcon} alt="Generate" className='w-6 h-6' />
          Generate
        </button>
      </div>
    </div>
  )
}

export default PromptModal;
