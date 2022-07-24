import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from './Components/APiContext/ApiContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
           <ChakraProvider>
           <AppContextProvider>
           <BrowserRouter>
           <App />
           </BrowserRouter>
        </AppContextProvider>
          </ChakraProvider>
);

