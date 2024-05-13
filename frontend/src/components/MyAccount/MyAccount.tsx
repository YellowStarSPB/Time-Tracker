import logoIcon from '../../assets/img/account-logo.svg';

import styles from './MyAccount.module.scss';

function MyAccount() {
    return (
        <div className={styles.myAccount}>
            <img className={styles.avatar} src={logoIcon} alt="account logo" />
            <p className={styles.name}>Ekaterina Brenkova</p>
            <button className={styles.notifications}></button>
        </div>
    );
}

export default MyAccount;
