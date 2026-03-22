import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import commonSlice from './commonSlice';
import userReducer from '../../../feature-module/user/userSlice'
import carReducer from '../../../feature-module/listings/carSlice'
import checkoutReducer from '../../../feature-module/booking/checkoutSlice'
const store = configureStore({
  reducer: {
    rootReducer: rootReducer,
    commonSlice: commonSlice,
    user:userReducer,
    car:carReducer,
    checkout:checkoutReducer,
  },
});

export default store;
