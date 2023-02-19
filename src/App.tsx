import React, { Suspense } from 'react';
import './App.scss';
import { HelmetProvider } from 'react-helmet-async';
import AppRouter from '@routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CONSTANTS } from '@utils/constants';
import Loading from '@components/atoms/Loading';
import AuthenticateProvider from '@context/AuthenticateContext';
// import { Provider } from "react-redux";
// import { store } from "store";

// ------------------------------------------

const App = () => (
  <Suspense fallback={<Loading fullScreen />}>
    <AppRouter />
  </Suspense>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: CONSTANTS.DEFAULT_QUERY_OPTION,
  },
});
const AppWrapper: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AuthenticateProvider>
        <App />
      </AuthenticateProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default AppWrapper;
