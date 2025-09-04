import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  dataNavLayout: 'vertical',
  dataMenuStyles: 'light',
  dataHeaderStyles: 'light',
  dataThemeMode: 'light',
  dataVerticalStyle: 'default',
  toggled: '',
  dataNavStyle: ''
};

const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'THEME_CHANGE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: themeReducer
});

export const ThemeChanger = (payload: any) => ({
  type: 'THEME_CHANGE',
  payload
});

export default store;