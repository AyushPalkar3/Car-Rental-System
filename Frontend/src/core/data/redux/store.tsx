import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import commonSlice from "./commonSlice";
import userReducer from "../../../feature-module/user/userSlice";
import carReducer from "../../../feature-module/listings/carSlice";
import checkoutReducer, {
  checkoutInitialState,
  type CheckoutState,
} from "../../../feature-module/booking/checkoutSlice";
import {
  loadPersistedCheckout,
  savePersistedCheckout,
} from "../../../feature-module/booking/checkoutPersistence";

const persistedCheckoutRaw = loadPersistedCheckout();
const preloadedCheckout: CheckoutState | undefined =
  persistedCheckoutRaw &&
  persistedCheckoutRaw.car &&
  typeof (persistedCheckoutRaw.car as { id?: string }).id === "string"
    ? {
        ...checkoutInitialState,
        ...(persistedCheckoutRaw as unknown as CheckoutState),
      }
    : undefined;

const store = configureStore({
  reducer: {
    rootReducer: rootReducer,
    commonSlice: commonSlice,
    user: userReducer,
    car: carReducer,
    checkout: checkoutReducer,
  },
  preloadedState: preloadedCheckout
    ? { checkout: preloadedCheckout }
    : undefined,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

let checkoutSaveTimer: ReturnType<typeof setTimeout> | null = null;
store.subscribe(() => {
  if (checkoutSaveTimer) clearTimeout(checkoutSaveTimer);
  checkoutSaveTimer = setTimeout(() => {
    checkoutSaveTimer = null;
    savePersistedCheckout(store.getState().checkout as Record<string, unknown>);
  }, 400);
});

export default store;
