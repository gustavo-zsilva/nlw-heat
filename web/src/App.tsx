import { useContext } from 'react'
import styles from './App.module.scss'
import { Banner } from './components/Banner'

import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { SendMessageForm } from './components/SendMessageForm'
import { AuthContext } from './contexts/auth'

export function App() {
  const { user } = useContext(AuthContext)

  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
      <MessageList />
      { !!user ? <SendMessageForm /> : <LoginBox /> }
      <Banner type="react" />
      <Banner type="reactNative" />
      <Banner type="node" />
      <Banner type="elixir" />
    </main>
  )
}