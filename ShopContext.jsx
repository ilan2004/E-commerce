import React, { createContext } from 'react';
import all_product from '../Assets/all_product'; // Assuming valid data import

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = { all_product }; // Access data imported directly

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
