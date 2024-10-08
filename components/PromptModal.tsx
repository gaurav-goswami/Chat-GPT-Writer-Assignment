import React, { useEffect, useRef, useState } from 'react';
import ChatMessage from './ChatMessage';
import GenPromptBtn from './Buttons/GenPromptBtn';

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
        className='bg-white p-6 shadow-lg rounded-xl flex flex-col gap-2 items-end h-max'
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
        <GenPromptBtn messages={messages} handleGenerate={handleGenerate} />
      </div>
    </div>
  )
}

export default PromptModal;
