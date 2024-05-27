export type ShoppingItem = {
    id: number;
    title: string;
    price: number;
    date: string;
    isPurchased: boolean;
    important: boolean;
    userID: string;
};

export type ShoppingListState = {
    items: ShoppingItem[];
    status: 'loading' | 'error' | 'success';
    errorMessage: string;
};

export type ResponseShoppingData = {
    items: ShoppingItem[];
    errorMessage: string;
};
