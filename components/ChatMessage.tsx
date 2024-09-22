interface ChatMessageProps {
    message: {
        message: string;
        isUser: boolean;
    }[]
}

const ChatMessage = ({ message }: ChatMessageProps) => {
    return (
        <div className="flex flex-col gap-6 my-4 w-full">
            {
                message.map((msg, index) => (
                    <span key={index} className={`h-max px-6 py-3 rounded-xl text-gray-700 ${msg.isUser ? 'self-end bg-gray-100' : 'self-start bg-blue-100'}`} style={{ maxWidth: '85%' }}>{msg.message}</span>
                ))
            }
        </div>
    )
}

export default ChatMessage
