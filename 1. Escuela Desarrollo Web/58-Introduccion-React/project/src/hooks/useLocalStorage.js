import React from 'react';

const UseLocalStorage = (itemKey, itemInitialValue) => {

    const localStorageItem = localStorage.getItem(itemKey);
    let parsedItem;

    if (!localStorageItem) {
        localStorage.setItem(itemKey, JSON.stringify(itemInitialValue));
        parsedItem = itemInitialValue;
    } else {
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(parsedItem)

    const saveItem = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemKey, stringifiedItem)

        setItem(newItem)
    }

    return [
        item,
        saveItem
    ]
}

export default UseLocalStorage;
