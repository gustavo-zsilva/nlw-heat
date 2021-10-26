import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { api } from '../../services/api'

import logoImg from '../../assets/logo.svg'
import styles from './styles.module.scss'
import { useAuth } from '../../hooks/useAuth'

type Message = {
    id: string,
    user_id: string,
    text: string,
    user: {
        name: string,
        avatar_url: string,
    },
    belongsToUser: boolean,
}

const messagesQueue: Message[] = []

const socket = io('http://localhost:4000')

socket.on('new_message', (newMessage: Message) => {
    messagesQueue.push(newMessage)
})

export function MessageList() {
    const [messages, setMessages] = useState<Message[]>([])
    const { user } = useAuth()

    useEffect(() => {
        const timer = setInterval(() => {
            if (messagesQueue.length > 0) {
                let lastMessage = messagesQueue[0]
                lastMessage = {
                    ...lastMessage,
                    belongsToUser: lastMessage.user_id === user?.id,
                }

                setMessages(prevState => [
                    lastMessage,
                    prevState[0],
                    prevState[1],
                ].filter(Boolean))

                messagesQueue.shift()
            }
        }, 3000)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        api.get<Message[]>('/messages/last3').then(response => {
            const filteredMessages = filterUserMessages(response.data)
            setMessages(filteredMessages)
        })
    }, [])

    useEffect(() => {
        console.log(user)
        if (!user) return

        const filteredMessages = filterUserMessages()
        setMessages(filteredMessages)

        return () => setMessages(messages.map(message => ({ ...message, belongsToUser: false })))
    }, [user])

    function filterUserMessages(optMessages: Message[] = messages) {
        const filteredMessages = optMessages.map(message => ({
            ...message,
            belongsToUser: message.user_id === user?.id,
        }))

        return filteredMessages
    }

    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                {messages.map(message => {
                    return (
                        <li key={message.id} className={`${styles.message} ${message.belongsToUser && styles.belongsToUser}`}>
                            <p className={styles.messageContent}>{message.text}</p>
                            <div className={styles.messageUser}>
                                <div className={styles.userImage}>
                                    <img src={message.user.avatar_url} alt={user?.name} />
                                </div>
                                <a
                                    href={`https://github.com/${user?.login}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {message.user.name}
                                </a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}