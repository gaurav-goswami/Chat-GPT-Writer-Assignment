import GenerateIcon from '../../assets/send-command.svg';
import InsertPromptBtn from './InsertPromptBtn';
import RegenerateIcon from '../../assets/regenerate.svg';

interface GenPromptBtnProps {
    messages: {
        message: string;
        isUser: boolean;
    }[];
    handleGenerate: () => void;
}

const GenPromptBtn = ({ messages, handleGenerate }: GenPromptBtnProps) => {
    return (

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

    )
}

export default GenPromptBtn
