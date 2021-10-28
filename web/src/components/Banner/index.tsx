import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiElixir } from 'react-icons/si'

import diegoPhoto from '../../assets/educators/diego.webp'
import rafaPhoto from '../../assets/educators/rafa.webp'
import daniPhoto from '../../assets/educators/dani.webp'
import rodrigoPhoto from '../../assets/educators/rodrigo.webp'

import styles from './styles.module.scss'



const types = {
    node: {
        name: 'NodeJS',
        educatorName: 'Dani',
        educatorPhoto: daniPhoto,
        icon: <FaNodeJs color="#fff" size={32} />
    },
    reactNative: {
        name: 'React Native',
        educatorName: 'Rodrigão',
        educatorPhoto: rodrigoPhoto,
        icon: <FaReact color="#fff" size={32} />
    },
    react: {
        name: 'ReactJS',
        educatorName: 'Diegão',
        educatorPhoto: diegoPhoto,
        icon: <FaReact color="#fff" size={32} />
    },
    elixir: {
        name: 'Elixir',
        educatorName: 'Rafa',
        educatorPhoto: rafaPhoto,
        icon: <SiElixir color="#fff" size={32} />
    }
}

type BannerProps = {
    type: keyof typeof types;
    bgImage?: string,
}

export function Banner({ type, bgImage }: BannerProps) {
    
    return (
        <div
            className={styles.banner}
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className={styles.trailInfo}>
                {types[type].icon}
                <strong>Trilha {types[type].name}</strong>
            </div>

            <div className={styles.educatorInfo}>
                <div className={styles.imageWrapper}>
                    <img
                        src={types[type].educatorPhoto}
                        alt={types[type].educatorName}
                    />
                </div>
                <span>com {''}
                    <strong>{types[type].educatorName}</strong>
                </span>
            </div>
        </div>
    )
}