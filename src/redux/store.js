import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./reducers/ui-slice";
import orderSlice from "./reducers/order-slice";
import jobSlice from "./reducers/job-slice";
import authSlice from "./reducers/auth-slice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        order: orderSlice.reducer,
        job: jobSlice.reducer,
        auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;