import styles from './ShowreelDNA.module.scss';

interface Props {
    index: number,
    title: string,
    description: string
}

const ShowreelDNA = ({
    index,
    title,
    description
}: Props) => {
    return (
        <div className={styles.DNASliderItem}>
            <h3>// {title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ShowreelDNA
