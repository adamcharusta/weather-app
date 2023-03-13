import React from 'react';
import './App.css';
import {
  Card, CardContent, Container, useTheme,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchCountryComponent from './components/SearchCountryComponent/SearchCountryComponent';

function App() {
  const theme = useTheme();
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  // const { t, i18n } = useTranslation();
  //
  // const languageOptions = [
  //   { value: 'en', label: 'English' },
  //   { value: 'pl-PL', label: 'Polish' },
  // ];

  // const currentLanguage = find(
  //   languageOptions,
  //   { value: i18n.language },
  // );

  // const handleChange = (event) => {
  //   i18n.changeLanguage(event.target.value);
  // };

  return (
    <Container
      disableGutters={useMediaQuery(theme.breakpoints.down('sm'))}
      sx={{
        width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}
    >
      <Card sx={{
        height: '100%', width: '100%',
      }}
      >
        <CardContent>
          <SearchCountryComponent />
        </CardContent>
      </Card>

    </Container>
  );
}

export default App;
