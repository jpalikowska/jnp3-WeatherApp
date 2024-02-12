import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../themes';
import { GlobalStyle } from '../../global-styles';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeButtonWrapper } from './ThemeButtonWrapper';
import Grid from './Grid'

import { startForecast } from '../../forecast/reducer';

function ThemeButton({changeTheme}: any) {
  return (
    <ThemeButtonWrapper onClick={changeTheme}>Change theme</ThemeButtonWrapper>
  )
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startForecast())
  }, [dispatch]);

  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
    <GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme}/>
      <ThemeButton changeTheme={() => setTheme(theme => theme === 'light' ? 'dark' : 'light')} />
      <Grid />
    </>
    </ThemeProvider>
  )
}

export default App;
