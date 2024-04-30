import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import codingLogo from './assets/coding-28.svg';
import Header from './components/Header';
import { Box, Container, createTheme, CssBaseline, PaletteMode, ThemeProvider, Typography } from '@mui/material';
import { useState } from 'react';
import { Theme } from '@emotion/react';

function App() {
  const [theme, setTheme] = useState<Theme>(createTheme({
    palette: {
      mode: 'light'
    }
  }));

  const changeTheme = (mode: PaletteMode) => {
    setTheme(createTheme({
      palette: {
        mode,
      }
    }));
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      <Header changeTheme={changeTheme} />
      <Container disableGutters sx={{ display: 'flex', marginTop: 10 }}>
        <Box>
          <Typography variant='h1' sx={{ fontWeight: 'bold' }}>
            Hi, my name is Georgi
          </Typography>
          <Typography variant='h3' sx={{
            fontWeight: 'bold'
          }}>
              I am a passionate software developer with experience in building Web and Desktop applications
          </Typography>
        </Box>
        <img style={{
          maxWidth: '30em'
        }} src={codingLogo} alt="Coding Logo" />
      </Container>
      <Typography variant='h1'>Still Work in progress</Typography>
    </ThemeProvider>
  )
}

export default App
