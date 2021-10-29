import styles from './styles.module.scss'
import socket from 'socket.io-client'
import { useEffect, useState } from 'react'

const io = socket('http://localhost:4000')

export function ConnectedUsers() {

    const [connectedUsers, setConnectedUsers] = useState(0)

    useEffect(() => {
        io.on('clients', clientsCount => {
            setConnectedUsers(clientsCount)
        })
    }, [])

    return (
        <div className={styles.connectedUsers}>
            <strong>{connectedUsers}</strong>
            <span> usuários conectado(s)</span>
        </div>
    )
}