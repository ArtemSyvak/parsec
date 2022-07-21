import styles from './SectionTitle.module.scss'

type Props = {
    title: string
    subtitle: string
    index: string
}

const SectionTitle = ({
    title,
    subtitle,
    index
}: Props) => {
    return(
        <div className={styles.sectionTitleContainer}>

            <h2>
                {title}
                <span className={styles.topLine}></span>
                <span className={styles.index}>{index}</span>
                <span className={styles.bottomLine}></span>
                <span className={styles.topCircle}></span>
                <span className={styles.bottomCircle}></span>                
            </h2>
            <span className={styles.subtitle}>{subtitle}</span>
           
        </div>
    )
}

export default SectionTitle
