import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import App from './App';
import store from './store';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    ns: ['translationsNS'],
    defaultNS: 'translationsNS',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    resources: { en: { translationsNS: {} } },
  });

test('renders learn react link', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
