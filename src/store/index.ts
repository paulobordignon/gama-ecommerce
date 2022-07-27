import { configureStore} from "@reduxjs/toolkit";
import cartReduce from './modules/cart'

const store = configureStore({
    reducer: {cartReduce},
});

export type RootStore = ReturnType<typeof store.getState>

export default store;
