import styles from './styles.module.scss'

export function ErrorMessage() {
    return (
        <div className={styles.errorMessage}>
            <div>
                <span>😵 Oops!</span>
                <strong>
                    Parece que ocorreu um erro ao buscar as mensagens.
                    Talvez o servidor esteja fora do ar, ou sua internet está fraca.
                </strong>
            </div>
        </div>
    )
}