import React, { Suspense } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { find, map } from 'lodash';
import { decrement, increment } from './store/counterSlice';

import logo from './logo.svg';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const languageOptions = [
    { value: 'en-US', label: 'English' },
    { value: 'pl-PL', label: 'Polish' },
  ];

  const currentLanguage = find(
    languageOptions,
    { value: i18n.language },
  );

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Suspense fallback="loading">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {t('welcome-to-react')}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
            <div>
              <button
                type="button"
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
              >
                Increment
              </button>
              <span>{count}</span>
              <button
                type="button"
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
              >
                Decrement
              </button>
            </div>
          </div>
          <select onChange={handleChange} value={currentLanguage.value}>
            {
            map(
              languageOptions,
              (lang) => <option key={lang.value} value={lang.value}>{lang.label}</option>,
            )
          }
          </select>
        </header>
      </div>
    </Suspense>
  );
}

export default App;
