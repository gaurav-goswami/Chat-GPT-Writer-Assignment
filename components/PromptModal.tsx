import React, { useEffect, useRef, useState } from 'react';
import ChatMessage from './ChatMessage';
// import GenPromptBtn from './Buttons/GenPromptBtn';
import GenerateIcon from '../assets/send-command.svg';
import RegenerateIcon from '../assets/regenerate.svg';
import InsertPromptBtn from './Buttons/InsertPromptBtn';

interface PromptModalProps {
  closeModal: () => void;
}

type TMessage = {
  message: string;
  isUser: boolean;
}

const PromptModal: React.FC<PromptModalProps> = ({ closeModal }) => {

  const [messages, setMessages] = useState<TMessage[]>([]);
  const [prompt, setPrompt] = useState<string>('');

  const modalContentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalContentRef.current && !modalContentRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  const handleGenerate = () => {
    if (prompt.trim() !== '') {
      setMessages([...messages, { message: prompt, isUser: true }]);
      setPrompt('');
    } else {
      // handle empty prompt
      console.log("Prompt is empty, cannot generate message");
    }
  }

  useEffect(() => {
    // manually adding generated message only after user sends a message
    let timeoutId: NodeJS.Timeout;
    if (messages.length === 1 && messages[0].isUser) {
      timeoutId = setTimeout(() => {
        setMessages([...messages, { message: "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.", isUser: false }]);
      }, 200);
    }
    return () => clearTimeout(timeoutId);
  }, [messages])

  return (
    <div
      className='absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center z-1000'
      onClick={handleClickOutside}
    >
      <div
        className='bg-white p-6 shadow-lg rounded-xl flex flex-col gap-2 items-end'
        ref={modalContentRef}
        style={{ width: '25%' }}
      >

        <ChatMessage message={messages} />
        <input
          type='text'
          className='w-full p-2 border border-gray-100 rounded mb-4'
          placeholder='Your prompt'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        {/* <GenPromptBtn /> */}
        <div className='flex items-center gap-4'>
          {
            messages.length > 0 && <InsertPromptBtn />
          }
          <button
            className='text-white p-2 rounded-lg w-max px-6 py-2 text-md flex gap-2 items-center self-end h-12'
            style={{ backgroundColor: '#3B82F6' }}
            onClick={messages.length < 1 ? handleGenerate : undefined}
          >
            <img src={messages.length > 0 ? RegenerateIcon : GenerateIcon} alt="Generate" className='w-5 h-5' />
            <span style={{ fontSize: '12px' }}>
              {
                messages.length > 0 ? 'Regenerate' : 'Generate'
              }
            </span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default PromptModal;
