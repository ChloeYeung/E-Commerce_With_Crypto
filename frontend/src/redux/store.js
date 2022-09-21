import { configureStore } from "@reduxjs/toolkit";
import company_authSlice from "./company_authSlice";
import customer_authSlice from "./customer_authSlice";
import todoSlice from "./todoSlice";
import company_pmSlice from "./company_pmSlice";
import customer_showProductSlice from "./customer_showProductSlice";
import logger from "redux-logger";


export const store = configureStore({
  reducer: {
    authCom: company_authSlice,
    authCus: customer_authSlice,
    todoReducer: todoSlice,
    pmReducer: company_pmSlice,
    showProductReducer: customer_showProductSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
