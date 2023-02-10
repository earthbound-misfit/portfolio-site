import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#081C15',
    800: '#1B4332',
    700: '#2D6A4F',
    600: '#40916C',
    500: '#52B788',
    400: '#74C69D',
    300: '#95D5B2',
    200: '#B7E4C7',
    100: '#D8F3DC',
  }
}

const theme = extendTheme({ colors })


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

