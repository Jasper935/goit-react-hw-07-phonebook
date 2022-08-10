import rootReducer from './contacts/contacts-reducers'
import { configureStore } from '@reduxjs/toolkit';



const store = configureStore({
    reducer: {
        contacts: rootReducer

    }
});


export { store }

