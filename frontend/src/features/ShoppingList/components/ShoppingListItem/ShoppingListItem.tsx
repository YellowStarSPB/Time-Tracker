import { ShoppingItem } from '../../model/types';
import styles from './ShoppingListItem.module.scss';

type ItemProp = {
    itemData: ShoppingItem;
};
/* TODO
в будущем перенести функцию в helpers
*/
function dateFormat(date: string) {
    //переводим в нормальный формат
    date = new Date(date).toLocaleString('ru-RU', {
        year: 'numeric',
        month: 'long',
    });
    //отрезаем "г"
    if (date.includes(' г.')) {
        date = date.replace(' г.', '');
    }
    //делаем первую букву заглавной
    date = date.charAt(0).toUpperCase() + date.slice(1);

    return date;
}

function ShoppingListItem({ itemData }: ItemProp) {
    const formatedDate = dateFormat(itemData.date);

    return (
        <div className={styles.item}>
            <div className={styles.itemInfo}>
                <label className={styles.itemCheckboxLabel}>
                    <input className={styles.itemCheckbox} type="checkbox" />
                    <span className={styles.customCheckbox}></span>
                </label>
                <div className={styles.itemText}>
                    <h3 className={styles.itemTitle}>{itemData.title}</h3>

                    <p className={styles.itemSubtitle}>{formatedDate}</p>
                </div>
            </div>
            <span
                className={`${styles.itemMark} ${
                    itemData.important ? styles.important : styles.notMatter
                }`}
            >
                {itemData.important ? 'важно' : 'не важно'}
            </span>
            <p className={styles.itemPrice}>{itemData.price.toLocaleString()} ₽</p>
        </div>
    );
}

export default ShoppingListItem;
