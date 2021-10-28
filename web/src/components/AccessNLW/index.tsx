import { FiArrowRight } from 'react-icons/fi'

import styles from './styles.module.scss'

export function AccessNLW() {
    return (
        <div className={styles.accessNLW}>
            <strong>Acessar conteúdo das últimas NLWs</strong>
            <FiArrowRight color="#fff" size={32} />
        </div>
    )
}