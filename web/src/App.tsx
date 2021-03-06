import { useContext } from 'react'

import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { SendMessageForm } from './components/SendMessageForm'
import { Banner } from './components/Banner'
import { AccessNLW } from './components/AccessNLW'
import { DoWhileInvite } from './components/DoWhileInvite'
import { AuthContext } from './contexts/auth'

import reactBg from './assets/banners/large-triangles.svg'
import reactNativeBg from './assets/banners/zig-zag.svg'
import nodeBg from './assets/banners/diagonal-stripes.svg'
import elixirBg from './assets/banners/endless-constellation.svg'

import styles from './App.module.scss'

export function App() {
  const { user } = useContext(AuthContext)

  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
        <div className={styles.mainContent}>
            <MessageList />
            { !!user ? <SendMessageForm /> : <LoginBox /> }
        </div>
      
        <div className={styles.sideContent}>
            <div className={styles.message}>
                <strong>Não se sente preparado para o DoWhile?</strong>
                <span>Acesse as últimas NLWs para mais conteúdo e para avançar ao próximo nível.</span>
            </div>

            <div className={styles.banners}>
                <Banner type="react" bgImage={reactBg} />
                <Banner type="reactNative" bgImage={reactNativeBg} />
                <Banner type="node" bgImage={nodeBg} />
                <Banner type="elixir" bgImage={elixirBg} />
            </div>

            <AccessNLW />
        </div>

        <DoWhileInvite />
    </main>
  )
}