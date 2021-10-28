import { FiArrowRight } from 'react-icons/fi'
import { BiRocket } from 'react-icons/bi'

import styles from './styles.module.scss'

export function AccessNLW() {
    return (
        <a
            href="https://nextlevelweek.com/inscricao/7"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.accessNLW}
        >
            <div>
                <BiRocket size={28} />
                <strong>Acessar conteúdo das últimas NLWs</strong>
            </div>
            <FiArrowRight color="#fff" size={32} />
        </a>
    )
}