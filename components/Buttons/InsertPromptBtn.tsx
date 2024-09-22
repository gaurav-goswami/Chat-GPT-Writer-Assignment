import InsertIcon from '../../assets/insert-icon.svg';

const InsertPromptBtn = () => {
    return (
        <button className='p-2 rounded-lg border border-gray-300 w-max px-4 py-2 text-md flex gap-2 items-center h-12' style={{ border: '1px solid #666D80' }}>
            <img src={InsertIcon} alt="Insert" className='w-3 h-3' />
            <span style={{ fontSize: '12px' }} className='text-gray-600 font-semibold'>Insert</span>
        </button>
    )
}

export default InsertPromptBtn
