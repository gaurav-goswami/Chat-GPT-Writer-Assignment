import InsertIcon from '../../assets/insert-icon.svg';

const InsertPromptBtn = () => {

    const handleInsert = () => {
        chrome.runtime.sendMessage({
            text: "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.",
            from: "insert-btn"
        });
    }

    return (
        <button className='p-2 rounded-lg border border-gray-300 w-max px-4 py-2 text-md flex gap-2 items-center h-12' style={{ border: '1px solid #666D80' }} onClick={handleInsert}>
            <img src={InsertIcon} alt="Insert" className='w-4 h-4' />
            <span style={{ fontSize: '12px' }} className='text-gray-600 font-semibold'>Insert</span>
        </button>
    );
};

export default InsertPromptBtn;
