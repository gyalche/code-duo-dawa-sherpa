import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.scss'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@mui/material'
import theme from '../theme';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
 <ThemeProvider theme={theme}>

    <App />
 </ThemeProvider>

 
     <Toaster position="top-center" reverseOrder={false} />
      </QueryClientProvider>
  </React.StrictMode>,
)
