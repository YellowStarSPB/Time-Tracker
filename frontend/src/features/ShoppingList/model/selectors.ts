import { RootState } from '../../../app/store/store';
import { ShoppingListState } from './types';

export const selectShoppingItems = (state: RootState): ShoppingListState['items'] =>
    state.shoppingList.items;

export const selectStatus = (state: RootState): ShoppingListState['status'] =>
    state.shoppingList.status;
