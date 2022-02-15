import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import Router from 'next/router';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [isLoading,setIsLoading]=useState(false);

  Router.events.on("routeChangeStart", (url) =>{
    console.log('Change start start');
    setIsLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) =>{
    console.log('Change in Complete');
    setIsLoading(false);
  });
  return  (<Layout>
              {isLoading && <div className='centered'><LoadingSpinner /></div> }
              {!isLoading && <Component {...pageProps} /> }
          </Layout> );
}

export default MyApp
