import GenerateIcon from '../../assets/send-command.svg';

const GenPromptBtn = () => {
    return (
        <>
            <button
                className='text-white p-2 rounded-lg w-max px-6 py-2 text-md flex gap-2 items-center self-end'
                style={{ backgroundColor: '#3B82F6' }}
            >
                <img src={GenerateIcon} alt="Generate" className='w-5 h-5' />
                <span style={{ fontSize: '12px' }}>
                    Generate
                </span>
            </button>
        </>
    )
}

export default GenPromptBtn
