import { useState } from 'react';
import logoIcon from '../../assets/img/account-logo.svg';

import styles from './MyAccount.module.scss';
import Skeleton from '../../shared/UIKit/Skeleton/Skeleton';

function MyAccount() {
    const [loading, setLoading] = useState(true);
    useState(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <div className={styles.myAccount}>
            {loading ? (
                <Skeleton customStyles={styles.myAccountSkeleton}/>
            ) : (
                <>
                    <img className={styles.avatar} src={logoIcon} alt="account logo" />
                    <p className={styles.name}>Ekaterina Brenkova</p>
                    <button className={styles.notifications}></button>
                </>
            )}
        </div>
    );
}

export default MyAccount;
