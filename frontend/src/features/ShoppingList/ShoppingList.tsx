import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store/store-hooks';
import EditButton from '../../shared/UIKit/EditButton/EditButton';
import styles from './ShoppingList.module.scss';
import ShoppingListItem from './components/ShoppingListItem/ShoppingListItem';
import { getShoppingItems } from './api/shoppingListApi';
import { selectShoppingItems, selectStatus } from './model/selectors';
import Skeleton from '../../shared/UIKit/Skeleton/Skeleton';

function ShoppingList() {
    const dispatch = useAppDispatch();
    const ShoppingItems = useAppSelector(selectShoppingItems);
    const status = useAppSelector(selectStatus);
    useEffect(() => {
        dispatch(getShoppingItems());
    }, [dispatch]);

    return (
        <div className={styles.shoppingList}>
            <h2 className={styles.title}>Список покупок</h2>
            <EditButton customStyles={styles.editButton} />

            <div className={styles.list}>
                {status === 'loading' ? (
                    <Skeleton customStyles={styles.shoppingListSkeleton} />
                ) : (
                    ShoppingItems.map((item) => (
                        <ShoppingListItem key={item.id} itemData={item} />
                    ))
                )}
            </div>
        </div>
    );
}

export default ShoppingList;
