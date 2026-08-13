"use client";

import { Provider } from 'react-redux';
import { store } from '../store';
import { LanguageProvider } from '../context/LanguageContext';

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </Provider>
  );
}
