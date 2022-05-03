import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query"
import ReactDOM from 'react-dom';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);