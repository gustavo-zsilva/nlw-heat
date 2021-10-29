import { AiFillFire } from 'react-icons/ai'

import styles from './styles.module.scss'

export function DoWhileInvite() {

    function handleGoToDoWhilePage() {
        window.location.href = 'https://dowhile.io/inscricao'
    }

    return (
        <div className={styles.doWhileInvite}>
            <strong>Realize sua inscrição no DoWhile 2021</strong>
            <button className={styles.accessDoWhile} onClick={handleGoToDoWhilePage}>
                <AiFillFire size={28} color="var(--primary)" />
                Embarcar na missão
            </button>
        </div>
    )
}