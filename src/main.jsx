// main.jsx
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const Client = new QueryClient()
const root = createRoot(document.getElementById('root'))
root.render(
  <QueryClientProvider client={Client}>
    <App />
  </QueryClientProvider>
)
