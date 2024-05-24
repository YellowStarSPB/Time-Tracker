import styles from './Skeleton.module.scss';

type SkeletonType = {
    customStyles?: string;
};

function Skeleton({ customStyles }: SkeletonType) {
    return <div className={`${styles.skeleton} ${customStyles}`}></div>;
}

export default Skeleton;
