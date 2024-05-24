import EditButton from '../../shared/UIKit/EditButton/EditButton';
import styles from './ShoppingList.module.scss';

function ShoppingList() {
    return (
        <div className={styles.shoppingList}>
            <h2 className={styles.title}>Список покупок</h2>
            <EditButton customStyles={styles.editButton}/>
            <div className={styles.list}>
                <div className={styles.item}>
                    <div className={styles.itemInfo}>
                        <label className={styles.itemCheckboxLabel}>
                            <input className={styles.itemCheckbox} type="checkbox" />
                            <span className={styles.customCheckbox}></span>
                        </label>
                        <div className={styles.itemText}>
                            <h3 className={styles.itemTitle}>Зимняя резина</h3>
                            <p className={styles.itemSubtitle}>Ноябрь 2023</p>
                        </div>
                    </div>
                    <span className={`${styles.itemMark} ${styles.important}`}>
                        важно
                    </span>
                    <p className={styles.itemPrice}>23 000 ₽</p>
                </div>

                <div className={styles.item}>
                    <div className={styles.itemInfo}>
                        <label className={styles.itemCheckboxLabel}>
                            <input className={styles.itemCheckbox} type="checkbox" />
                            <span className={styles.customCheckbox}></span>
                        </label>
                        <div className={styles.itemText}>
                            <h3 className={styles.itemTitle}>Комплект постельного</h3>
                            <p className={styles.itemSubtitle}>Ноябрь 2023</p>
                        </div>
                    </div>
                    <span className={`${styles.itemMark} ${styles.notMatter}`}>
                        не важно
                    </span>
                    <p className={styles.itemPrice}>23 000 ₽</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemInfo}>
                        <label className={styles.itemCheckboxLabel}>
                            <input className={styles.itemCheckbox} type="checkbox" />
                            <span className={styles.customCheckbox}></span>
                        </label>
                        <div className={styles.itemText}>
                            <h3 className={styles.itemTitle}>Зимняя резина</h3>
                            <p className={styles.itemSubtitle}>Ноябрь 2023</p>
                        </div>
                    </div>
                    <span className={`${styles.itemMark} ${styles.important}`}>
                        важно
                    </span>
                    <p className={styles.itemPrice}>23 000 ₽</p>
                </div>

                <div className={styles.item}>
                    <div className={styles.itemInfo}>
                        <label className={styles.itemCheckboxLabel}>
                            <input className={styles.itemCheckbox} type="checkbox" />
                            <span className={styles.customCheckbox}></span>
                        </label>
                        <div className={styles.itemText}>
                            <h3 className={styles.itemTitle}>Комплект постельного</h3>
                            <p className={styles.itemSubtitle}>Ноябрь 2023</p>
                        </div>
                    </div>
                    <span className={`${styles.itemMark} ${styles.notMatter}`}>
                        не важно
                    </span>
                    <p className={styles.itemPrice}>23 000 ₽</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemInfo}>
                        <label className={styles.itemCheckboxLabel}>
                            <input className={styles.itemCheckbox} type="checkbox" />
                            <span className={styles.customCheckbox}></span>
                        </label>
                        <div className={styles.itemText}>
                            <h3 className={styles.itemTitle}>Зимняя резина</h3>
                            <p className={styles.itemSubtitle}>Ноябрь 2023</p>
                        </div>
                    </div>
                    <span className={`${styles.itemMark} ${styles.important}`}>
                        важно
                    </span>
                    <p className={styles.itemPrice}>23 000 ₽</p>
                </div>

                <div className={styles.item}>
                    <div className={styles.itemInfo}>
                        <label className={styles.itemCheckboxLabel}>
                            <input className={styles.itemCheckbox} type="checkbox" />
                            <span className={styles.customCheckbox}></span>
                        </label>
                        <div className={styles.itemText}>
                            <h3 className={styles.itemTitle}>Комплект постельного</h3>
                            <p className={styles.itemSubtitle}>Ноябрь 2023</p>
                        </div>
                    </div>
                    <span className={`${styles.itemMark} ${styles.notMatter}`}>
                        не важно
                    </span>
                    <p className={styles.itemPrice}>23 000 ₽</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemInfo}>
                        <label className={styles.itemCheckboxLabel}>
                            <input className={styles.itemCheckbox} type="checkbox" />
                            <span className={styles.customCheckbox}></span>
                        </label>
                        <div className={styles.itemText}>
                            <h3 className={styles.itemTitle}>Зимняя резина</h3>
                            <p className={styles.itemSubtitle}>Ноябрь 2023</p>
                        </div>
                    </div>
                    <span className={`${styles.itemMark} ${styles.important}`}>
                        важно
                    </span>
                    <p className={styles.itemPrice}>23 000 ₽</p>
                </div>

                <div className={styles.item}>
                    <div className={styles.itemInfo}>
                        <label className={styles.itemCheckboxLabel}>
                            <input className={styles.itemCheckbox} type="checkbox" />
                            <span className={styles.customCheckbox}></span>
                        </label>
                        <div className={styles.itemText}>
                            <h3 className={styles.itemTitle}>Комплект постельного</h3>
                            <p className={styles.itemSubtitle}>Ноябрь 2023</p>
                        </div>
                    </div>
                    <span className={`${styles.itemMark} ${styles.notMatter}`}>
                        не важно
                    </span>
                    <p className={styles.itemPrice}>23 000 ₽</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemInfo}>
                        <label className={styles.itemCheckboxLabel}>
                            <input className={styles.itemCheckbox} type="checkbox" />
                            <span className={styles.customCheckbox}></span>
                        </label>
                        <div className={styles.itemText}>
                            <h3 className={styles.itemTitle}>Зимняя резина</h3>
                            <p className={styles.itemSubtitle}>Ноябрь 2023</p>
                        </div>
                    </div>
                    <span className={`${styles.itemMark} ${styles.important}`}>
                        важно
                    </span>
                    <p className={styles.itemPrice}>23 000 ₽</p>
                </div>

                <div className={styles.item}>
                    <div className={styles.itemInfo}>
                        <label className={styles.itemCheckboxLabel}>
                            <input className={styles.itemCheckbox} type="checkbox" />
                            <span className={styles.customCheckbox}></span>
                        </label>
                        <div className={styles.itemText}>
                            <h3 className={styles.itemTitle}>Комплект постельного</h3>
                            <p className={styles.itemSubtitle}>Ноябрь 2023</p>
                        </div>
                    </div>
                    <span className={`${styles.itemMark} ${styles.notMatter}`}>
                        не важно
                    </span>
                    <p className={styles.itemPrice}>23 000 ₽</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemInfo}>
                        <label className={styles.itemCheckboxLabel}>
                            <input className={styles.itemCheckbox} type="checkbox" />
                            <span className={styles.customCheckbox}></span>
                        </label>
                        <div className={styles.itemText}>
                            <h3 className={styles.itemTitle}>Зимняя резина</h3>
                            <p className={styles.itemSubtitle}>Ноябрь 2023</p>
                        </div>
                    </div>
                    <span className={`${styles.itemMark} ${styles.important}`}>
                        важно
                    </span>
                    <p className={styles.itemPrice}>23 000 ₽</p>
                </div>

                <div className={styles.item}>
                    <div className={styles.itemInfo}>
                        <label className={styles.itemCheckboxLabel}>
                            <input className={styles.itemCheckbox} type="checkbox" />
                            <span className={styles.customCheckbox}></span>
                        </label>
                        <div className={styles.itemText}>
                            <h3 className={styles.itemTitle}>Комплект постельного</h3>
                            <p className={styles.itemSubtitle}>Ноябрь 2023</p>
                        </div>
                    </div>
                    <span className={`${styles.itemMark} ${styles.notMatter}`}>
                        не важно
                    </span>
                    <p className={styles.itemPrice}>23 000 ₽</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemInfo}>
                        <label className={styles.itemCheckboxLabel}>
                            <input className={styles.itemCheckbox} type="checkbox" />
                            <span className={styles.customCheckbox}></span>
                        </label>
                        <div className={styles.itemText}>
                            <h3 className={styles.itemTitle}>Зимняя резина</h3>
                            <p className={styles.itemSubtitle}>Ноябрь 2023</p>
                        </div>
                    </div>
                    <span className={`${styles.itemMark} ${styles.important}`}>
                        важно
                    </span>
                    <p className={styles.itemPrice}>23 000 ₽</p>
                </div>

                <div className={styles.item}>
                    <div className={styles.itemInfo}>
                        <label className={styles.itemCheckboxLabel}>
                            <input className={styles.itemCheckbox} type="checkbox" />
                            <span className={styles.customCheckbox}></span>
                        </label>
                        <div className={styles.itemText}>
                            <h3 className={styles.itemTitle}>Комплект постельного</h3>
                            <p className={styles.itemSubtitle}>Ноябрь 2023</p>
                        </div>
                    </div>
                    <span className={`${styles.itemMark} ${styles.notMatter}`}>
                        не важно
                    </span>
                    <p className={styles.itemPrice}>23 000 ₽</p>
                </div>
            </div>
        </div>
    );
}

export default ShoppingList;
